import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from './redux/store.ts'
import themeOverride from './theme/overrideTheme.ts'

import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from '@mantine/core'
import { Provider } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Notifications } from '@mantine/notifications';

import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <MantineProvider theme={themeOverride}>
      <BrowserRouter>
        <GoogleOAuthProvider
          clientId="75914166479-etdvnd3f9molqser9g3619bf5rdemo2b.apps.googleusercontent.com"
        >
          <Notifications />
          <App />
        </GoogleOAuthProvider>
      </BrowserRouter>
    </MantineProvider>
  </Provider>
)
