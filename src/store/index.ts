import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import * as logger from "redux-logger";
import * as thunk from 'redux-thunk';

import rootReducer from '../reducers/rootReducer.ts';
const middleware:any = [thunk, logger];

const store: any = createStore(
  combineReducers(rootReducer),
  compose(applyMiddleware(middleware))
);
export default store;

/**
 * Register async loaded reducers in store and replace
 * current state-reducer with the a new reducer
 *
 * @export
 * @param {Object} store - the store object
 * @param {Object} asyncReducer - async reducer modules
 */
store.asyncReducers = {};

function replaceReducers(defaultReducers:any):void {
  const merged: any = Object.assign({}, defaultReducers, store.asyncReducers);
  const combined = combineReducers(merged);
  store.replaceReducer(combined);
}

export function injectAsyncReducers(asyncReducers:any) {
  const injectReducers: any = Object.keys(asyncReducers).reduce((all, item) => {
    if (store.asyncReducers[item]) {
      delete all[item];
    }

    return all;
  }, asyncReducers);

  store.asyncReducers = Object.assign({}, store.asyncReducers, injectReducers);
  replaceReducers(rootReducer);
}

// hot reloading for reducers
if (module.hot) {
  module.hot.accept('../reducers/rootReducer', () => {
    const nextReducer: any = require('../reducers/rootReducer').default; // eslint-disable-line
    replaceReducers(nextReducer);
  });
}