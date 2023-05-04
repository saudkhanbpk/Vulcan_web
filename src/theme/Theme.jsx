import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000FF",
    },
    common: {
      main: "#000000", // replace with your custom white color value
    },
  },
  typography: {
    // fontFamily: 'Inter, Arial',

    myVariant: {
      fontsize: "6rem",
    },
    h1: {
      fontSize: "40px",
      fontWeight: 600,
      lineHeight: 1.2,
      fontFamily: "'Audiowide', sans-serif",
    },
    h5: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: 1.2,
      fontFamily: "'Audiowide', sans-serif",
    },
    subtitle1:{
      fontSize: "24px",
      fontWeight: 600,
      lineHeight: 1.2,
      fontFamily: "'Inter', sans-serif",
    },
    subtitle2:{
      fontSize: "20px",
      fontWeight: 0,
      lineHeight: 1.2,
      fontFamily: "'Inter', sans-serif",
    },
    body1: {
      fontSize: "40px",
      fontWeight: 700,
      lineHeight: 1.2,
      fontFamily: "Inter",
    },
    body2: {
      fontSize: "26px",
      fontWeight: 600,
      lineHeight: 1.2,
      fontFamily: "Inter",
    },
    body3: {
      fontSize: "20px",
      fontWeight: 400,
      // lineHeight: 1.2,
      fontFamily: "Inter",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          border: "1px solid black",
          fontFamily: "Inter, sans-serif",
          fontWeight: 800,
        },
      },
    },

    // MuiCssBaseline: {
    //     styleOverrides: {
    //         '@global': {

    //             body: {
    //                 fontFamily: 'Audiowide, sans-serif',
    //             },
    //         },
    //     },
    // },
  },
});

export default theme;
