import { createMuiTheme } from '@material-ui/core/styles';
import { colors } from '@material-ui/core';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f44336',
      dark: "#f4f6f8",
    },
    secondary: {
      main: '#3ea6ff',
    },
    background: {
      default: colors.common.white,
      paper: colors.common.white
    },
  },
});

export default theme;