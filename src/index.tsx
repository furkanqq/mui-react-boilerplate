import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <StyledEngineProvider injectFirst>
                <App />
            </StyledEngineProvider>
        </Provider>
    </React.StrictMode>
);
