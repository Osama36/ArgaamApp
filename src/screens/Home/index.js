import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import COLORS from '../../styles/colors'
import { icons } from '../../utils/assets'
import MainHeader from '../../components/MainHeader';

import AppInput from '../../components/AppInput'
import Button from '../../components/Button'

console.log('lol');

export default function index(props) {
  const [tab, setTab] = useState(2);
  const handleTabPress = (tabNumber) => {
    setTab(tabNumber);
  };
  return (

    <View style={styles.container}>
      <MainHeader
        leftIcon={icons.Search}
        rightIcon={icons.Search}
        rightIconFired={() => alert('uploaded')}
        LeftIconFired={() => props.navigation.goBack()}
        // text={'news'}
        navigation={props.navigation}
      />

      <View style={styles.SecondaryContBg} />
      <View style={styles.InnerCont}>
        <View style={styles.tabCont}>
          <TouchableOpacity
            style={[
              styles.tabTextCont,
              tab == 1 ? { backgroundColor: COLORS.ORANGE } : null,
            ]}
            activeOpacity={10}
            onPress={() => handleTabPress(1)}>
            <Text
              style={[
                styles.tabText,
                tab == 1 ? { color: COLORS.WHITE } : COLORS.TEXTGREY,
              ]}>
              مؤشرات السوق
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabTextCont,
              tab == 2 ? { backgroundColor: COLORS.ORANGE } : null,
            ]}
            activeOpacity={10}
            onPress={() => handleTabPress(2)}>
            <Text
              style={[
                styles.tabText,
                tab == 2 ? { color: COLORS.WHITE } : COLORS.TEXTGREY,
              ]}>
              شارك السعر
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabTextCont,
              tab == 3 ? { backgroundColor: COLORS.ORANGE } : null,
            ]}
            activeOpacity={10}
            onPress={() => handleTabPress(3)}>
            <Text
              style={[
                styles.tabText,
                tab == 3 ? { color: COLORS.WHITE } : COLORS.TEXTGREY,
              ]}>
              أحدث الأخبار
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>


  )
}



