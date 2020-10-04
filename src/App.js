import React from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme";
import { GlobalStyle } from "./global";

import Header from "./components/header/Header";
import Workspace from "./components/workspace/Workspace";

function App() {
  const [theme, setTheme] = React.useState("light");
  const themeToggle = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");
  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle />
      <Header onThemeToggle={themeToggle} />
      <Workspace />
    </ThemeProvider>
  );
}

export default App;
