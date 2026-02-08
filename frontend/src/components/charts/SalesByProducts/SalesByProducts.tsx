import React from "react";
import ReactECharts from "echarts-for-react";
import { Paper, Typography, useTheme } from "@mui/material";
import { SalesByProductsProps } from "../../../types/types";
import { useSalesByProducts } from "./SalesByProducts.hook";

const SalesByProducts: React.FC<SalesByProductsProps> = ({ data }) => {
    const theme = useTheme();
    const { normalizedData, option } = useSalesByProducts(data);

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
                    Sales by Products
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
            <Typography mb={1} fontWeight={600} color={theme.palette.text.primary}>
                Sales by Products
            </Typography>

            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "0 30px",
                    marginBottom: 5
                }}
            >
                <Typography fontSize={15} color={theme.palette.text.primary}>
                    Product Name
                </Typography>
                <Typography fontSize={15} color={theme.palette.text.primary}>
                    Sales in $
                </Typography>
            </div>

            <ReactECharts
                option={option}
                style={{
                    height: 360,
                    width: "100%"
                }}
                opts={{ renderer: "canvas" }}
                notMerge
                lazyUpdate
            />
        </Paper>
    );
};

export default SalesByProducts;
