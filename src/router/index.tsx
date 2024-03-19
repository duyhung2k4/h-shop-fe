import React from "react";
import AuthLayout from "../layout/auth";
import ProtectedLayout from "../layout/protected";
import AppshellLayout from "@/layout/appShell";

import { Routes, Route } from "react-router";

import { 
    PageDashboard, 
    PageLogin, 
    PageNotFound, 
    PageShop, 
} from "./lazy";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<PageLogin />} />

        <Route element={<ProtectedLayout/>}>
          <Route element={<AppshellLayout/>}>
            <Route path="/" element={<PageDashboard />} />
            <Route path="/me/shop" element={<PageShop />} />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    </Routes>
  )
}

export default AppRouter;