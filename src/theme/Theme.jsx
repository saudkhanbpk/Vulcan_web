import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000FF",
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
    h3: {
      fontsize: "32px",
      fontWeight: 500,
      color: "#0000FF",
      fontFamily: "'Audiowide', sans-serif",
    },
    h5: {
      fontSize: "24px",
      fontWeight: 400,
      lineHeight: 1.2,
      fontFamily: "'Audiowide', sans-serif",
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
