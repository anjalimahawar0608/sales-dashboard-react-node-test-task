export interface CardsData {
    totalSales: string;
    totalProfit: string;
    totalQuantity: number;
    avgDiscount: string;
}

export interface ChartsData {
    salesByCity: Record<string, number>;
    salesByCategory: Record<string, number>;
    salesBySegment: Record<string, number>;
}

export interface DashboardResponse {
    cards: CardsData;
    charts: ChartsData;
}

export interface DashboardData {
    [key: string]: any;
}

export interface DashboardHeaderProps {
    states: string[];
    selectedState: string;
    setSelectedState: (state: string) => void;

    minDate: string;
    maxDate: string;

    fromDate: string;
    toDate: string;

    setFromDate: (date: string) => void;
    setToDate: (date: string) => void;

    loadDashboardData: (state: string, from: string, to: string) => void;
}

export interface SalesBySubCategoryProps {
    data: { subCategory: string; sales: number }[];
}

export interface SalesByProductsProps {
    data: Record<string, number | string>;
}

export interface SalesByCityProps {
    data: Record<string, number | string>;
}

export interface SalesBySegmentProps {
    data: { name: string; value: number }[];
}

export interface SalesByCategoryProps {
    data: { name: string; value: number }[];
}

export interface CardsProps {
    data: {
        totalSales: number | string;
        totalQuantity: number | string;
        totalDiscount: number | string;
        totalProfit: number | string;
    };
}

export interface CardIconMap {
    salesIcon?: React.ReactNode;
    quantityIcon?: React.ReactNode;
    discountIcon?: React.ReactNode;
    profitIcon?: React.ReactNode;
}

export interface UseDashboardHeaderProps {
  selectedState: string;
  setSelectedState: (state: string) => void;
  fromDate: string;
  toDate: string;
  setFromDate: (date: string) => void;
  setToDate: (date: string) => void;
  loadDashboardData: (state: string, from: string, to: string) => void;
}
