import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import Routes from "./routes";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
