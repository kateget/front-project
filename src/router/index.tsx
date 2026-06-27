// index.tsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { convertRoutes } from './utils';
import routes from './config';

const Router: React.FC = () => {
    const router = createBrowserRouter(convertRoutes(routes));

    return <RouterProvider router={router} />;
};

export default Router;
