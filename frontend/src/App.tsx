import React, { useState } from "react";
import {
  ThemeProvider,
  CssBaseline,
  Box
} from "@mui/material";

import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Topbar from "./components/layout/TopBar";
import { getAppTheme } from "./theme/theme";

const App: React.FC = () => {

  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const theme = getAppTheme(darkMode);

  const drawerWidth = sidebarOpen ? 240 : 70;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>

        <Sidebar
          toggleTheme={toggleTheme}
          open={sidebarOpen}
          setOpen={setSidebarOpen}
        />

        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            backgroundColor: theme.palette.background.default,

            width: `calc(100% - ${drawerWidth}px)`,
            transition: "width 0.3s",

            minWidth: 0,
            overflowX: "hidden"
          }}
        >
          <Topbar darkMode={darkMode} />

          <Box
            sx={{
              flexGrow: 1,
              overflow: "auto",
              width: "100%",
              minWidth: 0
            }}
          >
            <Dashboard />
          </Box>

        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
