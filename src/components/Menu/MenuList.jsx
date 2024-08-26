import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Collapse, IconButton, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { fetchMenuItems, toggleMenu, expandAll, collapseAll } from '../../store/actions'
const MenuList = () => {
  const dispatch = useDispatch();
  const { menuItems, loading, error, expandedMenus, expandButtonColor, collapseButtonColor } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchMenuItems());
  }, [dispatch]);

  const handleToggleMenu = (menuItem) => {
    dispatch(toggleMenu(menuItem.id));
  };

  const handleExpandAll = () => {
    dispatch(expandAll());
  };

  const handleCollapseAll = () => {
    dispatch(collapseAll());
  };

  const renderMenuItem = (item) => {
    return (
      <Box key={item.id}>
        <Box display="flex" alignItems="center" onClick={() => handleToggleMenu(item)}>
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

export default MenuList;