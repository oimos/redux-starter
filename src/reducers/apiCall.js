import {
  API_GET,
} from '../constants/actionTypes';

const initialState = {
  fruits: null,
};

export const apiCall = (state = initialState, action) => {
  switch (action.type) {
    case API_GET:
      return {
        ...state,
        ...action,
      };

    default:
      return state;
  }
};
