import { Header } from "../components";
import { Box } from "@mui/material";
import Ashebir from "./Ashebir";
import CreateMenu from "./CreateMenu";
const System = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Menus" />
      </Box>

      <Box display="grid" gridTemplateColumns="repeat(2, 1fr)" gridAutoRows="minmax(auto, 1fr)" gap="20px">
        {/* Menu hierarchy display */}
         <Box>
          <Ashebir/>
          </Box>
        {/* Menu creation form */}
   <CreateMenu/>
      </Box>
    </Box>
  );
};

export default System;