import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import styles from './style';
import COLORS from '../../styles/colors'
import { icons } from '../../utils/assets'
import AppInput from '../../components/AppInput'
import Button from '../../components/Button'

console.log('lol');

export default function index(props) {
  return (

    <View style={styles.container}>
      <View style={styles.SecondaryContBg} />
      <View style={styles.InnerCont}>
        {/* JSX HERE */}
        <TouchableOpacity style={styles.BackBtnCont}>
          <Image source={icons.BackArrow} style={styles.BackBtn} resizeMode='contain' />
        </TouchableOpacity>
        <View style={styles.LogoCont}>
          <Image source={icons.Logo} style={styles.BackBtn} resizeMode='contain' />
        </View>
        <Text style={styles.Heading}>
          أهلابك!
        </Text>
        <Text style={styles.HeadingDesc}>
          أدخل التفاصيل الخاصة بك للبدء
        </Text>

        <AppInput
          icon={icons.email}
          placeholderText="البريد الإلكتروني"
        />
        <AppInput
          icon={icons.password}
          placeholderText="كلمه السر"
        />
        <View style={styles.CheckCont}>
          <Text style={styles.CheckText}>تذكر</Text>
          <TouchableOpacity style={styles.Check} />
        </View>
        <View style={styles.BtnCont}>
          <Button
            BgColor={COLORS.ORANGE}
            Text="تسجيل الدخول"
            TextColor={COLORS.WHITE}
            onPress={() => props.navigation.navigate('AppNavigator')}
          />
        </View>
        <View style={styles.Seprator}>
          <View style={styles.Line} />
          <Text style={styles.OrText}>أو</Text>
          <View style={styles.Line} />
        </View>
        <View style={styles.SocialCont}>
          <TouchableOpacity style={styles.SocialBtn}>
            <Image source={icons.Gmail} style={styles.SocialLogo} resizeMode='contain' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.SocialBtn}>
            <Image source={icons.Apple} style={styles.SocialLogo} resizeMode='contain' />
          </TouchableOpacity>
          <TouchableOpacity style={styles.SocialBtn}>
            <Image source={icons.Facebook} style={styles.SocialLogo} resizeMode='contain' />
          </TouchableOpacity>
        </View>
        <View style={styles.BottomCont}>
          <TouchableOpacity>
            <Text style={styles.BottomContText}>نسيت كلمة السر؟</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.BottomContText}>نسيت كلمة السر؟</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}



