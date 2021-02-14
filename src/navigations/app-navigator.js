import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {icons} from '../utils/assets';
import COLORS from '../styles/colors';

// Tab Screens
import Home from '../screens/Home';
import Companies from '../screens/Companies';
import FinancialReports from '../screens/FinancialReports';
import Streamer from '../screens/Streamer';
import More from '../screens/More';

// Stack Screens
import Login from '../screens/Login';

import SafeArea from 'react-native-safe-area';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const {width, height} = Dimensions.get('window');

const bottomTabs = [
  {
    id: 5,
    name: 'More',
    barName: 'خيارات',
    component: More,
    iconActive: icons.more,
    iconInactive: icons.more,
  },
  {
    id: 4,
    name: 'Streamer',
    barName: 'Streamer',
    component: Streamer,
    iconActive: icons.streamer,
    iconInactive: icons.streamer,
  },
  {
    id: 3,
    name: 'FinancialReports',
    barName: 'FinancialReports',
    component: FinancialReports,
    iconActive: icons.financialreports,
    iconInactive: icons.financialreports,
  },
  {
    id: 2,
    name: 'Companies',
    barName: 'Companies',
    component: Companies,
    iconActive: icons.companies,
    iconInactive: icons.companies,
  },
  {
    id: 1,
    name: 'Home',
    barName: 'الرئيسية',
    component: Home,
    iconActive: icons.home,
    iconInactive: icons.home,
  },
];

const ScreenSettings = {
  tabBarCofficient: 0.09,
};

function AppTabNavigator() {
  const [bottomInsets, setBottomInsets] = useState(0);
  SafeArea.getSafeAreaInsetsForRootView().then((res) =>
    setBottomInsets(res.safeAreaInsets.bottom),
  );
  SafeArea.getSafeAreaInsetsForRootView();
  return (
    <>
      <Tab.Navigator
        initialRouteName={'Home'}
        tabBarOptions={{
          style: {
            height: height * ScreenSettings.tabBarCofficient + bottomInsets,

            backgroundColor: 'Pink',
            justifyContent: 'center',
            alignItems: 'center',

            // borderTopWidth: width * 0.0025,
            // borderLeftWidth: width * 0.001,
            // borderRightWidth: width * 0.0001,
            // borderTopLeftRadius: 15,
            // borderTopRightRadius: 15,
            // position: 'absolute',
            // overflow: 'visible',
          },
          tabStyle: {
            backgroundColor: COLORS.PRIMARY_BG,
            // borderTopLeftRadius: 15,
            // borderTopRightRadius: 15,
            //shadowOpacity: 0,
          },
        }}>
        {bottomTabs.map((value) => {
          return (
            <Tab.Screen
              name={value.name}
              component={value.component}
              options={{
                style: {backgroundColor: 'red'},
                tabBarLabel: '',
                tabBarIcon: ({focused}) => {
                  if (focused == true) {
                    return (
                      <>
                        <View
                          style={{
                            height: height * 0.15,
                            width: width * 0.2,
                            marginBottom: height * 0.045,
                            // backgroundColor: COLORS.PRIMARY_BG,
                            //backgroundColor: 'red',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              height: width * 0.12,
                              width: width * 0.12,
                              borderRadius: (width * 0.12) / 2,
                              //borderWidth: width * 0.013,
                              //borderColor: COLORS.WHITE,
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginVertical: height * 0.02,
                              backgroundColor: COLORS.ORANGE,
                            }}>
                            <Image
                              style={{
                                height: '70%',
                                width: '70%',
                                resizeMode: 'contain',
                                tintColor: COLORS.WHITE,
                              }}
                              source={value.iconActive}
                            />
                          </View>
                          <Text
                            style={{
                              fontSize: width * 0.035,
                              fontStyle: 'normal',
                              color: COLORS.ORANGE,
                              // marginBottom: height * 0.03,
                            }}>
                            {value.barName}
                          </Text>
                        </View>
                      </>
                    );
                  } else if (focused == false) {
                    return (
                      <>
                        <View
                          style={{
                            height: height * 0.15,
                            width: width * 0.2,
                            marginTop: height * 0.02,
                            // backgroundColor: COLORS.PRIMARY_BG,
                            // backgroundColor: 'red',
                            justifyContent: 'center',
                            alignItems: 'center',
                          }}>
                          <View
                            style={{
                              height: width * 0.11,
                              width: width * 0.11,
                              borderRadius: (width * 0.11) / 2,
                              //borderWidth: width * 0.013,
                              //borderColor: COLORS.WHITE,
                              justifyContent: 'center',
                              alignItems: 'center',
                              marginVertical: height * 0.02,
                              backgroundColor: '#F5F5F5',
                            }}>
                            <Image
                              style={{
                                height: '70%',
                                width: '70%',
                                resizeMode: 'contain',
                                tintColor: '#929497',
                              }}
                              source={value.iconActive}
                            />
                          </View>
                          {/* <Text
                            style={{
                              fontSize: width * 0.035,
                              fontStyle: 'normal',
                              color: COLORS.ORANGE,
                              // marginBottom: height * 0.03,
                            }}>
                            {value.barName}
                          </Text> */}
                        </View>
                      </>
                    );
                  }
                },
              }}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
}

function AppMainStack() {
  return (
    <>
      <Stack.Navigator
        initialRouteName="AppStackTabs"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="AppStackTabs" component={AppTabNavigator} />
      </Stack.Navigator>
    </>
  );
}

export default AppMainStack;
