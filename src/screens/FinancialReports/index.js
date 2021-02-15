import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import styles from './style';
import COLORS from '../../styles/colors';
import {icons} from '../../utils/assets';

export default function index(props) {
  return (
    <View style={styles.container}>
      <View style={styles.SecondaryContBg} />
      <View style={styles.InnerCont}>{/* JSX HERE */}</View>
    </View>
  );
}
