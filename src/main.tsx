import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";

import "./index.css";
import AppRouter from "./router/AppRouter";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <MemoryRouter>
        <div className="App">
          <AppRouter />
        </div>
      </MemoryRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
