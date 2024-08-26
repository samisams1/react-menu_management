import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Collapse, IconButton, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const Ashebir = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedMenus, setExpandedMenus] = useState({});
  const [expandButtonColor, setExpandButtonColor] = useState('inherit');
  const [collapseButtonColor, setCollapseButtonColor] = useState('inherit');

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await axios.get('http://localhost:8001/api/menus');
        setMenuItems(response.data);
        // Initialize expandedMenus state
        setExpandedMenus(
          response.data.reduce((obj, item) => {
            obj[item.id] = false;
            return obj;
          }, {})
        );
      } catch (err) {
        setError('Failed to fetch menu items');
      } finally {
        setLoading(false);
      }
    };
    fetchMenuItems();
  }, []);

  const toggleMenu = (menuItem) => {
    setExpandedMenus((prevState) => ({
      ...prevState,
      [menuItem.id]: !prevState[menuItem.id],
    }));
  };

  const handleExpandAll = () => {
    setExpandedMenus(
      menuItems.reduce((obj, item) => {
        obj[item.id] = true;
        return obj;
      }, {})
    );
    setExpandButtonColor('black');
    setCollapseButtonColor('inherit');
  };

  const handleCollapseAll = () => {
    setExpandedMenus(
      menuItems.reduce((obj, item) => {
        obj[item.id] = false;
        return obj;
      }, {})
    );
    setExpandButtonColor('inherit');
    setCollapseButtonColor('black');
  };

  const renderMenuItem = (item) => {
    return (
      <Box key={item.id}>
        <Box display="flex" alignItems="center" onClick={() => toggleMenu(item)}>
          <IconButton>
            {expandedMenus[item.id] ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
          <Typography variant="subtitle1">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
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
      <Box display="flex" alignItems="center" mb={2}>
        <Button
          variant="contained"
          onClick={handleExpandAll}
          sx={{
            borderRadius: "20px",
            padding: "10px 20px",
            marginRight: "10px",
            backgroundColor: expandButtonColor,
            color: expandButtonColor === 'black' ? 'white' : 'inherit',
          }}
        >
          Expand All
        </Button>
        <Button
          variant="contained"
          onClick={handleCollapseAll}
          sx={{
            borderRadius: "20px",
            padding: "10px 20px",
            backgroundColor: collapseButtonColor,
            color: collapseButtonColor === 'black' ? 'white' : 'inherit',
          }}
        >
          Collapse All
        </Button>
      </Box>
      {menuItems.map(renderMenuItem)}
    </Box>
  );
};

export default Ashebir;