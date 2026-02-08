import { useTheme } from "@mui/material";
import { SalesByCityProps } from "../../../types/types";

export const useSalesByCity = (data: SalesByCityProps["data"]) => {
    const theme = useTheme();

    // Normalize, filter, sort, and slice top 8 cities
    const normalizedData = Object.entries(data || {})
        ?.map(([city, value]) => ({
            city,
            value: Number(value)
        }))
        ?.filter(item => Number.isFinite(item?.value))
        ?.sort((a, b) => b?.value - a?.value)
        ?.slice(0, 8);

    // Determine max value for x-axis
    const maxValue = Math.max(...normalizedData?.map(d => d?.value));
    const safeMaxValue = maxValue > 0 ? maxValue * 1.1 : 10;

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
            max: safeMaxValue,
            min: 0,
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                color: theme.palette.text.secondary
            },
            splitLine: { show: false }
        },
        yAxis: {
            type: "category",
            inverse: true,
            data: normalizedData?.map(d => d.city),
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                color: theme.palette.text.primary,
                fontSize: 12
            }
        },
        series: [
            {
                type: "bar",
                data: normalizedData?.map(d => d?.value),
                barWidth: 22,
                barCategoryGap: "25%",
                showBackground: true,
                backgroundStyle: {
                    color: "#D6EFF3"
                },
                itemStyle: {
                    color: "#8BD0E0",
                    borderRadius: [11, 0, 0, 11]
                }
            }
        ]
    };

    return { normalizedData, option };
};
