import React from "react";
import ReactECharts from "echarts-for-react";
import { Paper, Typography, useTheme } from "@mui/material";
import { SalesByCityProps } from "../../../types/types";
import { useSalesByCity } from "./SalesByCity.hook";

const SalesByCity: React.FC<SalesByCityProps> = ({ data }) => {
  const theme = useTheme();
  const { normalizedData, option } = useSalesByCity(data);

  // Handle empty data
  if (!normalizedData?.length) {
    return (
      <Paper
        sx={{
          p: 3,
          height: 430,
          backgroundColor: theme.palette.background.paper,
          borderRadius: "12px"
        }}
      >
        <Typography color={theme.palette.text.primary}>
          Sales by City
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
        height: 430,
        borderRadius: "12px",
        backgroundColor: theme.palette.background.paper,
        maxWidth: "100%",
        overflow: "hidden"
      }}
    >
      <Typography
        mb={2}
        fontWeight={600}
        color={theme.palette.text.primary}
      >
        Sales by City
      </Typography>

      <ReactECharts
        option={option}
        style={{
          height: 350,
          width: "100%"
        }}
        opts={{ renderer: "canvas" }}
        notMerge
        lazyUpdate
      />
    </Paper>
  );
};

export default SalesByCity;
