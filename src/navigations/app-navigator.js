import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ScreenSettings} from '../constants/configs';
import {icons} from '../utils/assets';
import {COLORS} from '../styles/colors';

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
    id: 1,
    name: 'Home',
    barName: 'الرئيسية',
    component: Home,
    iconActive: icons.home,
    iconInactive: icons.home,
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
    id: 3,
    name: 'FinancialReports',
    barName: 'FinancialReports',
    component: FinancialReports,
    iconActive: icons.financialreports,
    iconInactive: icons.financialreports,
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
    id: 5,
    name: 'More',
    barName: 'خيارات',
    component: More,
    iconActive: icons.more,
    iconInactive: icons.more,
  },
];

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
            backgroundColor: COLORS.PRIMARY_BG,
            justifyContent: 'center',
            alignItems: 'center',
            shadowOpacity:0,
            shadowColor:'red',
          },
          tabStyle: {
            backgroundColor:COLORS.PRIMARY_BG,
            shadowOpacity:0,
          }
        }}>
        {bottomTabs.map((value) => {
          return (
            <Tab.Screen
              name={value.name}
              component={value.component}

              options={{
                style:{backgroundColor:'red'},
                tabBarLabel: '',
                tabBarIcon: ({focused}) => {
                  if (focused == true) {
                   
                      return (
                        <>
                          <View
                            style={{
                              height: height * 0.065,
                              width: width * 0.2,
                              backgroundColor: COLORS.PRIMARY_BG,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <View
                              style={{
                                height: '100%',
                                width: width * 0.2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                // backgroundColor: 'maroon',
                              }}>
                              <Image
                                style={{
                                  height: '55%',
                                  width: '60%',
                                  resizeMode: 'contain',
                                  marginTop: height * 0.02,
                                }}
                                source={value.iconActive}
                              />
                            </View>
                            {/* <Text
                              style={{
                                fontSize: width * 0.028,
                                fontStyle: 'normal',
                                color: COLORS.GREEN,
                                marginBottom: height * 0.01,
                              }}>
                              {value.barName}
                            </Text> */}
                          </View>
                        </>
                      );
                   
                  } else if (focused == false) {
                   
                      return (
                        <>
                          <View
                            style={{
                              height: height * 0.065,
                              width: width * 0.2,
                              backgroundColor: COLORS.PRIMARY_BG,
                              // backgroundColor: 'lightblue',
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <View
                              style={{
                                height: '100%',
                                width: width * 0.2,
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}>
                              <Image
                                style={{
                                  height: '55%',
                                  width: '60%',
                                  resizeMode: 'contain',
                                  marginTop: height * 0.02,
                                }}
                                source={value.iconInactive}
                              />
                            </View>
                            {/* <Text
                              style={{
                                fontSize: width * 0.028,
                                fontStyle: 'normal',
                                color: '#919191',
                                marginBottom: height * 0.01,
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
