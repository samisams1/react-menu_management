import { Typography, Box, useTheme, Icon } from "@mui/material";
import { tokens } from "../styles/theme";
import { Window } from "@mui/icons-material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px" display="flex" alignItems="center">
      <Box
        sx={{
          width: "52px", // Adjust the size of the circle as needed
          height: "52px",
          borderRadius: "50%",
          backgroundColor: "#253BFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "30px",
        }}
      >
        <Icon
          fontSize="24px" // Adjust the size of the window icon as needed
          sx={{
            color: "#FFFFFF",
          }}
        >
          <Window />
        </Icon>
      </Box>

      <Box>
        <Typography
          variant="h2"
          color={"#101828"}
          fontWeight="bold"
          sx={{ m: "0 0 5px 0" }}
        >
          {title}
        </Typography>

        <Typography variant="h5" color={colors.greenAccent[400]}>
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;