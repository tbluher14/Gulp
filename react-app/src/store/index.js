import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import businessReducer from './business';
import reviewReducer from './review';
import usersReducer from './users';
import menuItemsReducer from './menuItem';
import queryBusinessReducer from './querybusiness';

const rootReducer = combineReducers({
  session,
  business: businessReducer,
  review: reviewReducer,
  users: usersReducer,
  menuItems: menuItemsReducer,
  queryBusiness: queryBusinessReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
