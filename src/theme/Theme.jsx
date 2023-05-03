import { createTheme } from "@mui/material";

const theme = createTheme({


    palette: {
        primary: {
            main: "#0000FF",
        },
        common: {
            main: '#000000', // replace with your custom white color value
          },
    },
    typography: {
        // fontFamily: 'Inter, Arial',

        myVariant: {
            fontsize: "6rem",
        },
        h1: {
            fontSize: '32px',
            fontWeight: 600,
            lineHeight: 1.2,
            fontFamily: "'Audiowide', sans-serif",
        }, 
    
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '30px',
                    border: '1px solid black',
                    fontFamily: 'Inter, sans-serif',
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
})

export default theme;