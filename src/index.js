// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import Sagas from './sagas';
import { rootReducer } from './root-reducer';


const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(
  rootReducer, enhancer
)
sagaMiddleware.run(Sagas);

ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>
  ,document.getElementById('root'));