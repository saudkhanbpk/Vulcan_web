import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import theme from "./Theme/themes.jsx";
import { store } from "./App/store";
import { Provider } from "react-redux";
import { FeatureFlagsProvider } from "./contexts/FeatureFlags";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <FeatureFlagsProvider>
          <ThemeProvider theme={theme}>
            <App />
            <ToastContainer/>
          </ThemeProvider>
      </FeatureFlagsProvider>
    </Provider>
  </React.StrictMode>
);
