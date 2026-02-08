import React from "react";
import ReactECharts from "echarts-for-react";
import { Paper, Typography, useTheme } from "@mui/material";
import { SalesByCategoryProps } from "../../../types/types";
import { useSalesByCategory } from "./SalesByCategory.hook";

const SalesByCategory: React.FC<SalesByCategoryProps> = ({ data }) => {
  const theme = useTheme();
  const { option } = useSalesByCategory(data);

  return (
    <Paper
      sx={{
        p: 3,
        height: 380,
        backgroundColor: theme?.palette?.background?.paper,
        borderRadius: "5px"
      }}
    >
      <Typography
        mb={2}
        fontWeight={600}
        color={theme.palette.text.primary}
      >
        Sales by Category
      </Typography>

      <ReactECharts
        option={option}
        style={{ height: 280 }}
        notMerge
        lazyUpdate
      />
    </Paper>
  );
};

export default SalesByCategory;
