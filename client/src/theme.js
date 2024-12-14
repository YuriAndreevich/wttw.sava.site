import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    white: {
      main: "#fff",
    },
    main: {
      main: "rgb(89, 139, 146)",
    },
    mainHover: {
      main: "rgb(66, 114, 121)",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
