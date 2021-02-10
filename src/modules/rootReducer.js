import {combineReducers} from 'redux';
import AuthReducer from './auth/authReducer';
import {RESET_STORE} from './auth/authTypes';
import {appDefaultStore} from './defaultStore';

const appReducer = combineReducers({
  auth: AuthReducer,
});

export default function rootReducer(state, action) {
  let finalState = appReducer(state, action);
  if (action.type === RESET_STORE) {
    finalState = appDefaultStore;
  }
  return finalState;
}
