import axios from "axios";
import { DashboardResponse } from "../types/types";

// Axios instance pointing to backend
const API = axios.create({
        baseURL: process.env.REACT_APP_API_BASE_URL,

});

// Get all states
export const getStates = async () => {
    const res = await API.get("/states");
    return res?.data;
};

// Get min and max dates for a state
export const getDates = async (state: string) => {
    const res = await API.get(`/dates?state=${state}`);
    return res?.data;
};

// Get dashboard aggregated data
export const getDashboardData = async (
    state: string,
    from: string,
    to: string
): Promise<DashboardResponse> => {
    const res = await API.get(
        `/dashboard?state=${state}&from=${from}&to=${to}`
    );
    return res.data;
};
