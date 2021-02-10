import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {AsyncStorage} from 'react-native';
import reducers from './rootReducer';
import {persistStore, persistReducer} from 'redux-persist';
import {createLogger} from 'redux-logger';

const persistConfig = {
  timeout: 10000,
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
  blacklist: [],
};

const initialState = {};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  initialState,
  applyMiddleware(thunk, createLogger()),
);

const persistor = persistStore(store);

export {store, persistor};
