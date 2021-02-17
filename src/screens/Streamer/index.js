import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  FlatList,
  Dimensions,
} from 'react-native';

// third party
import {useColorScheme} from 'react-native-appearance';

//local
import styles from './style';
import {light, dark} from '../../styles/colors';
import {icons} from '../../utils/assets';
import MainHeader from '../../components/MainHeader';

//Dimesntion
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
  {
    key: 6,
    author: 'أرجعام حصري',
    date: '11/02/2020',
    title:
      'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
    time: 'قبل 45 دقيقة',
    commentcount: 45,
    image: icons.newssmallimages1,
  },

  {
    key: 7,
    author: 'أرجعام حصري',
    date: '11/02/2020',
    title:
      'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
    time: 'قبل 45 دقيقة',
    commentcount: 45,
    image: icons.newssmallimages2,
  },
  {
    key: 8,
    author: 'أرجعام حصري',
    date: '11/02/2020',
    title:
      'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
    time: 'قبل 45 دقيقة',
    commentcount: 45,
    image: icons.newssmallimages1,
  },
];

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
        rightIconFired={() => alert('uploaded')}
        LeftIconFired={() => alert('LefticonFired')}
        LeftLikeIconFired={() => alert('LeftLikeIconFired')}
        LeftArrowIconFired={() => alert('LeftArrowIconFired')}
        LeftMoreIconFired={() => alert('LeftMoreIconFired')}
        text={'أرقام التنبيه'}
        navigation={props.navigation}
      />
      <View style={styles.getSheet(COLORS).SecondaryContBg} />
      <View
        style={[
          styles.getSheet(COLORS).InnerCont,
          {paddingTop: height * 0.02},
        ]}>
        <View style={styles.getSheet(COLORS).headingContainer}>
          <Text style={{fontWeight: 'bold', color: COLORS.RED}}>
            آخر إشعار كان في 5 دقائق مضت
          </Text>
        </View>
        {
          <FlatList
            data={data}
            keyExtractor={(item) => item.key}
            contentContainerStyle={{width: '95%', alignSelf: 'center'}}
            style={{marginBottom: height * 0.2}}
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
        }
      </View>
    </View>
  );
}
