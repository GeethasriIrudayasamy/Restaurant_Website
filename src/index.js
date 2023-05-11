import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import ScrollToTop from "./Helpers/ScrollToTop";
import store from "./Store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <React.StrictMode>
                <ScrollToTop />
                <App />
            </React.StrictMode>
        </BrowserRouter>
    </Provider>
);
