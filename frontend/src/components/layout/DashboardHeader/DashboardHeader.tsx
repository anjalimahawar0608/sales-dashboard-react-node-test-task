import React from "react";
import {
  Stack,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputLabel
} from "@mui/material";

import { DashboardHeaderProps } from "../../../types/types";
import { useDashboardHeader } from "./DashboardHeader.hook";

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  states,
  selectedState,
  setSelectedState,
  minDate,
  maxDate,
  fromDate,
  toDate,
  setFromDate,
  setToDate,
  loadDashboardData
}) => {

  const {
    theme,
    formatDate,
    handleStateChange,
    handleFromDateChange,
    handleToDateChange,
    selectStyles
  } = useDashboardHeader({
    selectedState,
    setSelectedState,
    fromDate,
    toDate,
    setFromDate,
    setToDate,
    loadDashboardData
  });

  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      justifyContent="space-between"
      alignItems={{ xs: "flex-start", md: "center" }}
      mb={3}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Sales Overview
      </Typography>

      <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems="center">

        {/* State Filter */}
        <FormControl size="small" sx={{ minWidth: 160, ...selectStyles }}>
          <InputLabel>State</InputLabel>
          <Select
            value={selectedState}
            label="State"
            onChange={(e) => handleStateChange(e.target.value)}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary
                }
              }
            }}
          >
            {states.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* From Date */}
        <FormControl size="small" sx={{ minWidth: 160, ...selectStyles }}>
          <InputLabel>From</InputLabel>
          <Select
            value={fromDate}
            label="From"
            onChange={(e) => handleFromDateChange(e.target.value)}
            renderValue={(value) => formatDate(value)}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary
                }
              }
            }}
          >
            <MenuItem value={minDate}>{formatDate(minDate)}</MenuItem>
          </Select>
        </FormControl>

        {/* To Date */}
        <FormControl size="small" sx={{ minWidth: 160, ...selectStyles }}>
          <InputLabel>To</InputLabel>
          <Select
            value={toDate}
            label="To"
            onChange={(e) => handleToDateChange(e.target.value)}
            renderValue={(value) => formatDate(value)}
            MenuProps={{
              PaperProps: {
                sx: {
                  backgroundColor: theme.palette.background.paper,
                  color: theme.palette.text.primary
                }
              }
            }}
          >
            <MenuItem value={maxDate}>{formatDate(maxDate)}</MenuItem>
          </Select>
        </FormControl>

      </Stack>
    </Stack>
  );
};

export default DashboardHeader;
