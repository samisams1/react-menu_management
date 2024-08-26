import { Header } from "../components";
import { Box } from "@mui/material";
import MenuList from "../components/Menu/MenuList";
import MenuForm from "../components/Menu/MenuForm";
const MenuPage = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Menus" />
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gridAutoRows="minmax(auto, 1fr)" gap="20px">
        {/* Menu hierarchy display */}
         <Box>
          <MenuList/>
          </Box>
        {/* Menu creation form */}
   <MenuForm/>
      </Box>
    </Box>
  );
};

export default MenuPage;