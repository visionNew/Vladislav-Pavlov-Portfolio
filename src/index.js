import ReactDOM from 'react-dom/client';
import React, {Suspense} from "react";
import App from './App';
import './index.css';
import './i18n';

const root = ReactDOM.createRoot(document.querySelector('#root'), document.getElementById('root'));
root.render(
    <Suspense fallback={(<div>Loading...</div>)}>
       <App/> 
    </Suspense>
        
);

