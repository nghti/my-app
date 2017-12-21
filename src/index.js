import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import './scss/main.scss';
import configureStore from './store/configureStore';

const store = configureStore();

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render (
  <ReduxApp />,
  document.getElementById('root')
);
registerServiceWorker();
