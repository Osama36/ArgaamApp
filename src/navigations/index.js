import 'react-native-gesture-handler';
import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {useDispatch, useSelector} from 'react-redux';

// App Stack
import AppMainStack from './app-navigator';

// Auth Screens

import Login from '../screens/Login';
import Splash from '../screens/Splash';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TabNavigator" component={AppMainStack} />
      </Stack.Navigator>
    </>
  );
}

export default MainStack;
