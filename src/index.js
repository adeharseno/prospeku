/* eslint-disable react/no-render-return-value */
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { render } from 'react-snapshot';

import App from './App';
import './styles/style.less';
import * as serviceWorker from './serviceWorker';

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

if (module.hot) {
    module.hot.accept(['./App'], () => render(App));
}

if (process.env.NODE_ENV === 'production') {
    serviceWorker.register();
}