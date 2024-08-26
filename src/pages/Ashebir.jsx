import React, { useState, useEffect } from 'react';  
    import axios from 'axios';  
    import { Box, Collapse, IconButton, Typography } from '@mui/material';  
    import { ExpandLess, ExpandMore } from '@mui/icons-material';  

    const Ashebir = () => {  
      const [menuItems, setMenuItems] = useState([]);  
      const [loading, setLoading] = useState(true);  
      const [error, setError] = useState(null);  
    
      useEffect(() => {  
        const fetchMenuItems = async () => {  
          try {  
            const response = await axios.get('http://localhost:8001/api/menus');  
            setMenuItems(response.data);  
          } catch (err) {  
            setError('Failed to fetch menu items');  
          } finally {  
            setLoading(false);  
          }  
        };  
        fetchMenuItems();  
      }, []);  
    
      const [expandedMenus, setExpandedMenus] = useState({});  
    
      const toggleMenu = (menuItem) => {  
        setExpandedMenus((prevState) => ({  
          ...prevState,  
          [menuItem.id]: !prevState[menuItem.id],  
        }));  
      };  
    
      const renderMenuItem = (item) => {  
        return (  
          <Box key={item.id}>  
            <Box display="flex" alignItems="center" onClick={() => toggleMenu(item)}>  
              <IconButton>  
                {expandedMenus[item.id] ? <ExpandLess /> : <ExpandMore />}  
              </IconButton>  
              <Typography variant="subtitle1">  
                <a href={item.link} target="_blank" rel="noopener noreferrer">  
                  {item.name}  
                </a>  
              </Typography>  
            </Box>  
            <Collapse in={expandedMenus[item.id]} timeout="auto" unmountOnExit>  
              <Box pl={4}>  
                {item.children && item.children.map(renderMenuItem)}  
              </Box>  
            </Collapse>  
          </Box>  
        );  
      };  
    
      if (loading) {  
        return <div>Loading...</div>;  
      }  
    
      if (error) {  
        return <div>Error: {error}</div>;  
      }  
    
      return (  
        <Box padding="30px">  
          <Typography variant="h4" gutterBottom>  
            Menu  
          </Typography>  
          {menuItems.map(renderMenuItem)}  
        </Box>  
      );  
    };  
    
    export default Ashebir;  
