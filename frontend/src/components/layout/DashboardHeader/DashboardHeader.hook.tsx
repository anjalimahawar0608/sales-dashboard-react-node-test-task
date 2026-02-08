import { useTheme } from "@mui/material";
import { UseDashboardHeaderProps } from "../../../types/types";

export const useDashboardHeader = ({
  selectedState,
  setSelectedState,
  fromDate,
  toDate,
  setFromDate,
  setToDate,
  loadDashboardData
}: UseDashboardHeaderProps) => {

  const theme = useTheme();

  // FORMAT DATE TO 30-Dec-2017
  const formatDate = (date: string) => {
    if (!date) return "";

    const d = new Date(date);

    return d
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      })
      .replace(/ /g, "-");
  };

  // Handle state change
  const handleStateChange = (state: string) => {
    setSelectedState(state);
  };

  // Handle From Date change
  const handleFromDateChange = (value: string) => {
    setFromDate(value);
    loadDashboardData(selectedState, value, toDate);
  };

  // Handle To Date change
  const handleToDateChange = (value: string) => {
    setToDate(value);
    loadDashboardData(selectedState, fromDate, value);
  };

  const selectStyles = {
    "& .MuiOutlinedInput-root": {
      color: theme.palette.text.primary,

      "& fieldset": {
        border: "none"
      },

      "&:hover fieldset": {
        border: "none"
      },

      "&.Mui-focused fieldset": {
        border: "none"
      }
    },

    "& .MuiInputLabel-root": {
      color: theme.palette.text.primary
    },

    "& .MuiSelect-icon": {
      color: theme.palette.text.primary
    },

    backgroundColor: theme.palette.background.paper,
    borderRadius: "8px"
  };

  return {
    theme,
    formatDate,
    handleStateChange,
    handleFromDateChange,
    handleToDateChange,
    selectStyles
  };
};
