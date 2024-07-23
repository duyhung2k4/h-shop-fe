import { lazy } from "react";

// auth page
export const PageLogin = lazy(() => import("@/pages/login"));

// protected page
export const PageHome = lazy(() => import("@/pages/home"));
export const PageShopping = lazy(() => import("@/pages/shopping"));
export const PageDetailProduct = lazy(() => import("@/pages/detail_product"));
export const PageOrder = lazy(() => import("@/pages/order"));
export const PagePaymentResult = lazy(() => import("@/pages/payment_result"));
export const PagePuchaseOrder = lazy(() => import("@/pages/purchase_order"));
export const PageHeart = lazy(() => import("@/pages/heart"));

// other
export const PageNotFound = lazy(() => import("@/pages/not_found"));