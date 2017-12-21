import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
const store = configureStore()

import App from './components/App'
import './scss/main.scss'

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render (
  <ReduxApp />,
  document.getElementById('root')
);
