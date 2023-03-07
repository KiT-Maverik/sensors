// MODULES
import React from 'react';
import ReactDOM from 'react-dom/client';
import {ThemeProvider} from "@emotion/react";
import {Global} from "@emotion/react";
import {Provider} from 'react-redux'

// RESOURCES
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from "src/store/store";

// STYLES
import {globalStyles} from "src/styles/global.styles";
import {theme} from "src/styles/theme.style";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <Global styles={globalStyles}/>
                <App/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
