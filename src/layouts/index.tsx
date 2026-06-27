import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './index.less';

const Layout: React.FC = () => {
    return (
        <div className='layout'>
            <header className='header'>
                <nav className='nav'>
                    <Link to='/home'>首页</Link>
                    <Link to='/characters'>人物录</Link>
                    <Link to='/about'>关于</Link>
                    <Link to='/user/list'>用户管理</Link>
                    {/* <button onClick={handleLogout}>退出登录</button> */}
                </nav>
            </header>

            <main className='main'>
                {/* 子路由出口 */}
                <Outlet />
            </main>

            <footer className='footer'>
                <p>© 2024 我的应用</p>
            </footer>
        </div>
    );
};

export default Layout;
