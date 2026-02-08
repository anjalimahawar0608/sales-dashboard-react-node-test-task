import React from "react";
import ReactECharts from "echarts-for-react";
import { Paper, Typography, useTheme } from "@mui/material";
import { SalesBySubCategoryProps } from "../../../types/types";
import { useSalesBySubCategory } from "./SalesBySubCategory.hook";

const SalesBySubCategory: React.FC<SalesBySubCategoryProps> = ({ data }) => {
  const theme = useTheme();
  const { normalizedData, option } = useSalesBySubCategory(data);

  if (!normalizedData?.length) {
    return (
      <Paper
        sx={{
          p: 3,
          height: 380,
          backgroundColor: theme.palette.background.paper,
          borderRadius: "12px"
        }}
      >
        <Typography color={theme.palette.text.primary}>
          Sales by Sub-Category
        </Typography>

        <Typography color={theme.palette.text.secondary} mt={2}>
          No data available
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper
      sx={{
        p: 3,
        height: 380,
        borderRadius: "12px",
        backgroundColor: theme.palette.background.paper
      }}
    >
      <Typography mb={1} fontWeight={600} color={theme.palette.text.primary}>
        Sales by Sub-Category
      </Typography>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0 20px",
          marginBottom: 15
        }}
      >
        <Typography fontSize={15} color={theme.palette.text.primary}>
          Sub-Category
        </Typography>

        <Typography fontSize={15} color={theme.palette.text.primary}>
          Sales in $
        </Typography>
      </div>

      <ReactECharts
        option={option}
        style={{ height: 260 }}
        notMerge
        lazyUpdate
      />
    </Paper>
  );
};

export default SalesBySubCategory;
