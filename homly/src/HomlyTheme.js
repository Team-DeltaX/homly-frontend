// Desc: Theme for the Homly app. This is where you can change the color scheme of the app.
import { createTheme} from "@mui/material";
import { grey } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#872341',
        },
        secondary: {
            main: '#E9E9E9',
        },
        grey1: grey[100],
        grey2: grey[200],
        grey3: grey[300],
        grey4: grey[400],

        text: {
            primary: '#2c2c2c',
            secondary: '#2c2c2c',
            red: '#872341',
        },
    },
    typography: {
        fontFamily: 'Roboto Flex',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
});

export default theme;