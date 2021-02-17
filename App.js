import 'react-native-gesture-handler';
import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/modules/store';
import {AppearanceProvider} from 'react-native-appearance';

import AppIn from './src';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppearanceProvider>
            <AppIn />
          </AppearanceProvider>
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
