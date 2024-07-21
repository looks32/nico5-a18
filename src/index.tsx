import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/reset.css';
import './style/swiperCustom.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { RecoilRoot } from "recoil";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const client = new QueryClient();

root.render(
  // <React.StrictMode>
    <QueryClientProvider client={client}>
      <RecoilRoot>
        <RouterProvider router={router}/>
      </RecoilRoot>
    </QueryClientProvider>
  // </React.StrictMode>
);