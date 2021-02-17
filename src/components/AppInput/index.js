import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

// third party
import {useColorScheme} from 'react-native-appearance';

//local import
import styles from './style';
import {icons} from '../../utils/assets';
import {dark, light} from '../../styles/colors';

function index({placeholderText, isPassword, icon, Arrow, ...props}) {
  const currentMode = useColorScheme();
  const COLORS = currentMode == 'light' ? light : dark;
  const [Focused, setFocused] = useState(false);
  return (
    <View style={[styles.getSheet(COLORS).container]}>
      {icon ? (
        <View style={styles.getSheet(COLORS).iconCont}>
          <Image
            source={icon}
            style={styles.getSheet(COLORS).icon}
            resizeMode="contain"
          />
        </View>
      ) : null}

      <View style={styles.getSheet(COLORS).textInputCont}>
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={COLORS.TEXTGREY}
          onFocus={() => setFocused(true)}
          style={styles.getSheet(COLORS).textInput}
          onBlur={() => setFocused(false)}
        />
      </View>
      {/** is password Icon start */}
      {/* {isPassword && (
        <TouchableOpacity style={styles.passwordIconCont}>
          <Image source={icons.passwordEye} style={styles.isPasswordIcon} />
        </TouchableOpacity>
      )} */}

      {/** is password Icon end */}

      {/* {Arrow && (
        <View style={styles.passwordIconCont}>
          <Image source={icons.BackArrow} style={styles.ArrowIcon} />
        </View>
      )} */}
    </View>
  );
}

export default index;
