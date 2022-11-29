import { ThemeProvider } from "styled-components";
import { PostsContextProvider } from "./Contexts/PostsContext";
import { Router } from "./router";
import { GlobalStyle } from "./styles/global";
import { DarkMode } from "./styles/themes/darkMode";

export function App() {
  return (
    <ThemeProvider theme={DarkMode}>
      <GlobalStyle />

      <PostsContextProvider>
        <Router />
      </PostsContextProvider>
    </ThemeProvider>
  );
}
