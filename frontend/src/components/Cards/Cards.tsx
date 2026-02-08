import React from "react";
import { Paper, Typography, Stack, Box, useTheme } from "@mui/material";
import {
  SalesIcon,
  QuantityIcon,
  DiscountIcon,
  ProfitIcon
} from "../../assets/icons";
import { CardsProps } from "../../types/types";
import { useCardsData } from "./Cards.hook"; 

const Cards: React.FC<CardsProps> = ({ data }) => {
  const theme = useTheme();
  const iconMap = {
    salesIcon: SalesIcon,
    quantityIcon: QuantityIcon,
    discountIcon: DiscountIcon,
    profitIcon: ProfitIcon
  };
  const cards = useCardsData(data, iconMap);

  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={2} mt={2}>
      {cards.map(card => (
        <Paper
          key={card.title}
          sx={{
            flex: 1,
            minHeight: 138,
            p: 3,
            backgroundColor: theme.palette.background.paper,
            borderRadius: "10px",
            border: theme.palette.mode === "dark" ? "1px solid #2F375F" : "1px solid #E5E7EB",
            display: "flex",
            alignItems: "center",
            transition: "0.25s ease",
            "&:hover": { borderColor: "#3B82F6" }
          }}
        >
          <Box sx={{ mr: 2 }}>
            <img src={card.icon as string} alt={card.title} width={42} height={42} />
          </Box>

          <Box>
            <Typography variant="body1" color="text.primary">
              {card.title}
            </Typography>

            <Typography variant="h4" sx={{ fontWeight: 600 }} color="text.primary">
              {card.value}
            </Typography>
          </Box>
        </Paper>
      ))}
    </Stack>
  );
};

export default Cards;
