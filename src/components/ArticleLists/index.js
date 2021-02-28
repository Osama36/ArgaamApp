import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {useColorScheme} from 'react-native-appearance';

//local
import {icons} from '../../utils/assets';
import styles from './style';
import {light, dark} from '../../styles/colors';

function index(props) {
  const currentMode = useColorScheme();
  const COLORS = currentMode == 'light' ? light : dark;
  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('NewDetails')}
      style={styles.getSheet(COLORS).FlatListItem}>
      <View style={styles.getSheet(COLORS).StoryImgCont}>
        <Image
          source={props.item.image}
          style={styles.getSheet(COLORS).FlatListImage}
          resizeMode="cover"
        />
      </View>
      <View style={styles.getSheet(COLORS).StoryDetails}>
        <Text
          style={[
            styles.getSheet(COLORS).StoryTitle,
            {color: COLORS.TEXTGREY},
          ]}>
          {props.item.date}
        </Text>
        <Text
          style={[
            styles.getSheet(COLORS).StoryTitle,
            {color: COLORS.BLACKWHITE},
          ]}>
          {props.item.title}
        </Text>
        <View style={styles.getSheet(COLORS).FlatlistBottomCont}>
          <View style={styles.getSheet(COLORS).TimeContainer}>
            <View style={styles.getSheet(COLORS).ClockCont}>
              <Image
                source={icons.timewhite}
                style={[
                  styles.getSheet(COLORS).ClockImg2,
                  {tintColor: COLORS.TEXTGREY},
                ]}
              />
            </View>
            <Text style={{color: COLORS.TEXTGREY}}>{props.item.time}</Text>
          </View>
          <View style={styles.getSheet(COLORS).FlatListStatsCont}>
            <Text style={{color: COLORS.TEXTGREY}}>
              {props.item.commentcount}
            </Text>
            <View style={styles.getSheet(COLORS).ClockCont}>
              <Image
                source={icons.messagewhite}
                style={[
                  styles.getSheet(COLORS).ClockImg1,
                  {tintColor: COLORS.TEXTGREY},
                ]}
              />
            </View>
            <View style={styles.getSheet(COLORS).ClockCont}>
              <Image
                source={icons.likewhite}
                style={[
                  styles.getSheet(COLORS).ClockImg1,
                  {tintColor: COLORS.TEXTGREY},
                ]}
              />
            </View>
            <View style={styles.getSheet(COLORS).ClockCont}>
              <Image
                source={icons.uploadwhite}
                style={[
                  styles.getSheet(COLORS).ClockImg1,
                  {tintColor: COLORS.TEXTGREY},
                ]}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default index;
