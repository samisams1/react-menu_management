import { Typography, Box } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const SidebarMenuItem = ({ menu, selected, setSelected }) => {

  return (
    <Box
      sx={{
        width: "100%",
        height: "48px",
        display: "flex",
        alignItems: "center",
        borderRadius: "24px",
        backgroundColor: selected === menu.path ? "#9FF443" : "transparent",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <MenuItem
        icon={<menu.icon />}
        active={selected === menu.path}
        onClick={() => setSelected(menu.path)}
        style={{
          color: selected === menu.path ? "#000000" : "#667085",
          padding: "10px 20px",
          fontSize: "14px",
          fontWeight: 700,
          fontFamily: "Plus Jakarta Sans",
          lineHeight: "14px",
          letterSpacing: "-0.02em",
          textAlign: "left",
          width: "100%",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Plus Jakarta Sans",
            fontWeight: 700,
            fontSize: "14px",
            lineHeight: "14px",
            letterSpacing: "-0.02em",
            color: selected === menu.path ? "#000000" : "#667085",
          }}
        >
          {menu.title}
        </Typography>

        <Link to={menu.path} />
      </MenuItem>
    </Box>
  );
};

export default SidebarMenuItem;