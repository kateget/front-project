import react from 'react';
import './index.less';

const App: react.FC = () => {
    return (
        <div className='css-container'>
            {/* 毛玻璃效果 */}
            <div className='frosted-glass'>
                <p>毛玻璃效果</p>
            </div>
            {/* 颜色反转效果 */}
            <div className='color-reverse'>
                <span>颜色反转效果</span>
            </div>
        </div>
    );
};

export default App;
