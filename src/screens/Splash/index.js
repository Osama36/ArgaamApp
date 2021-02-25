import React, {useEffect} from 'react';
import {View, StatusBar, ImageBackground, Image} from 'react-native';

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

  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Login');
    }, 3000);
  }, []);
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#F58026" />
      <View style={{flex: 1}}>
        <View style={styles.getSheet(COLORS).container}>
          <Image
            resizeMode={'contain'}
            source={icons.argaamLogo}
            style={styles.getSheet(COLORS).image}
          />
        </View>
      </View>
    </>
  );
}
