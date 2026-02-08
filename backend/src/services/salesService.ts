import fs from "fs";
import path from "path";
import { DashboardResponse, SalesByDimension, SalesRecord } from "../types/sales";

// Load JSON file once at startup
const dataPath = path.join(__dirname, "../data/sales.json");

const salesData: SalesRecord[] = JSON.parse(
  fs.readFileSync(dataPath, "utf-8")
);

//Get unique list of states from sales data
 
export const getStates = (): string[] => {
  const states = Array?.from(
    new Set(salesData?.map((record) => record.State))
  );
  return states.sort();
};

// Get minimum and maximum order dates for a state

export const getMinMaxDates = (state: string) => {
  const filtered = salesData?.filter(
    (record) => record?.State === state
  );

  const dates = filtered?.map((r) => new Date(r["Order Date"]));

  return {
    minDate: new Date(Math.min(...dates?.map(Number))),
    maxDate: new Date(Math.max(...dates?.map(Number))),
  };
};


// Get dashboard summary data

export const getDashboardData = (
  state: string,
  from: string,
  to: string
): DashboardResponse => {
  const fromDate = new Date(from);
  const toDate = new Date(to);

  // Filter records based on inputs
  const filtered = salesData?.filter((record) => {
    const date = new Date(record["Order Date"]);
    return (
      record?.State === state &&
      date >= fromDate &&
      date <= toDate
    );
  });

  // Calculate summary numbers
  const totalSales = filtered?.reduce(
    (sum, item) => sum + item?.Sales,
    0
  );

  const totalProfit = filtered?.reduce(
    (sum, item) => sum + item?.Profit,
    0
  );

  const totalQuantity = filtered?.reduce(
    (sum, item) => sum + item?.Quantity,
    0
  );

  const avgDiscount =
    filtered.reduce(
      (sum, item) => sum + item?.Discount,
      0
    ) / (filtered.length || 1);

  // ==============================
  // CHART DATA CALCULATIONS
  // ==============================

  // Sales by city
  const salesByCity: SalesByDimension = {};
  filtered?.forEach((item) => {
    salesByCity[item?.City] =
      (salesByCity[item?.City] || 0) + item.Sales;
  });

  // Sales by category
  const salesByCategory: SalesByDimension = {};
  filtered?.forEach((item) => {
    salesByCategory[item.Category] =
      (salesByCategory[item.Category] || 0) +
      item.Sales;
  });

  // Sales by segment
  const salesBySegment: SalesByDimension = {};
  filtered?.forEach((item) => {
    salesBySegment[item.Segment] =
      (salesBySegment[item.Segment] || 0) +
      item.Sales;
  });

  // Sales by Product
  const salesByProduct: SalesByDimension = {};
  filtered?.forEach((item) => {
    salesByProduct[item["Product Name"]] =
      (salesByProduct[item["Product Name"]] || 0) +
      item.Sales;
  });

  // Sales by Sub-Category
  const salesBySubCategory: SalesByDimension = {};
  filtered?.forEach((item) => {
    salesBySubCategory[item["Sub-Category"]] =
      (salesBySubCategory[item["Sub-Category"]] || 0) +
      item.Sales;
  });

  // Sort Products by highest sales
  const sortedProducts = Object?.entries(salesByProduct)
    .sort((a, b) => b[1] - a[1])
    .reduce((acc: SalesByDimension, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  // Sort Sub-Categories by highest sales
  const sortedSubCategories = Object?.entries(salesBySubCategory)
    .sort((a, b) => b[1] - a[1])
    .reduce((acc: SalesByDimension, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

  // ==============================
  // FINAL RESPONSE
  // ==============================

  return {
    cards: {
      totalSales: totalSales?.toFixed(2) || "0.00",
      totalProfit: totalProfit?.toFixed(2) || "0.00",
      totalQuantity,
      avgDiscount: (avgDiscount * 100)?.toFixed(2) || "0.00",
    },

    charts: {
      salesByCity,
      salesByCategory,
      salesBySegment,
      salesByProducts: sortedProducts,
      salesBySubCategory: sortedSubCategories,
    },
  };
};
