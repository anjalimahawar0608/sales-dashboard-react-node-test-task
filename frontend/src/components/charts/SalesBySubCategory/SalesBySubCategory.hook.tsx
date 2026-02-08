import { useTheme } from "@mui/material";
import { SalesBySubCategoryProps } from "../../../types/types";

export const useSalesBySubCategory = (data: SalesBySubCategoryProps["data"]) => {
  const theme = useTheme();

  // Normalize, filter, sort, and slice top 7 sub-categories
  const normalizedData = (data || [])
    ?.map(item => ({
      subCategory: item.subCategory,
      value: Number(item.sales)
    }))
    ?.filter(item => Number.isFinite(item?.value))
    ?.sort((a, b) => b?.value - a?.value)
    ?.slice(0, 7);

  const categories = normalizedData?.map(d => d.subCategory);
  const values = normalizedData?.map(d => d.value);

  // For stacked bar effect
  const lightPart = values?.map(() => 80);
  const darkPart = values?.map(() => 20);
  const option = {
    animation: false,
    grid: {
      left: 20,
      right: 20,
      top: 12,
      bottom: 5,
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
      data: categories,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      boundaryGap: false
    },
    series: [
      {
        type: "bar",
        stack: "total",
        data: lightPart,
        barWidth: 26,
        barCategoryGap: "0%",
        itemStyle: { color: "#D6EFF3", borderRadius: [4, 0, 0, 4] },
        label: {
          show: true,
          position: "insideLeft",
          formatter: (params: any) => categories[params?.dataIndex],
          color: theme.palette.mode === "dark" ? "#0F172A" : "#0F172A",
          fontSize: 12,
          padding: [0, 0, 0, 10]
        }
      },
      {
        type: "bar",
        stack: "total",
        data: darkPart,
        barWidth: 26,
        barCategoryGap: "0%",
        itemStyle: { color: "#8BD0E0", borderRadius: [0, 4, 4, 0] },
        label: {
          show: true,
          position: "insideRight",
          formatter: (params: any) =>
            `$${values[params.dataIndex].toLocaleString()}`,
          color: theme.palette.mode === "dark" ? "#0F172A" : "#0F172A",
          fontSize: 12,
          padding: [0, 10, 0, 0]
        }
      }
    ]
  };

  return { normalizedData, option };
};
