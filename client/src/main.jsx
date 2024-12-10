import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'assets/css/normalize.css'
import 'assets/css/styles.scss'
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
<BrowserRouter>
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
</BrowserRouter>
</Provider>
  </StrictMode>,
)
