import { createMuiTheme } from '@material-ui/core/styles';
import { PaletteOptions } from '@material-ui/core/styles/createPalette';
import { colors } from '@material-ui/core';
import THEMES from 'src/utils/constants';
import { Overrides } from '@material-ui/core/styles/overrides';

interface ConfigProps {
  theme: string;
}

interface ThemeOptionsProps {
  name: string;
  overrides: Overrides;
  palette: PaletteOptions;
}

// Create a theme instance.
const themesOptions = [
  {
    name: THEMES.LIGHT,
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: colors.blueGrey[600],
          },
        },
      },
    },
    palette: {
      type: 'light',
      action: {
        active: colors.blueGrey[600],
      },
      primary: {
        main: '#f44336',
        dark: '#f4f6f8',
      },
      secondary: {
        main: '#3ea6ff',
      },
      background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white,
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
      },
    },
  },
  {
    name: THEMES.DARK,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)',
      },
      background: {
        default: '#282c34',
        dark: '#1c2025',
        paper: '#282c34',
      },
      primary: {
        main: '#f00',
        dark: '#1c2025',
      },
      secondary: {
        main: '#8a85ff',
      },
      text: {
        primary: '#e6e5e8',
        secondary: '#adb0bb',
      },
    },
  },
];

export const createTheme = (config: ConfigProps) => {
  let themeOptions = themesOptions.find(
    (theme) => theme.name === config.theme,
  ) as ThemeOptionsProps;

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    // [themeOptions] = themesOptions;
  }

  const theme = createMuiTheme(themeOptions);

  return theme;
};

export default createTheme;
