import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { sidebarMenu } from '../../constants/sidebarMenu';
import { useLocation } from "react-router-dom";
import { tokens } from "../../styles/theme";
import { useState } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SidebarMenuItem from "./SidebarMenuItem";
import "react-pro-sidebar/dist/css/styles.css";

const SidebarMenu = () => {
  const location = useLocation();
  const urlPathName = location.pathname;

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState(urlPathName);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          {/* 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <img src="/logo.jpeg" alt="Logo" style={{ height: '40px', marginRight: '15px' }} />
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {/* 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 */}

          {/* 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {sidebarMenu.map((menu) =>
              menu.tag === 'divider'
                ? (
                  <Typography
                    variant="h6"
                    key={menu.title}
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                  >
                    {menu.title}
                  </Typography>
                )
                : (
                  <SidebarMenuItem
                    key={menu.title}
                    menu={menu}
                    selected={selected}
                    setSelected={setSelected}
                  />
                )
            )}
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default SidebarMenu;