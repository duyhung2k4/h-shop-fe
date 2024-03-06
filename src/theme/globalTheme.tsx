"use client"

import React from "react";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import themeOverride from "./overrideTheme";
import { Provider } from "react-redux";
import store from "@/redux/store";

const GlobalTheme: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <MantineProvider theme={themeOverride}>
        {children}
      </MantineProvider>
    </Provider>
  )
}

export default GlobalTheme;