export interface SalesRecord {
  "Row ID": number;
  "Order ID": string;
  "Order Date": string;
  "Ship Date": string;
  "Ship Mode": string;
  "Customer ID": string;
  "Customer Name": string;
  "Segment": string;
  "Country": string;
  "City": string;
  "State": string;
  "Postal Code": number;
  "Region": string;
  "Product ID": string;
  "Category": string;
  "Sub-Category": string;
  "Product Name": string;
  "Sales": number;
  "Quantity": number;
  "Discount": number;
  "Profit": number;
}

export interface SalesByDimension {
  [key: string]: number;
}

export interface DashboardCards {
  totalSales: string;
  totalProfit: string;
  totalQuantity: number;
  avgDiscount: string;
}

export interface DashboardCharts {
  salesByCity: SalesByDimension;
  salesByCategory: SalesByDimension;
  salesBySegment: SalesByDimension;
  salesByProducts: SalesByDimension;
  salesBySubCategory: SalesByDimension;
}

export  interface DashboardResponse {
  cards: DashboardCards;
  charts: DashboardCharts;
}