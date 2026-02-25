import { lazy, Suspense } from 'react';
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

// Layout
import Layout from '@/layouts';
import Loading from '@/components/Loading';
import UserList from '@/pages/User/UserList';
import UserDetail from '@/pages/User/UserDetail';
import AuthRoute from './AuthRoute';

// 懒加载页面组件
const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const User = lazy(() => import('@/pages/User'));
const Login = lazy(() => import('@/pages/Login'));
const NotFound = lazy(() => import('@/pages/NotFound'));

// 路由配置
const routes: RouteObject[] = [
    {
        path: '/',
        element: (
            <AuthRoute requireAuth>
                <Layout />
            </AuthRoute>
        ),
        children: [
            {
                index: true,
                element: <Navigate to='/home' replace />,
            },
            {
                path: 'home',
                element: (
                    <Suspense fallback={<Loading />}>
                        <Home />
                    </Suspense>
                ),
            },
            {
                path: 'about',
                element: (
                    <Suspense fallback={<Loading />}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: 'user',
                element: (
                    <Suspense fallback={<Loading />}>
                        <User />
                    </Suspense>
                ),
                children: [
                    {
                        path: 'list',
                        element: <UserList />,
                    },
                    {
                        path: 'detail/:id',
                        element: <UserDetail />,
                    },
                ],
            },
        ],
    },
    {
        path: '/login',
        element: (
            <Suspense fallback={<Loading />}>
                <Login />
            </Suspense>
        ),
    },
    {
        path: '*',
        element: (
            <Suspense fallback={<Loading />}>
                <NotFound />
            </Suspense>
        ),
    },
];

export default routes;
