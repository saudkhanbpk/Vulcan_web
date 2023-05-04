import { createTheme } from "@mui/material";

const theme = createTheme({
    breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
          xxl: 1920,
          // Add your custom breakpoints here
          mobile: 360,
          tablet: 768,
          laptop: 1024,
          desktop: 1440,
        },
      },
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
    body4:{
        fontSize: "32px",
        fontWeight: 700,
        color:"primary.main",
        lineHeight: 1.2,
        fontFamily: "Inter",
    },
    paragraph:{
        fontSize: "22px"
    }
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
