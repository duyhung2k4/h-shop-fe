import { lazy } from "react";

// auth page
export const PageLogin = lazy(() => import("@/pages/login"));

// protected page
export const PageDashboard = lazy(() => import("@/pages/dashboard"));
export const PageShop = lazy(() => import("@/pages/shop"));

// other
export const PageNotFound = lazy(() => import("@/pages/not_found"));