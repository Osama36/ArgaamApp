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
        // rightIconFired={() => alert('uploaded')}
        // LeftIconFired={() => alert('LefticonFired')}
        // LeftLikeIconFired={() => alert('LeftLikeIconFired')}
        // LeftArrowIconFired={() => alert('LeftArrowIconFired')}
        // LeftMoreIconFired={() => alert('LeftMoreIconFired')}
        text={'أرقام التنبيه'}
        navigation={props.navigation}
      />  
      <View style={styles.getSheet(COLORS).SecondaryContBg} />
      <View style={styles.getSheet(COLORS).InnerCont}>
        <View style={styles.getSheet(COLORS).middleCont}>
          <View style={styles.getSheet(COLORS).iconCont}>
            <Image
              source={icons.notification}
              resizeMode="contain"
              style={styles.getSheet(COLORS).bellIcon}
            />
          </View>  
    
          <View style={styles.getSheet(COLORS).txtCont}>
            <Text style={styles.getSheet(COLORS).txt1}>
              مليار ريال للسنة المالية حقق مصرف
            </Text>
            <Text style={styles.getSheet(COLORS).txt2}>حقق مصرف الراجحي</Text>
          </View>

          {/* <Text> as d a      s </Text> */}
          <View style={styles.getSheet(COLORS).BtnCont}>
            <Button
              BgColor={COLORS.ORANGE}
              Text="تسجيل الدخول"
              TextColor={COLORS.WHITE}
              onPress={() => props.navigation.navigate('Login')}
            />
          </View>
        </View>
        {/* dsfs s */}
      </View>
    </View>
  );
}
