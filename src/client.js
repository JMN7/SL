import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import App from './containers/App';

// Read the state sent with the template
const state = window.__STATE__;

// delete the state from global window object
delete window.__STATE__;

// reproduce the store used to render the page on server
const store = configureStore(state);


render(
  <Provider store={store} >
     <App />
  </Provider>,
  document.querySelector('#app')
)
