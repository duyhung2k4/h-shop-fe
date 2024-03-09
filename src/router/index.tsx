import React from "react";
import AuthLayout from "./layout/auth";
import { Routes, Route } from "react-router";
import { PageDashboard, PageLogin } from "./lazy";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<PageLogin />} />
        <Route path="/" element={<PageDashboard />} />
      </Route>
    </Routes>
  )
}

export default AppRouter;