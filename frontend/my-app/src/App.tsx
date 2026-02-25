import React from 'react';
import Router from './router';
// import DocumentTitle from './components/DocumentTitle';
import './App.css';

const App: React.FC = () => {
    localStorage.setItem('token', '---1');
    return (
        <>
            {/* <DocumentTitle /> */}
            <Router />
        </>
    );
};

export default App;
