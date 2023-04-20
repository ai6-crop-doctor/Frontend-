import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import './index.css';
import {
  MainPage,
  BoardPage,
  ServicePage,
  BoardDetailPage,
  BoardFormPage,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/board',
        element: <BoardPage />,
      },
      {
        path: '/service',
        element: <ServicePage />,
        path: '/boardDetail',
        element: <BoardDetailPage />,
      },
      {
        path: '/boardForm',
        element: <BoardFormPage />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
