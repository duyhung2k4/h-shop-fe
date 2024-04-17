import { lazy } from "react";

// auth page
export const PageLogin = lazy(() => import("@/pages/login"));

// protected page
export const PageDashboard = lazy(() => import("@/pages/dashboard"));
export const PageShop = lazy(() => import("@/pages/shop"));
export const PageCreateShop = lazy(() => import("@/pages/createShop"));
export const PageDetailShop = lazy(() => import("@/pages/detailShop"));
export const PageCreateProduct = lazy(() => import("@/pages/createProduct"));

// other
export const PageNotFound = lazy(() => import("@/pages/not_found"));

// test
export const PageTest = lazy(() => import("@/pages/test"));