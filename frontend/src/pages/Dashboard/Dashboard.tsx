import React from "react";
import { Box, Stack } from "@mui/material";

import Cards from "../../components/Cards/Cards";
import SalesByCity from "../../components/charts/SalesByCity/SalesByCity";
import SalesByCategory from "../../components/charts/SalesByCategory/SalesByCategory";
import SalesBySegment from "../../components/charts/SalesBySegment/SalesBySegment";
import SalesByProducts from "../../components/charts/SalesByProducts/SalesByProducts";
import SalesBySubCategory from "../../components/charts/SalesBySubCategory/SalesBySubCategory";
import DashboardHeader from "../../components/layout/DashboardHeader/DashboardHeader";
// created following custom hook to encapsulate all dashboard state effects, and API logic,
// keeping the component clean and focused on rendering. This also improves code readability, maintainability, and reusability.
import { useDashboard } from "./Dashboard.hook";
const Dashboard: React.FC = () => {
  const {
    states,
    selectedState,
    setSelectedState,
    minDate,
    maxDate,
    fromDate,
    toDate,
    setFromDate,
    setToDate,
    data,
    loadDashboardData
  } = useDashboard();

  return (
    <Box p={3}>
      <DashboardHeader
        states={states}
        selectedState={selectedState}
        setSelectedState={setSelectedState}
        minDate={minDate}
        maxDate={maxDate}
        fromDate={fromDate}
        toDate={toDate}
        setFromDate={setFromDate}
        setToDate={setToDate}
        loadDashboardData={loadDashboardData}
      />

      {data && (
        <>
          <Cards data={data?.cards} />

          {/* Row 1 */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            mt={3}
            sx={{
              width: "100%",
              overflow: "hidden"
            }}
          >
            <Box flex={1} sx={{ minWidth: 0 }}>
              <SalesByCity data={data?.charts?.salesByCity} />
            </Box>

            <Box flex={1} sx={{ minWidth: 0 }}>
              <SalesByProducts data={data?.charts?.salesByProducts} />
            </Box>
          </Stack>

          {/* Row 2 */}
          <Stack direction={{ xs: "column", md: "row" }} spacing={3} mt={3}>
            <Box flex={1}>
              <SalesByCategory
                data={Object.entries(data?.charts?.salesByCategory || {}).map(
                  ([name, value]) => ({
                    name,
                    value: typeof value === "number" ? value : 0
                  })
                )}
              />
            </Box>

            <Box flex={1}>
              <SalesBySubCategory
                data={Object.entries(data?.charts?.salesBySubCategory || {}).map(
                  ([subCategory, sales]) => ({
                    subCategory,
                    sales: typeof sales === "number" ? sales : 0
                  })
                )}
              />
            </Box>

            <Box flex={1}>
              <SalesBySegment
                data={Object.entries(data?.charts?.salesBySegment || {}).map(
                  ([name, value]) => ({
                    name,
                    value: typeof value === "number" ? value : 0
                  })
                )}
              />
            </Box>
          </Stack>
        </>
      )}
    </Box>
  );
};

export default Dashboard;
