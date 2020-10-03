import React from "react";
import { ThemeProvider } from "styled-components";
import { dark } from "./theme";
import { GlobalStyle } from "./global";

import Header from "./components/header/Header";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyle />
      <Header />
    </ThemeProvider>
  );
}

export default App;
