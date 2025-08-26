import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import App from "./App.jsx";

// importamos el reducer que definimos en Redux.jsx
import { themeReducer } from "./pages/Redux.jsx";

// creamos el store
const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
