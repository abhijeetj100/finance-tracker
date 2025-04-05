import React, { ReactNode, useMemo } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Container, 
  CssBaseline, 
  ThemeProvider, 
  createTheme 
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from './store';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const themeMode = useSelector((state: RootState) => state.appSettings.theme.mode);

  // Create a theme instance with the current mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
          primary: {
            main: themeMode === 'light' ? '#1976d2' : '#90caf9',
          },
          secondary: {
            main: themeMode === 'light' ? '#dc004e' : '#f48fb1',
          },
          background: {
            default: themeMode === 'light' ? '#f5f5f5' : '#121212',
            paper: themeMode === 'light' ? '#ffffff' : '#1e1e1e',
          },
        },
      }),
    [themeMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            React + MUI + Redux App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <main>{children}</main>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;