import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers'
import rootSaga from './sagas/index'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const sagaMidleware = createSagaMiddleware()
const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMidleware)))

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)

sagaMidleware.run(rootSaga)
