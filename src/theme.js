import { createTheme } from '@mui/material/styles';

import "@fontsource/nunito-sans";
import TextField from "@mui/material/TextField";

const theme = createTheme({

    typography: {
        h1: {
            color: "#605DEC",
            fontSize: "24px",
            fontWeight: "700",
            lineHeight: "33px",
        },
        h2:{
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "25px",
            color: "#6E7491"
        },
        subtitle2: {
            color: "#7C8DB0",
            fontWeight: "400",
            fontSize: "18px",
            lineHeight: "25px",
        },
        caption: {
            color: "#7C8DB0",
            fontSize: "12px",
            lineHeight: "16px",
        }
    },
    components: {

        MuiOutlinedInput:{
            defaultProps: {
                    fullWidth: true
            },
            styleOverrides:{
                root: {
                    color: "#7C8DB0",
                    fontWeight: "400",
                    fontSize: "18px",
                    lineHeight: "25px",
                    '& fieldset':{
                        border: "1px solid",
                        borderColor: "#A1B0CC",
                    },
                }
            }
        },
        MuiInputLabel:{
            styleOverrides:{
                root:{
                    color: "#7C8DB0",
                    fontWeight: "400",
                    fontSize: "18px",
                    lineHeight: "25px",
                }
            }
        },
    }
});

export default theme;