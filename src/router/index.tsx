import React from "react";
import AuthLayout from "../layout/auth";
import { Routes, Route } from "react-router";
import { PageDashboard, PageLogin } from "./lazy";
import ProtectedLayout from "../layout/protected";
import AppshellLayout from "@/layout/appShell";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<PageLogin />} />

        <Route element={<ProtectedLayout/>}>
          <Route element={<AppshellLayout/>}>
            <Route path="/" element={<PageDashboard />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  )
}

export default AppRouter;