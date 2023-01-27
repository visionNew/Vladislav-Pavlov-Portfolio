import ReactDOM from 'react-dom/client';
import React, {Suspense, useState, useEffect} from "react";
import App from './App';
import './index.css';
import './i18n';

const Loading = () => <div>LOADING...</div>

const DelayedLoading = ({ delay }) => {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    setTimeout(() => setReady(true), delay)
  }, [])
  return ready && <Loading />
}

const root = ReactDOM.createRoot(document.querySelector('#root'), document.getElementById('root'));
root.render(
    <Suspense fallback={<DelayedLoading delay={500} />}>
       <App/> 
    </Suspense>
        
);

