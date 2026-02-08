import { useTheme } from "@mui/material";
import { SalesByProductsProps } from "../../../types/types";

export const useSalesByProducts = (data: SalesByProductsProps["data"]) => {
  const theme = useTheme();

  // Normalize, filter, sort, and slice top 9 products
  const normalizedData = Object.entries(data || {})
    ?.map(([product, value]) => ({
      product,
      value: Number(value)
    }))
    ?.filter(item => Number.isFinite(item?.value))
    ?.sort((a, b) => b?.value - a?.value)
    ?.slice(0, 9);

  const products = normalizedData?.map(d => d?.product);
  const values = normalizedData?.map(d => d?.value);

  // For stacked bar effect
  const lightPart = values?.map(() => 80);
  const darkPart = values?.map(() => 20);

  const option = {
    animation: false,
    grid: {
      left: 20,
      right: 20,
      top: 10,
      bottom: 10,
      containLabel: true
    },
    xAxis: {
      type: "value",
      show: false,
      max: 100
    },
    yAxis: {
      type: "category",
      inverse: true,
      data: products,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false }
    },
    series: [
      {
        type: "bar",
        stack: "total",
        data: lightPart,
        barWidth: 25,
        barCategoryGap: "30%",
        itemStyle: { color: "#D6EFF3", borderRadius: [4, 0, 0, 4] },
        label: {
          show: true,
          position: "insideLeft",
          formatter: (params: any) => products[params?.dataIndex],
          color: theme.palette.mode === "dark" ? "#0F172A" : "#0F172A",
          fontSize: 12,
          padding: [0, 0, 0, 10]
        }
      },
      {
        type: "bar",
        stack: "total",
        data: darkPart,
        barWidth: 25,
        barCategoryGap: "30%",
        itemStyle: { color: "#8BD0E0", borderRadius: [0, 4, 4, 0] },
        label: {
          show: true,
          position: "insideRight",
          formatter: (params: any) =>
            `$${values[params?.dataIndex]?.toLocaleString()}`,
          color: theme.palette.mode === "dark" ? "#0F172A" : "#0F172A",
          fontSize: 12,
          padding: [0, 10, 0, 0]
        }
      }
    ]
  };

  return { normalizedData, option };
};
