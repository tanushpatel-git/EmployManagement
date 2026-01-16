import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import store from "./ReduxManagement/Store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </StrictMode>
)