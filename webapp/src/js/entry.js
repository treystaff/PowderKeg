import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/App';
import reducers from './reducers/reducers';

$(document).ready(function () {
  const store = createStore(reducers);

  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('pwdkeg')
  );
});
