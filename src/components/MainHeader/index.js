import React from 'react';
import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

//! Local Import
import styles from './style';
import { icons } from '../../utils/assets';

export default function index(props) {
  return (
    // <SafeAreaView style={{backgroundColor:"#131D2F"}}>
    <View style={styles.container}>
      <TouchableOpacity onPress={props.LeftIconFired}>
        <View style={styles.leftImageContainer}>
          <Image
            style={styles.leftImage}
            source={props.leftIcon}
            resizeMode={'contain'}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.LogoContainer}>
        <Image
          style={styles.Logo}
          source={icons.Logo}
          resizeMode={'contain'}
        />
      </View>
      <TouchableOpacity onPress={props.rightIconFired}>
        <View style={styles.rightImageContainer}>
          <Image
            style={styles.rightImage}
            source={props.rightIcon}
            resizeMode={'contain'}
          />
        </View>
      </TouchableOpacity>
    </View>
    // </SafeAreaView>
  );
}
