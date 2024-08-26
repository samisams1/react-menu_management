import { Header } from "../components";
import { Box, Button, Typography, useTheme, TextField, Collapse } from "@mui/material";
import { tokens } from "../styles/theme";
import { useState } from "react";
import Ashebir from "./Ashebir";
import axios from 'axios';
import CreateMenu from "./CreateMenu";
const System = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [expandedMenus, setExpandedMenus] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    parent: '',
    depth: '',
  });

  // Define the menu structure
  const menus = [
    {
      name: "System Management",
      children: [
        { name: "Systems", children: [
          { name: "System Code", children: [
            { name: "Code Registration-1" },
            { name: "Code Registration-2" },
          ]},
          { name: "Properties" },
        ]},
        { name: "Menus", children: [
          { name: "Menu Registration" },
        ]},
        { name: "API List", children: [
          { name: "API Registration" },
          { name: "API Edit" },
        ]},
        { name: "Users & Groups", children: [
          { name: "User Account Registration" },
        ]},
      ],
    },
  ];
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8001/api/menus', formData);
      console.log('Data saved:', response.data);
      // You can add additional logic here, like clearing the form or displaying a success message
    } catch (error) {
      console.error('Error saving data:', error);
      // You can add error handling logic here, like displaying an error message
    }
  };
  // Function to handle menu expansion/collapse
  const handleMenuExpand = (menu) => {
    if (expandedMenus.includes(menu.name)) {
      setExpandedMenus(expandedMenus.filter((m) => m !== menu.name));
    } else {
      setExpandedMenus([...expandedMenus, menu.name]);
    }
  };

  // Function to expand all menus
  const handleExpandAll = () => {
    setExpandedMenus(menus.flatMap((menu) => [menu.name, ...menu.children.map((sub) => sub.name)]));
  };

  // Function to collapse all menus
  const handleCollapseAll = () => {
    setExpandedMenus([]);
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Menus" subtitle="Welcome to your dashboard" />
        <Box></Box>
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gridAutoRows="minmax(auto, 1fr)" gap="20px">
        {/* Menu hierarchy display */}
     
        <Box gridColumn="span 1" gridRow="span 2" p="30px" height="100%" position="relative">
          <Typography variant="h5" fontWeight="600">Menus</Typography>
          {menus.map((menu, menuIndex) => (
            <Box key={menu.name} position="relative">
              {menuIndex > 0 && (
                <Box position="absolute" top="0" left="-20px" height={`${100 * menu.children.length}%`} width="2px" backgroundColor={colors.grey[300]} />
              )}
              <Typography onClick={() => handleMenuExpand(menu)} sx={{ cursor: "pointer", fontWeight: "bold" }}>{menu.name}</Typography>
              <Collapse in={expandedMenus.includes(menu.name)}>
                <Box ml={2}>
                  {menu.children.map((submenu, submenuIndex) => (
                    <Box key={submenu.name} position="relative">
                      {submenuIndex > 0 && (
                        <Box position="absolute" top="0" left="-20px" height={`${100 * submenu.children.length}%`} width="2px" backgroundColor={colors.grey[300]} />
                      )}
                      <Typography onClick={() => handleMenuExpand(submenu)} sx={{ cursor: "pointer" }}>{submenu.name}</Typography>
                      <Collapse in={expandedMenus.includes(submenu.name)}>
                        <Box ml={2}>
                          {submenu.children.map((item) => (
                            <Typography key={item.name}>{item.name}</Typography>
                          ))}
                        </Box>
                      </Collapse>
                    </Box>
                  ))}
                </Box>
              </Collapse>
            </Box>
          ))}
          <Box display="flex" justifyContent="space-between" mt="20px">
            <Button variant="contained" onClick={handleExpandAll} sx={{ borderRadius: "20px", padding: "10px 20px" }}>Expand All</Button>
            <Button variant="contained" onClick={handleCollapseAll} sx={{ borderRadius: "20px", padding: "10px 20px" }}>Collapse All</Button>
          </Box>
          <Box>
          <Ashebir/>
          </Box>
        </Box>
        {/* Menu creation form */}
   <CreateMenu/>
      </Box>
    </Box>
  );
};

export default System;