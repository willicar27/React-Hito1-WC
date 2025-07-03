import React from "react";
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './Main.css';
import App from '../App/App';


createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
        <App /> 
        </BrowserRouter>
    </React.StrictMode>
);