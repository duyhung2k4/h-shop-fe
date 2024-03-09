import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from './redux/store.ts'
import themeOverride from './theme/overrideTheme.ts'

import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from '@mantine/core'
import { Provider } from "react-redux";

import './index.css'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MantineProvider theme={themeOverride}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
)
