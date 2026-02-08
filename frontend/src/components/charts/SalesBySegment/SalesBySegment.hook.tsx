import { useTheme } from "@mui/material";

export const useSalesBySegmentChart = (data: { name: string; value: number }[]) => {
  const theme = useTheme();

  const SEGMENT_COLORS: Record<string, string> = {
    "Home Office": "#FFBF65",
    Consumer: "#227CB4",
    Corporate: "#D26E64"
  };

  const chartData = data.map((item) => ({
    ...item,
    itemStyle: {
      color: SEGMENT_COLORS[item.name] || "#94A3B8"
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
        color: theme.palette.text.primary, 
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

  return {
    option
  };
};
