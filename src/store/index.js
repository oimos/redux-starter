import { createStore, applyMiddleware } from 'redux';
import { middleware } from '../middleware';
import { reducers } from '../reducers';

export const store = createStore(
  reducers,
  applyMiddleware(middleware),
);
