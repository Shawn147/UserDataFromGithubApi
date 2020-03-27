import * as types from '../types';
const initialState = {
  // isLoading: false,
  inputVal: '',
  name: 'Name',
  username: 'Username',
  followers: 0,
  following: 0,
  image: null,
};
export const userReducers = (state = initialState, action) => {
  // console.log('action', action);
  switch (action.type) {
    case types.USERNAME:
      return {
        ...state,
        // isLoading: true,
        username: action.payload,
      };
    case types.INPUT_VAL:
      return {
        ...state,
        // isLoading: true,
        inputVal: action.payload,
      };
    case types.NAME:
      return {
        ...state,
        // isLoading: true,
        name: action.payload,
      };
    case types.FOLLOWERS:
      return {
        ...state,
        // isLoading: true,
        followers: action.payload,
      };
    case types.FOLLOWING:
      return {
        ...state,
        // isLoading: true,
        following: action.payload,
      };
    case types.IMAGE:
      return {
        ...state,
        // isLoading: true,
        image: action.payload,
      };
    default:
      return state;
  }
};
