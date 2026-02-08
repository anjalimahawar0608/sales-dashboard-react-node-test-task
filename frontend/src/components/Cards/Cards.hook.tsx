import { CardIconMap, CardsProps } from "../../types/types";

export const useCardsData = (data: CardsProps["data"], iconMap: CardIconMap) => {
  const toNumber = (value: string | number | null | undefined): number => {
    const num = Number(value);
    return isNaN(num) ? 0 : num;
  };

  return [
    {
      title: "Total Sales",
      value: `$${toNumber(data?.totalSales)?.toFixed(0)}`,
      icon: iconMap?.salesIcon
    },
    {
      title: "Quantity Sold",
      value: toNumber(data?.totalQuantity),
      icon: iconMap?.quantityIcon
    },
    {
      title: "Discount %",
      value: `${toNumber(data?.totalDiscount)?.toFixed(1)}%`,
      icon: iconMap?.discountIcon
    },
    {
      title: "Profit",
      value: `$${toNumber(data?.totalProfit)?.toFixed(0)}`,
      icon: iconMap?.profitIcon
    }
  ];
};
