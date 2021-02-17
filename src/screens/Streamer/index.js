import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';

// third party
import {useColorScheme} from 'react-native-appearance';

//local
import styles from './style';
import {light, dark} from '../../styles/colors';
import {icons} from '../../utils/assets';
import MainHeader from '../../components/MainHeader';
console.log('lol');

export default function index(props) {
  const currentMode = useColorScheme();
  const COLORS = currentMode == 'light' ? light : dark;
  return (
    <View style={styles.getSheet(COLORS).container}>
      <MainHeader
        isCountry={false}
        isMutipleLeftImage={false}
        isTextHeader={true}
        leftIcon={icons.Search}
        rightIcon={icons.Search}
        rightIconFired={() => alert('uploaded')}
        LeftIconFired={() => alert('LefticonFired')}
        LeftLikeIconFired={() => alert('LeftLikeIconFired')}
        LeftArrowIconFired={() => alert('LeftArrowIconFired')}
        LeftMoreIconFired={() => alert('LeftMoreIconFired')}
        text={'نبز ارقم'}
        navigation={props.navigation}
      />
      <View style={styles.getSheet(COLORS).SecondaryContBg} />
      <View style={styles.getSheet(COLORS).InnerCont}>{/* JSX HERE */}</View>
    </View>
  );
}
