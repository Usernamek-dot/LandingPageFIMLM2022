import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#b8c1ec" },
    secondary: { main: "#fffffe" },
    // tertiary: { main: "#eebbc3" },

    // background: { main: "#232946" },
    // headline: { main: "#fffffe" },
    // paragraph: { main: "#b8c1ec" },
    // button: { main: "#eebbc3" },
    // buttonText: { main: "#232946" },
    // stroke: { main: "#121629" },
    // highlight: { main: "#eebbc3" },
  },
});

// primary - used to represent primary interface elements for a user. It's the color displayed most frequently across your app's screens and components.
// secondary - used to represent secondary interface elements for a user. It provides more ways to accent and distinguish your product. Having it is optional.
// error - used to represent interface elements that the user should be made aware of.
// warning - used to represent potentially dangerous actions or important messages.
// info - used to present information to the user that is neutral and not necessarily important.
// success - used to indicate the successful completion of an action that user triggered.
