import React, {useState, useRef} from 'react';
import {View, Image, Dimensions, ScrollView} from 'react-native';

// third party
import {useColorScheme} from 'react-native-appearance';

//local
import styles from './style';
import COLORS, {light, dark} from '../../styles/colors';
import {icons} from '../../utils/assets';
import MainHeader from '../../components/MainHeader';

// dimenstion
const {width, height} = Dimensions.get('window');

export default function index(props) {
  const [likeIcon, setLikeIcon] = useState(false);
  const currentMode = useColorScheme();
  const COLORS = currentMode == 'light' ? light : dark;

  console.log('LikeICON state ==> ', likeIcon);

  return (
    <View style={styles.getSheet(COLORS).container}>
      <MainHeader
        isCountry={false}
        isMutipleLeftImage={true}
        leftIcon={icons.Search}
        rightIcon={icons.Search}
        likeIcon={likeIcon}
        // rightIconFired={() => alert('uploaded')}
        // LeftIconFired={() => alert('LefticonFired')}
        LeftLikeIconFired={() => {
          setLikeIcon(!likeIcon);
        }}
        LeftArrowIconFired={() => props.navigation.goBack()}
        // LeftMoreIconFired={() => alert('LeftMoreIconFired')}
        // text={'news'}
        navigation={props.navigation}
      />
      <View style={styles.getSheet(COLORS).SecondaryContBg} />
      <View style={styles.getSheet(COLORS).InnerCont}>
        <ScrollView style={styles.getSheet(COLORS).scrollView}>
          <View style={styles.getSheet(COLORS).img1Container}>
            {currentMode == 'light' ? (
              <Image
                style={styles.getSheet(COLORS).img1}
                source={icons.Details01}
              />
            ) : (
              <Image
                style={styles.getSheet(COLORS).img1}
                source={icons.Details01}
              />
            )}
          </View>
          <View style={styles.getSheet(COLORS).img2Container}>
            {currentMode == 'light' ? (
              <Image
                style={styles.getSheet(COLORS).img2}
                source={icons.Details02}
              />
            ) : (
              <Image
                style={styles.getSheet(COLORS).img2}
                source={icons.DARKDetails01}
              />
            )}
          </View>
          <View style={styles.getSheet(COLORS).img3Container}>
            {currentMode == 'light' ? (
              <Image
                style={styles.getSheet(COLORS).img3}
                source={icons.Details03}
              />
            ) : (
              <Image
                style={styles.getSheet(COLORS).img3}
                source={icons.DARKDetails02}
              />
            )}
          </View>
          <View style={styles.getSheet(COLORS).img4Container}>
            {currentMode == 'light' ? (
              <Image
                style={styles.getSheet(COLORS).img4}
                source={icons.Details04}
              />
            ) : (
              <Image
                style={styles.getSheet(COLORS).img4}
                source={icons.DARKDetails03}
              />
            )}
          </View>
          <View style={styles.getSheet(COLORS).img5Container}>
            {currentMode == 'light' ? (
              <Image
                style={styles.getSheet(COLORS).img5}
                source={icons.Details08}
              />
            ) : (
              <Image
                style={styles.getSheet(COLORS).img5}
                source={icons.DARKDetails04}
              />
            )}
          </View>
          <View style={styles.getSheet(COLORS).img5Container}>
            {currentMode == 'light' ? (
              <Image
                style={styles.getSheet(COLORS).img5}
                source={icons.Details05}
              />
            ) : (
              <Image
                style={styles.getSheet(COLORS).img5}
                source={icons.DARKDetails05}
              />
            )}
          </View>
          <View style={styles.getSheet(COLORS).img5Container}>
            {currentMode == 'light' ? (
              <Image
                style={styles.getSheet(COLORS).img5}
                source={icons.Details06}
              />
            ) : (
              <Image
                style={styles.getSheet(COLORS).img5}
                source={icons.DARKDetails06}
              />
            )}
          </View>
          <View style={styles.getSheet(COLORS).img5Container}>
            {currentMode == 'light' ? (
              <Image
                style={styles.getSheet(COLORS).img5}
                source={icons.Details07}
              />
            ) : (
              <Image
                style={styles.getSheet(COLORS).img5}
                source={icons.DARKDetails07}
              />
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
