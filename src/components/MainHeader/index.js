import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';

// third party
import {useColorScheme} from 'react-native-appearance';

//! Local Import
import styles from './style';
import {icons} from '../../utils/assets';
import {dark, light} from '../../styles/colors';

const {width, height} = Dimensions.get('window');

export default function index(props) {
  const currentMode = useColorScheme();
  const COLORS = currentMode == 'light' ? light : dark;

  return (
    // <SafeAreaView style={{backgroundColor:"#131D2F"}}>

    props.isCountry ? (
      <View style={[styles.getSheet(COLORS).container]}>
        <TouchableOpacity onPress={props.LeftIconFired}>
          <View style={styles.getSheet(COLORS).leftImageContainer}>
            <Image
              style={styles.getSheet(COLORS).leftImage}
              source={icons.Flag}
              resizeMode={'contain'}
            />
            <Image
              style={styles.getSheet(COLORS).leftImage2}
              source={icons.downArrow}
              resizeMode={'contain'}
            />
          </View>
        </TouchableOpacity>

        <View style={[styles.getSheet(COLORS).LogoContainer]}>
          <Image
            style={styles.getSheet(COLORS).Logo}
            source={icons.Logo}
            resizeMode={'contain'}
          />
        </View>
        <TouchableOpacity onPress={props.rightIconFired}>
          <View style={styles.getSheet(COLORS).rightImageContainer}>
            <Image
              style={styles.getSheet(COLORS).rightImage}
              source={props.rightIcon}
              resizeMode={'contain'}
            />
          </View>
        </TouchableOpacity>
      </View>
    ) : (
      [
        props.isMutipleLeftImage ? (
          <View style={styles.getSheet(COLORS).container}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={props.LeftMoreIconFired}>
                <View style={styles.getSheet(COLORS).leftMultiImageContainer}>
                  <Image
                    style={styles.getSheet(COLORS).rightImage}
                    source={icons.verticalmore}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={props.LeftLikeIconFired}>
                <View style={styles.getSheet(COLORS).leftMultiImageContainer}>
                  <Image
                    style={styles.getSheet(COLORS).rightImage}
                    source={icons.likewhite}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={props.LeftArrowIconFired}>
                <View style={styles.getSheet(COLORS).leftMultiImageContainer}>
                  <Image
                    style={styles.getSheet(COLORS).rightImage}
                    source={icons.BackArrow}
                  />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.getSheet(COLORS).LogoContainer}>
              <Image
                style={styles.getSheet(COLORS).Logo}
                source={icons.Logo}
                resizeMode={'contain'}
              />
            </View>
          </View>
        ) : (
          [
            props.isTextHeader ? (
              <View
                style={[
                  styles.getSheet(COLORS).container,
                  {justifyContent: 'flex-end'},
                ]}>
                {/* <TouchableOpacity onPress={props.LeftIconFired}>
                  <View style={styles.getSheet(COLORS).leftImageContainer}>
                    <Image
                      style={styles.getSheet(COLORS).leftImage}
                      source={icons.Flag}
                      resizeMode={'contain'}
                    />
                    <Image
                      style={styles.getSheet(COLORS).leftImage2}
                      source={icons.downArrow}
                      resizeMode={'contain'}
                    />
                  </View>
                </TouchableOpacity> */}

                <View
                  style={[
                    styles.getSheet(COLORS).LogoContainer,
                    {marginHorizontal: width * 0.17},
                  ]}>
                  <Text
                    style={{
                      alignSelf: 'center',
                      fontWeight: 'bold',
                      fontSize: width * 0.065,
                    }}>
                    {props.text}
                  </Text>
                </View>
                <TouchableOpacity onPress={props.rightIconFired}>
                  <View style={styles.getSheet(COLORS).rightImageContainer}>
                    <Image
                      style={styles.getSheet(COLORS).rightImage}
                      source={props.rightIcon}
                      resizeMode={'contain'}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            ) : (
              <Text>Nikallp</Text>
            ),
          ]
        ),
      ]
    )

    //</SafeAreaView>
  );
}
