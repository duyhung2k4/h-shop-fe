"use client"

import React from "react";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import themeOverride from "./overrideTheme";

const GlobalTheme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <MantineProvider theme={themeOverride}>
      {children}
    </MantineProvider>
  )
}

export default GlobalTheme;