import React, {Fragment} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import theme from './theme.tsx';
import store from './redux/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
        <Provider store={store}>
            <BrowserRouter>
              <App />
            </BrowserRouter>
        </Provider>
    </ThemeProvider>
  </React.Fragment>,
)
