import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import i18n from '../src/Localization/i18n';
import { I18nextProvider } from 'react-i18next';
import store from './redux-saga/saga';
import { StoreProvider } from './Global/store/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import './theme/theme.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={store}>
        <StoreProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </StoreProvider>
      </Provider>
    </I18nextProvider>
  </React.StrictMode >
);
