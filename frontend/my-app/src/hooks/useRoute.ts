import { useLocation, useNavigate, useParams, useMatch } from 'react-router-dom';
import { useMemo } from 'react';

// 获取路由参数
export const useRouteParams = () => {
    const params = useParams();
    return params;
};

// 获取查询参数
export const useQuery = () => {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
};

// 路由跳转 Hook
export const useRoute = () => {
    const navigate = useNavigate();
    const location = useLocation();

    return {
        navigate,
        location,
        goBack: () => navigate(-1),
        goForward: () => navigate(1),
        push: (path: string, state?: any) => navigate(path, { state }),
        replace: (path: string, state?: any) => navigate(path, { replace: true, state }),
    };
};

// 检查当前路由是否激活
export const useIsActive = (path: string) => {
    const match = useMatch(path);
    return !!match;
};
