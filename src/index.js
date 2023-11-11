import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {HashRouter} from 'react-router-dom';

const root = document.getElementById('root');

const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<App/>);
