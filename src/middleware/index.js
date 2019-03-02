import { fetchApi } from '../utils/fetchApi';

export const middleware = store => next => (action) => {
  if (action.url === '/fruits') {
    return fetchApi(action.url, next, action, 'fruits');
  } else {
    return next(action);
  }
};
