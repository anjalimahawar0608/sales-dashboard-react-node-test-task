import { createTheme } from "@mui/material/styles";

export const getAppTheme = (darkMode: boolean) =>
    createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",

            // 👇 MAIN PAGE BACKGROUND
            background: {
                default: darkMode ? "#161A33" : "#DDDDDD",   // Page Background
                paper: darkMode ? "#262D47" : "#FFFFFF"      // Card / Chart Background
            },

            // 👇 TEXT COLORS
            text: {
                primary: darkMode ? "#FFFFFF" : "#000000",
                secondary: darkMode ? "#E5E7EB" : "#4B5563"
            }
        }
    });
