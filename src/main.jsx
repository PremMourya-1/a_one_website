import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/custom.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThemeProvider from "./Context/ThemeContext.jsx";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./Store/store.js";
import AuthProvider from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/*"
        element={
          <ThemeProvider>
            <AuthProvider>
              <Provider store={store}>
                <App />
              </Provider>
            </AuthProvider>
          </ThemeProvider>
        }
      />
    </Routes>
  </BrowserRouter>
);
