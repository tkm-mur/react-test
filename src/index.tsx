import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducer'
import rootSaga from './sagas/github'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import 'semantic-ui-css/semantic.min.css'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)

sagaMiddleware.run(rootSaga)
