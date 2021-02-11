import React, { useState, useRef } from 'react';
import { FlatList, Text, View, TouchableOpacity, Image, Dimensions, ImageBackground } from 'react-native';
import styles from './style';
import COLORS from '../../styles/colors'
import { icons } from '../../utils/assets'
import MainHeader from '../../components/MainHeader';

import AppInput from '../../components/AppInput'
import Button from '../../components/Button'
import Carousel from 'react-native-snap-carousel';

const { width, height } = Dimensions.get('window');

console.log('lol');
const data = [
  {
    key: 1,
    author: 'أرجعام حصري',
    date: '11/02/2020',
    title: 'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
    time: 'قبل 45 دقيقة',
    commentcount: 45,
    image: icons.newssmallimages1
  },

  {
    key: 2,
    author: 'أرجعام حصري',
    date: '11/02/2020',
    title: 'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
    time: 'قبل 45 دقيقة',
    commentcount: 45,
    image: icons.newssmallimages2
  },
  {
    key: 3,
    author: 'أرجعام حصري',
    date: '11/02/2020',
    title: 'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
    time: 'قبل 45 دقيقة',
    commentcount: 45,
    image: icons.newssmallimages1
  },
  {
    key: 4,
    author: 'أرجعام حصري',
    date: '11/02/2020',
    title: 'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
    time: 'قبل 45 دقيقة',
    commentcount: 45,
    image: icons.newssmallimages2
  },
  {
    key: 5,
    author: 'أرجعام حصري',
    date: '11/02/2020',
    title: 'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
    time: 'قبل 45 دقيقة',
    commentcount: 45,
    image: icons.newsimage
  },

]

export default function index(props) {
  const [tab, setTab] = useState(2);
  const handleTabPress = (tabNumber) => {
    setTab(tabNumber);
  };
  const carouselRef = useRef('')
  const [activeIndex, setActivateIndex] = useState(0);
  const [carouselState, setCarouselState] = useState([
    {
      key: 1,
      author: 'أرجعام حصري',
      date: '11/02/2020',
      title: 'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
      time: 'قبل 45 دقيقة',
      commentcount: 45,
      image: icons.newsimage
    },

    {
      key: 2,
      author: 'أرجعام حصري',
      date: '11/02/2020',
      title: 'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
      time: 'قبل 45 دقيقة',
      commentcount: 45,
      image: icons.newsimage
    },
    {
      key: 3,
      author: 'أرجعام حصري',
      date: '11/02/2020',
      title: 'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
      time: 'قبل 45 دقيقة',
      commentcount: 45,
      image: icons.newsimage
    },
    {
      key: 4,
      author: 'أرجعام حصري',
      date: '11/02/2020',
      title: 'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
      time: 'قبل 45 دقيقة',
      commentcount: 45,
      image: icons.newsimage
    },
    {
      key: 5,
      author: 'أرجعام حصري',
      date: '11/02/2020',
      title: 'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
      time: 'قبل 45 دقيقة',
      commentcount: 45,
      image: icons.newsimage
    },
  ],
  );



  const _renderItem = ({ item, index }) => {
    return (
      <View
        // activeOpacity={10}
        style={styles.CarouselItem}>
        <ImageBackground source={item.image} resizeMode='stretch' style={{ width: '100%', height: '100%', alignItems: 'flex-end', }}>
          <View style={styles.CarouselInner}>
            <View style={styles.CarouselRow}>
              <Text style={{ color: COLORS.ORANGE, fontWeight: 'bold' }}>{item.author}</Text>
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
        <View style={styles.tabCont}>
          <TouchableOpacity
            style={[
              styles.tabTextCont,
              tab == 1 ? { backgroundColor: COLORS.ORANGE } : null,
            ]}
            activeOpacity={10}
            onPress={() => handleTabPress(1)}>
            <Text
              style={[
                styles.tabText,
                tab == 1 ? { color: COLORS.WHITE } : COLORS.TEXTGREY,
              ]}>
              مؤشرات السوق
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabTextCont,
              tab == 2 ? { backgroundColor: COLORS.ORANGE } : null,
            ]}
            activeOpacity={10}
            onPress={() => handleTabPress(2)}>
            <Text
              style={[
                styles.tabText,
                tab == 2 ? { color: COLORS.WHITE } : COLORS.TEXTGREY,
              ]}>
              شارك السعر
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.tabTextCont,
              tab == 3 ? { backgroundColor: COLORS.ORANGE } : null,
            ]}
            activeOpacity={10}
            onPress={() => handleTabPress(3)}>
            <Text
              style={[
                styles.tabText,
                tab == 3 ? { color: COLORS.WHITE } : COLORS.TEXTGREY,
              ]}>
              أحدث الأخبار
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.DataCont}>
          <View style={styles.RightCont}>
            <Text style={{ fontSize: width * 0.05, color: COLORS.BLACKWHITE }}>تاسي</Text>
            <Text style={{ fontSize: width * 0.08, color: COLORS.BLACKWHITE }}>7,862.23</Text>
            <Text style={{ color: COLORS.GREEN }}>(0.33%) 23.64</Text>
          </View>
          <View style={styles.LeftCont}>
            <Text style={{ fontSize: width * 0.03, color: COLORS.BLACKWHITE }}>آخر 30 يومًا</Text>
            <View style={styles.ChartCont}>
              <Image source={icons.chart} resizeMode='contain' style={{ width: '100%', height: '100%' }} />
            </View>

            <View style={styles.ChartRow}>
              <Text style={{ color: COLORS.BLACKWHITE }}>w1</Text>
              <Text style={{ color: COLORS.BLACKWHITE }}>w1</Text>
              <Text style={{ color: COLORS.BLACKWHITE }}>w1</Text>
              <Text style={{ color: COLORS.BLACKWHITE }}>w1</Text>
              <Text style={{ color: COLORS.BLACKWHITE }}>w1</Text>

            </View>
          </View>
        </View>

        <View
          style={styles.CarouselCont}>
          <Carousel
            layout={'default'}
            ref={carouselRef}
            data={carouselState}
            sliderWidth={width}
            itemWidth={width * 0.88}
            renderItem={_renderItem}
            useScrollView
            autoplay={true}
            loop={true}
            autoplayDelay={1000}
            autoplayInterval={1000}
            // onSnapToItem={(index) => setActivateIndex(index)}
            activeSlideAlignment="center"
          />
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{ width: '95%', alignSelf: 'center', }}
          style={{ marginBottom: height * 0.2, marginTop: height * 0.02 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity style={styles.FlatListItem}>
                <View style={styles.StoryImgCont}>
                  <Image
                    source={item.image}
                    style={styles.FlatListImage}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.StoryDetails}>
                  <Text style={[styles.StoryTitle, { color: COLORS.TEXTGREY, }]}>{item.date}</Text>
                  <Text style={[styles.StoryTitle, { color: COLORS.BLACKWHITE, }]}>{item.title}</Text>
                  <View style={styles.FlatlistBottomCont}>
                    <View style={styles.TimeContainer}>
                      <View style={styles.ClockCont}>
                        <Image source={icons.timewhite} style={[styles.ClockImg, { tintColor: COLORS.TEXTGREY }]} />
                      </View>
                      <Text style={{ color: COLORS.TEXTGREY }}>{item.time}</Text>
                    </View>
                    <View style={styles.FlatListStatsCont}>
                      <Text style={{ color: COLORS.TEXTGREY }}>{item.commentcount}</Text>
                      <View style={styles.ClockCont}>
                        <Image source={icons.messagewhite} style={[styles.ClockImg, { tintColor: COLORS.TEXTGREY }]} />
                      </View>
                      <View style={styles.ClockCont}>
                        <Image source={icons.likewhite} style={[styles.ClockImg, { tintColor: COLORS.TEXTGREY }]} />
                      </View>
                      <View style={styles.ClockCont}>
                        <Image source={icons.uploadwhite} style={[styles.ClockImg, { tintColor: COLORS.TEXTGREY }]} />
                      </View>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />

      </View>
    </View>
  )
}



