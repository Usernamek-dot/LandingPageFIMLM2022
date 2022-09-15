import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    mode: "dark",

    // background
    primary: {
      main: "#181A1B",
      light: "#181A1B1A",
      dark: "#09090C",
      contrast: "#0E0F15",
    },
    // text

    secondary: {
      main: "#E8E6E3",
      light: "#BDB8AF",
      dark: "#52A6FF",
      contrast: "#9E9689",
    },
    //borders
    tertiary: { main: "#7E7567" },
  },
  typography: { fontFamily: `'Poppins', sans-serif` },
});
