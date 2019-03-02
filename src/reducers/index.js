import { combineReducers } from 'redux';
import { changeValue } from './changeValue';
import { apiCall } from './apiCall';

export const reducers = combineReducers({
  numberState: changeValue,
  dataState: apiCall,
});
