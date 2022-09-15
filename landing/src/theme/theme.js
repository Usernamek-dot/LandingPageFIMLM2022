import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    mode: "dark",

    // background
    primary: {
      main: "#181A1B",
    },
    // text
    secondary: {
      main: "#E8E6E3",
    },
    //borders
    tertiary: { main: "#7E7567" },
  },
  typography: { fontFamily: `'Poppins', sans-serif` },
});
