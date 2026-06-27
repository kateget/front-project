import React, { useEffect } from 'react';
import { useRouteParams, useRoute, useQuery } from '@/hooks/useRoute';

const UserDetail: React.FC = () => {
    const { id } = useRouteParams();
    const query = useQuery();
    const { goBack } = useRoute();

    const name = query.get('name');
    const age = query.get('age');

    useEffect(() => {
        // 根据 id 获取用户详情
        console.log(`获取用户 ${id} 的详情`);
    }, [id]);

    return (
        <div>
            <h1>用户详情</h1>
            <p>用户ID: {id}</p>
            <p>姓名: {name}</p>
            <p>年龄: {age}</p>
            <button onClick={goBack}>返回</button>
        </div>
    );
};

export default UserDetail;
