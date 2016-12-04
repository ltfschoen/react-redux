import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  debugger;
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}
