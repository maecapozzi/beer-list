import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import beerApp from './reducers'
import App from './components/App/App'
import { addBeer } from './actions'


let store = createStore(beerApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
