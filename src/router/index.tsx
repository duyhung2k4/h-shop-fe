import React from "react";
import AuthLayout from "../layout/auth";
import ProtectedLayout from "../layout/protected";
import AppshellLayout from "@/layout/appShell";

// import { Routes, Route, Router } from "react-router";
import { Routes, Route } from "react-router-dom";

import {
    PageDetailProduct,
    PageHeart,
    PageHome,
    PageLogin,
    PageNotFound,
    PageOrder,
    PagePaymentResult,
    PagePuchaseOrder,
    PageShopping,
} from "./lazy";
import { ROUTER } from "@/constants/router";

const AppRouter: React.FC = () => {

    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path={ROUTER.LOGIN.href} element={<PageLogin />} />

                <Route element={<ProtectedLayout />}>
                    <Route element={<AppshellLayout />}>
                        <Route path={ROUTER.HOME.href} element={<PageHome />} />
                        <Route path={ROUTER.SHOPPING.href} element={<PageShopping />} />
                        <Route path={ROUTER.PUCHASE_ORDER.href} element={<PagePuchaseOrder />} />
                        <Route path={ROUTER.HEART.href} element={<PageHeart/>} />
                    </Route>
                    <Route path={`${ROUTER.DETAIL_PRODUCT.href}/:id`} element={<PageDetailProduct />} />
                    <Route path={ROUTER.ORDER.href} element={<PageOrder />} />
                    <Route path={ROUTER.PAYMENT_RESULT.href} element={<PagePaymentResult />} />
                </Route>

                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRouter;