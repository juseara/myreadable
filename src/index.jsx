import React    from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { applyMiddleware, createStore } from 'redux'

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'

import App from './main/app'
import reducers from './main/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducers,
    composeEnhancers(
      applyMiddleware(multi, thunk, promise)
    )
  )


ReactDOM.render(
    <Provider store={store} >
        <BrowserRouter><App /></BrowserRouter>
    </Provider>,
    document.getElementById('app'))