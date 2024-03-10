import React from "react";
import AuthLayout from "./layout/auth";
import { Routes, Route } from "react-router";
import { PageDashboard, PageLogin } from "./lazy";
import ProtectedLayout from "./layout/protected";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<PageLogin />} />

        <Route element={<ProtectedLayout/>}>
          <Route path="/" element={<PageDashboard />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRouter;