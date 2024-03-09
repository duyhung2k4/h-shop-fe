import React, { Suspense } from "react";
import { Routes, Route } from "react-router";
import { PageDashboard, PageLogin } from "./lazy";
import { LoadingOverlay } from "@mantine/core";
import AuthComponent from "./auth";

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<LoadingOverlay visible overlayProps={{ radius: "sm", blur: 2 }} />}>
      <Routes>
        <AuthComponent>
          <Route path="/login" element={<PageLogin />} />
          <Route path="/" element={<PageDashboard />} />
        </AuthComponent>
      </Routes>
    </Suspense>
  )
}

export default AppRouter;