import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Avatar,
} from "@mui/material";
import userImg from "../../assets/icons/profile.png";

interface Props {
    darkMode: boolean;
}
const Topbar: React.FC<Props> = ({ darkMode }) => {
    return (
        <AppBar
            position="static"
            elevation={0}
            sx={{
                backgroundColor: darkMode ? "#0F1433" : "#0C6470",
                borderBottom: "1px solid #262D47",
                height: "64px",
                justifyContent: "center"
            }}
        >
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box />
                <Box display="flex" alignItems="center" gap={2}>
                    <Typography sx={{ color: "#ffffff", fontSize: "14px" }}>
                        Hello User
                    </Typography>
                    <Avatar
                        src={userImg}
                        sx={{
                            width: 32,
                            height: 32
                        }}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Topbar;
