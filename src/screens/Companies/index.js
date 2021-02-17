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
import AppInput from '../../components/AppInput';
import Button from '../../components/Button';

console.log('lol');

export default function index(props) {
  const currentMode = useColorScheme();
  const COLORS = currentMode == 'light' ? light : dark;
  return (
    <View style={styles.getSheet(COLORS).container}>
      <View style={styles.getSheet(COLORS).SecondaryContBg} />
      <View style={styles.getSheet(COLORS).InnerCont}>{/* JSX HERE */}</View>
    </View>
  );
}
