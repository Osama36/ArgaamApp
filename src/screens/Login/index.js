import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';

// third party
import {useColorScheme} from 'react-native-appearance';

//local
import styles from './style';
import {light, dark} from '../../styles/colors';
import {icons} from '../../utils/assets';
import AppInput from '../../components/AppInput';
import Button from '../../components/Button';

export default function index(props) {
  const currentMode = useColorScheme();
  const COLORS = currentMode == 'light' ? light : dark;

  const bgColor = currentMode == 'light' ? '#ffffff' : '#000000';
  const barStyle = currentMode == 'light' ? 'dark-content' : 'light-content';

  return (
    <View style={styles.getSheet(COLORS).container}>
      <StatusBar barStyle={barStyle} backgroundColor={bgColor} />
      <View style={styles.getSheet(COLORS).SecondaryContBg} />
      <View style={styles.getSheet(COLORS).InnerCont}>
        {/* JSX HERE */}
        <TouchableOpacity style={styles.getSheet(COLORS).BackBtnCont}>
          <Image
            source={icons.BackArrow}
            style={styles.getSheet(COLORS).BackBtn}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.getSheet(COLORS).LogoCont}>
          <Image
            source={icons.Logo}
            style={styles.getSheet(COLORS).BackBtn}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.getSheet(COLORS).Heading}>أهلابك!</Text>
        <Text style={styles.getSheet(COLORS).HeadingDesc}>
          أدخل التفاصيل الخاصة بك للبدء
        </Text>

        <AppInput icon={icons.email} placeholderText="البريد الإلكتروني" />
        <AppInput icon={icons.password} placeholderText="كلمه السر" />
        <View style={styles.getSheet(COLORS).CheckCont}>
          <Text style={styles.getSheet(COLORS).CheckText}>تذكر</Text>
          <TouchableOpacity style={styles.getSheet(COLORS).Check} />
        </View>
        <View style={styles.getSheet(COLORS).BtnCont}>
          <Button
            BgColor={COLORS.ORANGE}
            Text="تسجيل الدخول"
            TextColor={COLORS.WHITE}
            onPress={() => props.navigation.navigate('TabNavigator')}
          />
        </View>
        <View style={styles.getSheet(COLORS).Seprator}>
          <View style={styles.getSheet(COLORS).Line} />
          <Text style={styles.getSheet(COLORS).OrText}>أو</Text>
          <View style={styles.getSheet(COLORS).Line} />
        </View>
        <View style={styles.getSheet(COLORS).SocialCont}>
          <TouchableOpacity style={styles.getSheet(COLORS).SocialBtn}>
            <Image
              source={icons.Gmail}
              style={styles.getSheet(COLORS).SocialLogo}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.getSheet(COLORS).SocialBtn}>
            <Image
              source={icons.Apple}
              style={styles.getSheet(COLORS).SocialLogo}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.getSheet(COLORS).SocialBtn}>
            <Image
              source={icons.Facebook}
              style={styles.getSheet(COLORS).SocialLogo}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <View style={styles.getSheet(COLORS).BottomCont}>
          <TouchableOpacity>
            <Text style={styles.getSheet(COLORS).BottomContText}>
              نسيت كلمة السر؟
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.getSheet(COLORS).BottomContText}>
              نسيت كلمة السر؟
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
