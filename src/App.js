import React from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "./theme";
import { GlobalStyle } from "./global";
import { AppContainer } from "./App.styled";
import Header from "./components/header/Header";
import Workspace from "./components/workspace/Workspace";

function App() {
  const [theme, setTheme] = React.useState("dark");
  const themeToggle = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");
  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle />
      <AppContainer>
        <Header onThemeToggle={themeToggle} />
        <Workspace />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
