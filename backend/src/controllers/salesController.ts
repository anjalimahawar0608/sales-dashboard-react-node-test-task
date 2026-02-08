import { Request, Response } from "express";
import {
    getStates,
    getMinMaxDates,
    getDashboardData,
} from "../services/salesService";

// Controller to return list of states

export const statesList = (req: Request, res: Response) => {
    const states = getStates();
    res.json(states);
};

// Controller to return min and max dates for a state
export const minMaxDates = (req: Request, res: Response) => {
    const state = req.query.state as string;

    if (!state) {
        return res.status(400).json({
            message: "State is required",
        });
    }

    const dates = getMinMaxDates(state);

    res.json(dates);
};

// Controller to return dashboard data
export const dashboardData = (req: Request, res: Response) => {
    const { state, from, to } = req?.query;

    if (!state || !from || !to) {
        return res.status(400).json({
            message: "State, from and to dates required",
        });
    }

    const data = getDashboardData(
        state as string,
        from as string,
        to as string
    );

    res.json(data);
};
