import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import routes from '@/router/config';

const DocumentTitle: React.FC = () => {
    const location = useLocation();

    useEffect(() => {
        const findRouteTitle = (routeList: any[], path: string): string => {
            for (const route of routeList) {
                if (route.path === path && route.meta?.title) {
                    return route.meta.title;
                }

                if (route.children) {
                    const childTitle = findRouteTitle(route.children, path);
                    if (childTitle) {
                        return route.meta?.title ? `${route.meta.title} - ${childTitle}` : childTitle;
                    }
                }
            }
            return '';
        };

        const title = findRouteTitle(routes, location.pathname);
        if (title) {
            document.title = `${title} - 我的应用`;
        }
    }, [location.pathname]);

    return null;
};

export default DocumentTitle;
