// src/theme.ts
import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    palette: {
        common: {
            white: '#ffffff',  // Ensure this exists
        },
        // Define other palette properties if needed
    },
});

export default theme;