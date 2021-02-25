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
  StatusBar,
} from 'react-native';

// third party
import {useColorScheme} from 'react-native-appearance';
import Carousel from 'react-native-snap-carousel';

//local
import styles from './style';
import {light, dark} from '../../styles/colors';
import {icons} from '../../utils/assets';
import MainHeader from '../../components/MainHeader';
import AppInput from '../../components/AppInput';
import Button from '../../components/Button';

const {width, height} = Dimensions.get('window');

const data = [
  {
    key: 1,
    author: 'أرجعام حصري',
    date: '11/02/2020',
    title:
      'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
    time: 'قبل 45 دقيقة',
    commentcount: 45,
    image: icons.newssmallimages1,
  },

  {
    key: 2,
    author: 'أرجعام حصري',
    date: '11/02/2020',
    title:
      'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
    time: 'قبل 45 دقيقة',
    commentcount: 45,
    image: icons.newssmallimages2,
  },
  {
    key: 3,
    author: 'أرجعام حصري',
    date: '11/02/2020',
    title:
      'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
    time: 'قبل 45 دقيقة',
    commentcount: 45,
    image: icons.newssmallimages1,
  },
  {
    key: 4,
    author: 'أرجعام حصري',
    date: '11/02/2020',
    title:
      'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
    time: 'قبل 45 دقيقة',
    commentcount: 45,
    image: icons.newssmallimages2,
  },
  {
    key: 5,
    author: 'أرجعام حصري',
    date: '11/02/2020',
    title:
      'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
    time: 'قبل 45 دقيقة',
    commentcount: 45,
    image: icons.newsimage,
  },
];

export default function index(props) {
  const currentMode = useColorScheme();
  const COLORS = currentMode == 'light' ? light : dark;

  const [tab, setTab] = useState(2);

  const handleTabPress = (tabNumber) => {
    setTab(tabNumber);
  };
  const carouselRef = useRef('');
  const [activeIndex, setActivateIndex] = useState(0);
  const [carouselState, setCarouselState] = useState([
    {
      key: 1,
      author: 'أرجعام حصري',
      date: '11/02/2020',
      title:
        'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
      time: 'قبل 45 دقيقة',
      commentcount: 45,
      image: icons.newsimage,
    },

    {
      key: 2,
      author: 'أرجعام حصري',
      date: '11/02/2020',
      title:
        'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
      time: 'قبل 45 دقيقة',
      commentcount: 45,
      image: icons.newsimage,
    },
    {
      key: 3,
      author: 'أرجعام حصري',
      date: '11/02/2020',
      title:
        'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
      time: 'قبل 45 دقيقة',
      commentcount: 45,
      image: icons.newsimage,
    },
    {
      key: 4,
      author: 'أرجعام حصري',
      date: '11/02/2020',
      title:
        'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
      time: 'قبل 45 دقيقة',
      commentcount: 45,
      image: icons.newsimage,
    },
    {
      key: 5,
      author: 'أرجعام حصري',
      date: '11/02/2020',
      title:
        'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
      time: 'قبل 45 دقيقة',
      commentcount: 45,
      image: icons.newsimage,
    },
  ]);

  const _renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => props.navigation.navigate('NewDetails')}>
        <View
          // activeOpacity={10}
          style={styles.getSheet(COLORS).CarouselItem}>
          <ImageBackground
            source={item.image}
            resizeMode="stretch"
            style={{width: '100%', height: '100%', alignItems: 'flex-end'}}>
            <View style={styles.getSheet(COLORS).CarouselInner}>
              <View style={styles.getSheet(COLORS).CarouselRow}>
                <Text style={{color: COLORS.ORANGE, fontWeight: 'bold'}}>
                  {item.author}
                </Text>
                <View style={styles.getSheet(COLORS).SmallSeperator} />
                <Text style={{color: COLORS.WHITE}}>{item.date}</Text>
              </View>
              <Text style={styles.getSheet(COLORS).CarouselTitle}>
                {item.title}
              </Text>
              <View style={styles.getSheet(COLORS).CarouselBottomRow}>
                <View style={styles.getSheet(COLORS).TimeContainer}>
                  <View style={styles.getSheet(COLORS).ClockCont}>
                    <Image
                      source={icons.timewhite}
                      style={styles.getSheet(COLORS).ClockImg}
                    />
                  </View>
                  <Text style={{color: COLORS.WHITE}}>{item.time}</Text>
                </View>
                <View style={styles.getSheet(COLORS).StatsCont}>
                  <Text style={{color: COLORS.WHITE}}>{item.commentcount}</Text>
                  <View style={styles.getSheet(COLORS).ClockCont}>
                    <Image
                      source={icons.messagewhite}
                      style={styles.getSheet(COLORS).ClockImg}
                    />
                  </View>
                  <View style={styles.getSheet(COLORS).ClockCont}>
                    <Image
                      source={icons.likewhite}
                      style={styles.getSheet(COLORS).ClockImg}
                    />
                  </View>
                  <View style={styles.getSheet(COLORS).ClockCont}>
                    <Image
                      source={icons.uploadwhite}
                      style={styles.getSheet(COLORS).ClockImg}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.getSheet(COLORS).container}>
      <MainHeader
        isCountry={true}
        isMutipleLeftImage={false}
        leftIcon={icons.Search}
        rightIcon={icons.Search}
        // rightIconFired={() => alert('uploaded')}
        // LeftIconFired={() => alert('LefticonFired')}
        // LeftLikeIconFired={() => alert('LeftLikeIconFired')}
        // LeftArrowIconFired={() => alert('LeftArrowIconFired')}
        // LeftMoreIconFired={() => alert('LeftMoreIconFired')}
        // text={'news'}
        navigation={props.navigation}
      />
      <View style={styles.getSheet(COLORS).SecondaryContBg} />
      <View style={styles.getSheet(COLORS).InnerCont}>
        <View style={styles.getSheet(COLORS).tabCont}>
          <TouchableOpacity
            style={[
              styles.getSheet(COLORS).tabTextCont,
              tab == 1 ? {backgroundColor: COLORS.ORANGE} : null,
            ]}
            activeOpacity={10}
            onPress={() => handleTabPress(1)}>
            <Text
              style={[
                styles.getSheet(COLORS).tabText,
                tab == 1 ? {color: COLORS.WHITE} : COLORS.TEXTGREY,
              ]}>
              مؤشرات السوق
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.getSheet(COLORS).tabTextCont,
              tab == 2 ? {backgroundColor: COLORS.ORANGE} : null,
            ]}
            activeOpacity={10}
            onPress={() => handleTabPress(2)}>
            <Text
              style={[
                styles.getSheet(COLORS).tabText,
                tab == 2 ? {color: COLORS.WHITE} : COLORS.TEXTGREY,
              ]}>
              شارك السعر
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.getSheet(COLORS).tabTextCont,
              tab == 3 ? {backgroundColor: COLORS.ORANGE} : null,
            ]}
            activeOpacity={10}
            onPress={() => handleTabPress(3)}>
            <Text
              style={[
                styles.getSheet(COLORS).tabText,
                tab == 3 ? {color: COLORS.WHITE} : COLORS.TEXTGREY,
              ]}>
              أحدث الأخبار
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.getSheet(COLORS).DataCont}>
            <View style={styles.getSheet(COLORS).RightCont}>
              <Text style={{fontSize: width * 0.05, color: COLORS.BLACKWHITE}}>
                تاسي
              </Text>
              <Text style={{fontSize: width * 0.08, color: COLORS.BLACKWHITE}}>
                7,862.23
              </Text>
              <Text style={{color: COLORS.GREEN}}>(0.33%) 23.64</Text>
            </View>
            <View style={styles.getSheet(COLORS).LeftCont}>
              <Text style={{fontSize: width * 0.03, color: COLORS.BLACKWHITE}}>
                آخر 30 يومًا
              </Text>
              <View style={styles.getSheet(COLORS).ChartCont}>
                <Image
                  source={icons.chart}
                  resizeMode="contain"
                  style={{width: '100%', height: '100%'}}
                />
              </View>

              <View style={styles.getSheet(COLORS).ChartRow}>
                <Text style={{color: COLORS.BLACKWHITE}}>w1</Text>
                <Text style={{color: COLORS.BLACKWHITE}}>w1</Text>
                <Text style={{color: COLORS.BLACKWHITE}}>w1</Text>
                <Text style={{color: COLORS.BLACKWHITE}}>w1</Text>
                <Text style={{color: COLORS.BLACKWHITE}}>w1</Text>
              </View>
            </View>
          </View>

          <View style={styles.getSheet(COLORS).CarouselCont}>
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
              autoplayInterval={3000}
              // onSnapToItem={(index) => setActivateIndex(index)}
              activeSlideAlignment="center"
            />
          </View>
          <View
            style={{
              //backgroundColor: 'red',
              flex: 1,
              marginBottom: height * 0.185,
              marginTop: height * 0.015,
            }}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.key}
              contentContainerStyle={{width: '95%', alignSelf: 'center'}}
              style={{}}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    onPress={() => props.navigation.navigate('NewDetails')}
                    style={styles.getSheet(COLORS).FlatListItem}>
                    <View style={styles.getSheet(COLORS).StoryImgCont}>
                      <Image
                        source={item.image}
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
                        {item.date}
                      </Text>
                      <Text
                        style={[
                          styles.getSheet(COLORS).StoryTitle,
                          {color: COLORS.BLACKWHITE},
                        ]}>
                        {item.title}
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
                          <Text style={{color: COLORS.TEXTGREY}}>
                            {item.time}
                          </Text>
                        </View>
                        <View style={styles.getSheet(COLORS).FlatListStatsCont}>
                          <Text style={{color: COLORS.TEXTGREY}}>
                            {item.commentcount}
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
              }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
