import React from "react";
import {
    Drawer,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Box,
    Divider,
    useTheme
} from "@mui/material"
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import StoreOutlinedIcon from "@mui/icons-material/StoreOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

interface Props {
    toggleTheme: () => void;
    open: boolean;
    setOpen: (open: boolean) => void;
}

const Sidebar: React.FC<Props> = ({ toggleTheme, open, setOpen }) => {
    const theme = useTheme();
    const isDark = theme?.palette?.mode === "dark";

    const drawerWidth = open ? 240 : 70;

    const menuItems = [
        { text: "Dashboard", icon: <DashboardOutlinedIcon /> },
        { text: "Sales Overview", icon: <BarChartOutlinedIcon /> },
        { text: "Stores", icon: <StoreOutlinedIcon /> },
        { text: "Notifications", icon: <NotificationsNoneOutlinedIcon /> },
        { text: "Settings", icon: <SettingsOutlinedIcon /> }
    ];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                whiteSpace: "nowrap",

                "& .MuiDrawer-paper": {
                    width: drawerWidth,
                    boxSizing: "border-box",
                    backgroundColor: isDark ? "#0F1433" : "#4A4A4A",
                    color: "#ffffff",
                    transition: "width 0.3s ease",
                    overflowX: "hidden"
                }
            }}
        >
            {/* Sidebar Header */}
            <Box
                p={2}
                display="flex"
                alignItems="center"
                gap={1}
                sx={{
                    backgroundColor: isDark ? "transparent" : "#0C6470",
                    cursor: "pointer"
                }}
                onClick={() => setOpen(!open)}
            >
                <MenuIcon sx={{ color: "#ffffff" }} />

                {open && (
                    <Typography variant="h6" sx={{ fontWeight: 500 }}>
                        Sales Dashboard
                    </Typography>
                )}
            </Box>

            <Divider sx={{ borderColor: isDark ? "#1f2547" : "#666666" }} />

            <List>
                {menuItems.map((item, index) => (
                    <ListItemButton
                        key={index}
                        sx={{
                            mb: 1,
                            "&:hover": {
                                backgroundColor: isDark ? "#1B2045" : "#3A3A3A"
                            },
                            justifyContent: open ? "initial" : "center",
                            px: 2.5
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: open ? 3 : "auto",
                                justifyContent: "center"
                            }}
                        >
                            {React.cloneElement(item.icon, { sx: { color: "#ffffff" } })}
                        </ListItemIcon>

                        {open && <ListItemText primary={item.text} />}
                    </ListItemButton>
                ))}

                <ListItemButton
                    onClick={toggleTheme}
                    sx={{
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        "&:hover": {
                            backgroundColor: isDark ? "#1B2045" : "#3A3A3A"
                        }
                    }}
                >
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center"
                        }}
                    >
                        {isDark ? (
                            <DarkModeOutlinedIcon sx={{ color: "#ffffff" }} />
                        ) : (
                            <LightModeOutlinedIcon sx={{ color: "#ffffff" }} />
                        )}
                    </ListItemIcon>

                    {open && (
                        <ListItemText primary={isDark ? "Dark Mode" : "Light Mode"} />
                    )}
                </ListItemButton>
            </List>
        </Drawer>
    );
};

export default Sidebar;
