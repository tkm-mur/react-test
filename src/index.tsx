import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import reducers from './reducers'
import 'semantic-ui-css/semantic.min.css'
import App from './App';

const store = createStore(reducers, composeWithDevTools(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));
