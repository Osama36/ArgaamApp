import {USER_LOGIN} from './authTypes';
import {appDefaultStore} from '../defaultStore';

const INITIAL_STATE = appDefaultStore.auth;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return {
        ...state,
        user: action.payload.userData,
        isLogin: true,
      };
    }
    default:
      return state;
  }
};
