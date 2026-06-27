// config.tsx
import React from 'react';
import { lazy, Suspense } from 'react';
import Loading from '@/components/Loading';
import AuthRoute from './AuthRoute';
import { Navigate, type RouteObject } from 'react-router-dom';
import Layout from '@/layouts';

// 包装懒加载组件
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lazyLoad = (factory: () => Promise<any>) => {
    const Component = lazy(factory);
    return (
        <Suspense fallback={<Loading />}>
            <Component />
        </Suspense>
    );
};

// 路由配置接口
export interface IRoute extends Omit<RouteObject, 'children'> {
    path: string;
    name?: string;
    element?: React.ReactNode;
    meta?: {
        title?: string;
        icon?: string;
        requireAuth?: boolean;
        roles?: string[];
        hidden?: boolean; // 是否在菜单中隐藏
    };
    children?: IRoute[];
}

// 路由配置表
const routes: IRoute[] = [
    {
        path: '/',
        name: '首页',
        element: (
            <AuthRoute requireAuth>
                <Layout />
            </AuthRoute>
        ),
        children: [
            {
                path: '',
                element: <Navigate to='home' replace />,
            },
            {
                path: 'home',
                name: '首页',
                element: lazyLoad(() => import('@/pages/Home')),
                meta: {
                    title: '首页',
                    icon: 'home',
                },
            },
            {
                path: 'characters',
                name: '人物录',
                element: lazyLoad(() => import('@/pages/Character/List')),
                meta: {
                    title: '幻想乡人物录',
                    icon: 'team',
                },
            },
            {
                path: 'characters/:id',
                name: '角色详情',
                element: lazyLoad(() => import('@/pages/Character/Detail')),
                meta: {
                    title: '角色详情',
                    hidden: true,
                },
            },
            {
                path: 'about',
                name: '关于',
                element: lazyLoad(() => import('@/pages/About')),
                meta: {
                    title: '关于我们',
                    requireAuth: false,
                },
            },
            {
                path: 'user',
                name: '用户管理',
                meta: {
                    title: '用户管理',
                    icon: 'user',
                    roles: ['admin'],
                },
                children: [
                    {
                        path: 'list',
                        name: '用户列表',
                        element: lazyLoad(() => import('@/pages/User/UserList')),
                        meta: {
                            title: '用户列表',
                        },
                    },
                    {
                        path: 'detail/:id',
                        name: '用户详情',
                        element: lazyLoad(() => import('@/pages/User')),
                        meta: {
                            title: '用户详情',
                            hidden: true, // 不在菜单显示
                        },
                    },
                ],
            },
            {
                path: 'system',
                name: '系统设置',
                meta: {
                    title: '系统设置',
                    icon: 'setting',
                    roles: ['admin'],
                },
                children: [
                    {
                        path: 'config',
                        name: '系统配置',
                        element: lazyLoad(() => import('@/pages/About')),
                    },
                ],
            },
        ],
    },
    {
        path: '/login',
        name: '登录',
        element: lazyLoad(() => import('@/pages/Login')),
        meta: {
            title: '登录',
            requireAuth: false,
        },
    },
    {
        path: '/css-animations',
        name: '动效',
        element: lazyLoad(() => import('@/pages/cssAnimations')),
        meta: {
            title: '动销',
            requireAuth: false,
        },
    },
    // {
    //   path: '/403',
    //   name: '无权限',
    //   element: lazyLoad(() => import('@/pages/Error/403')),
    //   meta: {
    //     title: '无权限',
    //     requireAuth: false
    //   }
    // },
    // {
    //   path: '/404',
    //   name: '404',
    //   element: lazyLoad(() => import('@/pages/Error/404')),
    //   meta: {
    //     title: '404',
    //     requireAuth: false
    //   }
    // },
    {
        path: '*',
        element: <Navigate to='/404' replace />,
    },
];

export default routes;
