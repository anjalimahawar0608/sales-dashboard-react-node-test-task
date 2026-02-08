import React from "react";
import ReactECharts from "echarts-for-react";
import { Paper, Typography, useTheme } from "@mui/material";
import { useSalesBySegmentChart } from "./SalesBySegment.hook"; 

interface Props {
  data: { name: string; value: number }[];
}

const SalesBySegment: React.FC<Props> = ({ data }) => {
  const theme = useTheme();
  const { option } = useSalesBySegmentChart(data);

  return (
    <Paper
      sx={{
        p: 3,
        height: 380,
        background: theme.palette.background.paper,
        borderRadius: "5px"
      }}
    >
      <Typography color={theme.palette.text.primary} mb={2} fontWeight={600}>
        Sales by Segment
      </Typography>

      <ReactECharts option={option} style={{ height: 280 }} notMerge lazyUpdate />
    </Paper>
  );
};

export default SalesBySegment;
