import { Router } from "./providers/Router";

import { StoreProvider } from "./providers/Store";
import { ThemeProvider } from "./providers/Theme";

import "./styles/index.css";
import "./styles/normalize.css";

export default function App() {
  return (
    <StoreProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </StoreProvider>
  );
}
