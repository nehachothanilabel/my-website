import { createTheme } from "@mui/material/styles";
import { colors } from "./constants/colors";

const customTheme = createTheme({
  palette: {
    primary: {
      main: colors.vanDykeBrown,
      contrastText: colors.golden,
    },
    secondary: {
      main: colors.burgundy,
      contrastText: colors.white,
    },
    background: {
      default: colors.veryLightBrown,
      paper: colors.white,
    },
    text: {
      primary: colors.vanDykeBrown,
      secondary: colors.white,
    },
    info: {
      main: colors.navyBlue,
    },
  },
  typography: {
    // fontFamily: `'Playfair Display', 'Roboto', 'serif'`,
  },
  components: {
    // MuiButton: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: "8px",
    //       textTransform: "none", // Disable uppercase
    //       fontWeight: 600,
    //     },
    //     containedPrimary: {
    //       backgroundColor: colors.burgundy,
    //       color: colors.white,
    //       "&:hover": {
    //         backgroundColor: colors.burgundy,
    //       },
    //     },
    //     containedSecondary: {
    //       backgroundColor: colors.golden,
    //       color: colors.white,
    //       "&:hover": {
    //         backgroundColor: colors.golden,
    //       },
    //     },
    //   },
    // },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: `0px 4px 10px rgba(${colors.black}, 0.1)`,
          borderRadius: "12px",
        },
      },
    },
  },
});

export default customTheme;
