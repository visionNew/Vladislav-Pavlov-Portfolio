import ReactDOM from 'react-dom/client';
import React, { Suspense, lazy } from "react";
import './index.css';
import './utils/i18n';

const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.querySelector('#root'), document.getElementById('root'));
root.render(
    <Suspense fallback={<div className="loading">
                            <div className="arc"></div>
                            <div className="arc"></div>
                            <div className="arc"></div>
                            <div className="dot"></div>
                        </div>} maxDuration={5000}>
       <App/> 
    </Suspense>
        
);

