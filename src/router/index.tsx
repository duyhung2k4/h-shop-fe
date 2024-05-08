import React from "react";
import AuthLayout from "../layout/auth";
import ProtectedLayout from "../layout/protected";
import AppshellLayout from "@/layout/appShell";

import { Routes, Route } from "react-router";

import {  
  PageHome,
    PageLogin, 
    PageNotFound,
    PageShops,
    PageTopSale, 
} from "./lazy";
import { ROUTER } from "@/constants/router";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<PageLogin />} />

        <Route element={<ProtectedLayout/>}>
          <Route element={<AppshellLayout/>}>
            <Route path={ROUTER.HOME.href} element={<PageHome/>} />
            <Route path={ROUTER.SHOPS.href} element={<PageShops/>} />
            <Route path={ROUTER.TOP_SALE.href} element={<PageTopSale/>} />
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound/>}/>
      </Route>
    </Routes>
  )
}

export default AppRouter;