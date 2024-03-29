import { reducer as notifications } from 'modules/notification';
import { reducer as firebase } from 'react-redux-firebase';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import locationReducer from './location';

export function makeRootReducer(asyncReducers) {
  return combineReducers({
    // Add sync reducers here
    firebase,
    form,
    notifications,
    location: locationReducer,
    ...asyncReducers,
  });
}

export function injectReducer(store, { key, reducer }) {
  store.asyncReducers[key] = reducer; // eslint-disable-line no-param-reassign
  store.replaceReducer(makeRootReducer(store.asyncReducers));
}

export default makeRootReducer;
