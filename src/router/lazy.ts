import { lazy } from "react";

// auth page
export const PageLogin = lazy(() => import("@/pages/login"));

// protected page
export const PageDashboard = lazy(() => import("@/pages/dashboard"));
export const PageShop = lazy(() => import("@/pages/shop"));
export const PageCreateShop = lazy(() => import("@/pages/createShop"));
export const PageDetailShop = lazy(() => import("@/pages/detailShop"));
export const PageCreateProduct = lazy(() => import("@/pages/createProduct"));

export const PageHome = lazy(() => import("@/pages/home"));
export const PageShops = lazy(() => import("@/pages/shops"));
export const PageTopSale = lazy(() => import("@/pages/topSale"));

// other
export const PageNotFound = lazy(() => import("@/pages/not_found"));