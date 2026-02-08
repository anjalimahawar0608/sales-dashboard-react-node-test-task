import { useTheme } from "@mui/material";
import { SalesByCategoryProps } from "../../../types/types";

const CATEGORY_COLORS: Record<string, string> = {
  "Office Supplies": "#D26E64",
  Furniture: "#227CB4",
  Technology: "#FFBF65"
};

export const useSalesByCategory = (data: SalesByCategoryProps["data"]) => {
  const theme = useTheme();

  // Map data to include colors
  const chartData = data.map((item) => ({
    ...item,
    itemStyle: {
      color: CATEGORY_COLORS[item?.name] || "#94A3B8"
    }
  }));

  const option = {
    tooltip: {
      trigger: "item",
      formatter: "{b}: ${c} ({d}%)"
    },
    legend: {
      bottom: 0,
      icon: "rect",
      itemWidth: 14,
      itemHeight: 10,
      itemGap: 20,
      textStyle: {
        color:
          theme.palette.mode === "dark"
            ? theme.palette.text.secondary
            : theme.palette.text.primary,
        fontSize: 12
      }
    },
    series: [
      {
        type: "pie",
        radius: ["52%", "78%"],
        center: ["50%", "48%"],
        avoidLabelOverlap: false,
        label: { show: false },
        emphasis: {
          scale: true,
          scaleSize: 8
        },
        data: chartData
      }
    ]
  };

  return { option };
};
