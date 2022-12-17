import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import {
  RecoilRoot,
} from 'recoil';

// PWA 추가
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
serviceWorkerRegistration.register();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </RecoilRoot>
);

reportWebVitals();
