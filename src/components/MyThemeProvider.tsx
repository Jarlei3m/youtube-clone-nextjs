import { ReactNode } from 'react';
import createTheme from 'src/theme';
import useSettings from 'src/hooks/useSettings';
import { ThemeProvider } from '@material-ui/core/styles';

interface MyThemeProviderProps {
  children: ReactNode;
}

function MyThemeProvider({ children }: MyThemeProviderProps) {
  const { settings } = useSettings();
  const theme = createTheme({ theme: settings.theme });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default MyThemeProvider;
