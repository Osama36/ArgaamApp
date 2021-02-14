import React, { useState, useRef } from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import styles from './style';
import COLORS from '../../styles/colors';
import { icons } from '../../utils/assets';
import MainHeader from '../../components/MainHeader';

const { width, height } = Dimensions.get('window');

console.log('lol');
const data = [
  {
    key: 1,
    icon: icons.flagicon,
    text: 'الأسواق',
  },
  {
    key: 2,
    icon: icons.bulborange,
    text: 'ارجام البصيرة',
  },
  {
    key: 3,
    icon: icons.chartorange,
    text: 'مؤشرات السوق',
  },
  {
    key: 4,
    icon: icons.calendarorange,
    text: 'الأحداث',
  },
  {
    key: 5,
    icon: icons.heartorange,
    text: 'المفضلة',
  },
  {
    key: 6,
    icon: icons.eyeorange,
    text: 'الأكثر قراءة',
  },
  {
    key: 7,
    icon: icons.settingorange,
    text: 'ضبط',
  },
  {
    key: 8,
    icon: icons.companiesorange,
    text: 'معلومات عنا',
  },
  {
    key: 9,
    icon: icons.userorange,
    text: 'اتصل بنا',
  },
];

export default function index(props) {
  const _renderItem = ({ item, index }) => {
    return (
      <View
        // activeOpacity={10}
        style={styles.CarouselItem}>
        <ImageBackground
          source={item.image}
          resizeMode="stretch"
          style={{ width: '100%', height: '100%', alignItems: 'flex-end' }}>
          <View style={styles.CarouselInner}>
            <View style={styles.CarouselRow}>
              <Text style={{ color: COLORS.ORANGE, fontWeight: 'bold' }}>
                {item.author}
              </Text>
              <View style={styles.SmallSeperator} />
              <Text style={{ color: COLORS.WHITE }}>{item.date}</Text>
            </View>
            <Text style={styles.CarouselTitle}>{item.title}</Text>
            <View style={styles.CarouselBottomRow}>
              <View style={styles.TimeContainer}>
                <View style={styles.ClockCont}>
                  <Image source={icons.timewhite} style={styles.ClockImg} />
                </View>
                <Text style={{ color: COLORS.WHITE }}>{item.time}</Text>
              </View>
              <View style={styles.StatsCont}>
                <Text style={{ color: COLORS.WHITE }}>{item.commentcount}</Text>
                <View style={styles.ClockCont}>
                  <Image source={icons.messagewhite} style={styles.ClockImg} />
                </View>
                <View style={styles.ClockCont}>
                  <Image source={icons.likewhite} style={styles.ClockImg} />
                </View>
                <View style={styles.ClockCont}>
                  <Image source={icons.uploadwhite} style={styles.ClockImg} />
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
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
        <View style={styles.DataCont}>
          <View style={styles.RightCont}>
            <View style={styles.UserPic}>
              <Image
                source={icons.User}
                resizeMode="contain"
                style={{ width: '100%', height: '100%' }}
              />
            </View>
            <View style={styles.UserDetailsCont}>
              <Text style={styles.UserName}>محمد عمير</Text>
              <Text style={styles.UserDesc}>عرض الصفحة الشخصية</Text>
            </View>
          </View>
          <View style={styles.LeftCont}>
            <View style={styles.UserPic}>
              <Image
                source={icons.Amount}
                resizeMode="contain"
                style={{ width: '70%', height: '70%' }}
              />
            </View>
            <View style={styles.UserDetailsCont}>
              <Text style={styles.AmountLabel}>الرصيد الحالي</Text>
              <Text style={styles.Amount}>20.25</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{
            width: '95%',
            alignSelf: 'center',
            
            paddingBottom: height * 0.2
          }}
          style={{ marginTop: height * 0.02 }}
          renderItem={({ item }) => {
            return (
              <View
                style={styles.MenuRow}>
                <View
                  style={styles.MenuIconCont}>
                  <Image
                    source={item.icon}
                    resizeMode="contain"
                    style={{ width: '50%', height: '50%' }}
                  />
                </View>
                <View style={{ height: '50%', width: '60%' }}>
                  <Text style={styles.MenuLabel}>{item.text}</Text>
                </View>
                <View style={styles.MenuIconCont}>
                  <Image
                    source={icons.BackArrow}
                    resizeMode="contain"
                    style={styles.ArrowIcon}
                  />
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
