import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface AuthRouteProps {
    children: React.ReactNode;
    requireAuth?: boolean;
    roles?: string[];
}

const AuthRoute: React.FC<AuthRouteProps> = ({ children, requireAuth = false, roles = [] }) => {
    const location = useLocation();
    const token = localStorage.getItem('token');
    const userRole = localStorage.getItem('role'); // 假设角色信息存在 localStorage
    // 不需要认证的页面直接放行
    if (!requireAuth) {
        return <>{children}</>;
    }

    // 需要认证但未登录
    if (!token) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    // 需要特定角色但当前用户没有权限
    if (roles.length > 0 && !roles.includes(userRole || '')) {
        return <Navigate to='/403' replace />;
    }

    // 通过所有检查
    return <>{children}</>;
};

export default AuthRoute;
