import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import './index.scss';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
const container = document.getElementById('root')!;
const root = createRoot(container);
const queryClient = new QueryClient()
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient} >
        <App />
        <ReactQueryDevtools/>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

 