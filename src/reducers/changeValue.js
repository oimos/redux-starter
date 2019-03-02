import {
  SET_DEFAULT,
  INCREMENT,
  DECREMENT,
} from '../constants/actionTypes';

const initialState = {
  amount: 0,
};

export const changeValue = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_DEFAULT:
      state.amount = 0;
      return { ...state };

    case INCREMENT:
      state.amount += action.count;
      return { ...state };

    case DECREMENT:
      state.amount += action.count;
      return { ...state };

    default:
      return state;
  }
};
