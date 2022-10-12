import React from 'react';
import ReactDOM from 'react-dom/client';
import i18n from '../src/Localization/i18n';
import { I18nextProvider } from 'react-i18next';
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
      <StoreProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </StoreProvider>
    </I18nextProvider>
  </React.StrictMode >
);
