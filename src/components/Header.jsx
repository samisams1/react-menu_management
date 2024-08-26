import { Typography, Box, useTheme, Icon } from "@mui/material";
import { tokens } from "../styles/theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb="30px" display="flex" alignItems="center">
      <Icon
        fontSize="large"
        sx={{
          color: colors.blueAccent[500],
          backgroundColor: colors.blueAccent[700],
          borderRadius: "50%",
          padding: "10px",
          marginRight: "10px",
        }}
      >
        {/* Add your desired icon component here */}
        add
      </Icon>

      <Box>
        <Typography
          variant="h2"
          color={colors.grey[100]}
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