import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { requestPeople } from './reducers';


export default function configureStore(preloadedState) {

  return createStore(requestPeople, preloadedState, applyMiddleware(thunkMiddleware));
}
