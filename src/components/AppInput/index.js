import React,{useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';

//local import
import styles from './style';
import {icons} from '../../utils/assets';
import COLORS from '../../styles/colors';

function index({placeholderText, isPassword, icon, Arrow, ...props}) {
  const [Focused, setFocused] = useState(false);
  return (
    <View style={[styles.container]}>
      {icon ? (
        <View style={styles.iconCont}>
          <Image source={icon} style={styles.icon} resizeMode="contain" />
        </View>
      ) : (
        null
      )}

      <View style={styles.textInputCont}>
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={'#929497'}
          onFocus={()=>setFocused(true)}
          style={styles.textInput}
          onBlur={()=>setFocused(false)}
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
