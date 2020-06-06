import React from "react";
import "./App.css";
import { Home } from "./pages";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
