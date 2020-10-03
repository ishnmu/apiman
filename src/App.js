import React from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme";
import { GlobalStyle } from "./global";

import Header from "./components/header/Header";

function App() {
  const [theme, setTheme] = React.useState("light");
  const themeToggle = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");
  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle />
      <Header onThemeToggle={themeToggle} />
    </ThemeProvider>
  );
}

export default App;
