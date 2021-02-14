import React from 'react';
import {Text, View, Image, TouchableOpacity, SafeAreaView} from 'react-native';

//! Local Import
import styles from './style';
import {icons} from '../../utils/assets';

export default function index(props) {
  return (
    // <SafeAreaView style={{backgroundColor:"#131D2F"}}>

    props.isCountry ? (
      <View style={styles.container}>
        <TouchableOpacity onPress={props.LeftIconFired}>
          <View style={styles.leftImageContainer}>
            <Image
              style={styles.leftImage}
              source={icons.Flag}
              resizeMode={'contain'}
            />
            <Image
              style={styles.leftImage2}
              source={icons.downArrow}
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
    ) : (
      [
        props.isMutipleLeftImage ? (
          <View style={styles.container}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity onPress={props.LeftMoreIconFired}>
                <View style={styles.leftMultiImageContainer}>
                  <Image
                    style={styles.rightImage}
                    source={icons.verticalmore}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={props.LeftLikeIconFired}>
                <View style={styles.leftMultiImageContainer}>
                  <Image style={styles.rightImage} source={icons.likewhite} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={props.LeftArrowIconFired}>
                <View style={styles.leftMultiImageContainer}>
                  <Image style={styles.rightImage} source={icons.BackArrow} />
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.LogoContainer}>
              <Image
                style={styles.Logo}
                source={icons.Logo}
                resizeMode={'contain'}
              />
            </View>
          </View>
        ) : (
          <Text>Nikallo</Text>
        ),
      ]
    )

    //</SafeAreaView>
  );
}
