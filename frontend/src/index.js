import { StrictMode } from "react"
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"
import { SnackbarProvider } from "notistack"

import { AppContextProvider } from "./contexts/app.context"

import App from './App';
import "./index.css"

const rootElement = document.getElementById("root");
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <AppContextProvider>
      <BrowserRouter>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </AppContextProvider>
  </StrictMode>
);