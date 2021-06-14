import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import Reducer from "./redux/Reducer"

let store=createStore(Reducer,applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

