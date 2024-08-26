import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import menuReducer from './reducers';

// Create the root reducer by combining all the reducers
const rootReducer = combineReducers({
  menu: menuReducer,
});

// Create the Redux store with the root reducer and the thunk middleware
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;