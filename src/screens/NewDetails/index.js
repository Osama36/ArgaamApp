import React, {useState, useRef} from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  ScrollView,
} from 'react-native';
import styles from './style';
import COLORS from '../../styles/colors';
import {icons} from '../../utils/assets';
import MainHeader from '../../components/MainHeader';

const {width, height} = Dimensions.get('window');

export default function index(props) {
  return (
    <View style={styles.container}>
      <MainHeader
        isCountry={false}
        isMutipleLeftImage={true}
        leftIcon={icons.Search}
        rightIcon={icons.Search}
        rightIconFired={() => alert('uploaded')}
        LeftIconFired={() => alert('LefticonFired')}
        LeftLikeIconFired={() => alert('LeftLikeIconFired')}
        LeftArrowIconFired={() => alert('LeftArrowIconFired')}
        LeftMoreIconFired={() => alert('LeftMoreIconFired')}
        // text={'news'}
        navigation={props.navigation}
      />
      <View style={styles.SecondaryContBg} />
      <View style={styles.InnerCont}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.img1Container}>
            <Image style={styles.img1} source={icons.Details01} />
          </View>
          <View style={styles.img2Container}>
            <Image style={styles.img2} source={icons.Details02} />
          </View>
          <View style={styles.img3Container}>
            <Image style={styles.img3} source={icons.Details03} />
          </View>
          <View style={styles.img4Container}>
            <Image style={styles.img4} source={icons.Details04} />
          </View>
          <View style={styles.img5Container}>
            <Image style={styles.img5} source={icons.Details08} />
          </View>
          <View style={styles.img5Container}>
            <Image style={styles.img5} source={icons.Details05} />
          </View>
          <View style={styles.img5Container}>
            <Image style={styles.img5} source={icons.Details06} />
          </View>
          <View style={styles.img5Container}>
            <Image style={styles.img5} source={icons.Details07} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
