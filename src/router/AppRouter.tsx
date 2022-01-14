import React from "react";
import { Route, Routes } from "react-router-dom";

import routes from "./config";

import Layout from "../screens/Layout";
import ProtectedRoute from "./ProtectedRoute";

function AppRouter() {
  return (
    <Layout>
      <Routes>
        {routes.map(({ path, Component, safe }) =>
          safe ? (
            <Route
              key={path}
              path={path}
              element={
                <ProtectedRoute>
                  <Component />
                </ProtectedRoute>
              }
            />
          ) : (
            <Route key={path} path={path} element={<Component />} />
          )
        )}
      </Routes>
    </Layout>
  );
}

export default AppRouter;
