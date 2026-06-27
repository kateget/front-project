// utils.tsx;
import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';
import type { IRoute } from './config';

// 递归转换路由配置
export const convertRoutes = (routes: IRoute[]): RouteObject[] => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return routes.map((route: any) => {
        const newRoute: RouteObject = { ...route } as RouteObject;

        if (route.children) {
            newRoute.children = convertRoutes(route.children);
        }

        // 处理重定向
        if (route.path === '*' && route.redirect) {
            newRoute.element = <Navigate to={route.redirect} replace />;
        }

        return newRoute;
    });
};

// 获取面包屑数据
export const getBreadcrumb = (routes: IRoute[], pathname: string) => {
    const breadcrumb: Array<{ title: string; path: string }> = [];

    const findRoute = (routeList: IRoute[], path: string): boolean => {
        for (const route of routeList) {
            if (route.path === path) {
                breadcrumb.push({
                    title: route.meta?.title || route.name || '',
                    path: route.path,
                });
                return true;
            }

            if (route.children) {
                if (findRoute(route.children, path)) {
                    breadcrumb.unshift({
                        title: route.meta?.title || route.name || '',
                        path: route.path,
                    });
                    return true;
                }
            }
        }
        return false;
    };

    findRoute(routes, pathname);
    return breadcrumb;
};
