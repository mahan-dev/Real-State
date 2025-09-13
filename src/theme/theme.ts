import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "inherit",
    allVariants: {
      fontSize: "inherit",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          padding: "0.3rem 0.8rem",
          border: "2px solid",
          borderRadius: "0.375rem",
        },
        containedPrimary: {
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#f97316",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ef4444",
      contrastText: "#fff",
    },
    
  },
});

export default theme;
