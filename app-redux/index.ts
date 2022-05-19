import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import reducer, { initState } from './reducers';
import saga from './sagas';

export function makeStore() {
  const middleware = createSagaMiddleware();
  const store = createStore(reducer, initState, applyMiddleware(middleware));
  middleware.run(saga);
  return store;
}