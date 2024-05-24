import React, { useState, useMemo } from "react";
import { Container, ThemeProvider, createTheme, AppBar, Box, Toolbar, Typography, IconButton } from "@mui/material";
import CardSection from "./Components/CardSection";
import Part1 from "./Components/Part1";
import Footer from "./Components/Footer";
import { Brightness4, Brightness7, CameraAlt as CameraAltIcon } from "@mui/icons-material";

function App() {
  const [mode, setMode] = useState('dark');

  const theme = useMemo(
    () => 
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: "#43f",
          },
          ...(mode === 'dark' ? {
            background: {
              default: "#121212",
              paper: "#1d1d1d",
            },
            text: {
              primary: "#ffffff",
              secondary: "#aaaaaa",
            },
          } : {
            background: {
              default: "#ffffff",
              paper: "#f7f7f7",
            },
            text: {
              primary: "#000000",
              secondary: "#333333",
            },
          }),
        },
        shape: {
          borderRadius: 12,
        },
      }),
    [mode]
  );

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: theme.palette.background.default, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <CameraAltIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Album Layout
            </Typography>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              aria-label="mode"
              onClick={toggleColorMode}
            >
              {mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Part1 />
        <Container maxWidth="lg" sx={{ flex: 1 }}>
          <CardSection />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
