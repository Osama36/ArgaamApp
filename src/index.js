import React, {useEffect} from 'react';
import MainNavigation from './navigations';

import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './services/navigatorService';

import globleString from './constants/localizedString';

const AppIn = () => {
  const strings = globleString.strings;

  useEffect(() => {
    strings.setLanguage('en');
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default AppIn;
