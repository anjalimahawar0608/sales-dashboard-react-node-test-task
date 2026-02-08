import { useEffect, useState } from "react";
import { getStates, getDates, getDashboardData } from "../../services/api";
import { DashboardData } from "../../types/types";
    
/**
 * Custom hook to manage dashboard state and API calls
 */
export const useDashboard = () => {
  const [states, setStates] = useState<string[]>([]);
  const [selectedState, setSelectedState] = useState<string>("");

  const [minDate, setMinDate] = useState<string>("");
  const [maxDate, setMaxDate] = useState<string>("");

  const [fromDate, setFromDate] = useState<string>("");
  const [toDate, setToDate] = useState<string>("");

  const [data, setData] = useState<DashboardData | null>(null);

  useEffect(() => {
    loadStates();
  }, []);

  useEffect(() => {
    if (selectedState) {
      loadDateRange();
    }
  }, [selectedState]);

  const loadStates = async () => {
    const result = await getStates();
    setStates(result);
    if (result?.length > 0) {
      setSelectedState(result[0]);
    }
  };

  const loadDateRange = async () => {
    if (!selectedState) return;

    const result = await getDates(selectedState);

    setMinDate(result?.minDate);
    setMaxDate(result?.maxDate);

    setFromDate(result?.minDate);
    setToDate(result?.maxDate);

    loadDashboardData(selectedState, result?.minDate, result?.maxDate);
  };

  const loadDashboardData = async (state: string, from: string, to: string) => {
    const result = await getDashboardData(state, from, to);
    setData(result);
  };

  return {
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
  };
};
