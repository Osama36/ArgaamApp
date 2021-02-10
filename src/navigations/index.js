import 'react-native-gesture-handler';
import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { useDispatch, useSelector } from 'react-redux';

// App Stack
import AppMainStack from './app-navigator';

// Auth Screens

import Login from '../screens/Login';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="TabNavigator" component={AppMainStack} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </>
  );
}



export default MainStack;
