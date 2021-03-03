import React from 'react';
import {FlatList, View, Dimensions} from 'react-native';

// third party
import {useColorScheme} from 'react-native-appearance';
//local
import styles from './style';
import {light, dark} from '../../styles/colors';
import {icons} from '../../utils/assets';
import Article from '../../components/ArticleLists';
import MainHeader from '../../components/MainHeader';

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
  {
    key: 9,
    author: 'أرجعام حصري',
    date: '11/02/2020',
    title:
      'حقق مصرف الراجحي ربحاً صافياً قدره 10.2 مليار ريال للسنة المالية 2019',
    time: 'قبل 45 دقيقة',
    commentcount: 45,
    image: icons.newssmallimages2,
  },
  {
    key: 10,
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
  return (
    <View style={styles.getSheet(COLORS).container}>
      <MainHeader
        isCountry={false}
        isMutipleLeftImage={false}
        isTextHeader={true}
        leftIcon={icons.Search}
        rightIcon={icons.Search}
        // rightIconFired={() => alert('uploaded')}
        // LeftIconFired={() => alert('LefticonFired')}
        // LeftLikeIconFired={() => alert('LeftLikeIconFired')}
        // LeftArrowIconFired={() => alert('LeftArrowIconFired')}
        // LeftMoreIconFired={() => alert('LeftMoreIconFired')}
        text={'مقالات'}
        navigation={props.navigation}
      />
      <View style={styles.getSheet(COLORS).SecondaryContBg} />
      <View style={styles.getSheet(COLORS).InnerCont}>
        <View
          style={{
            //backgroundColor: 'red',
            flex: 1,
            marginBottom: height * 0.19,
            //marginTop: height * 0.015,
          }}>
          <FlatList
            data={data}
            keyExtractor={(item) => item.key}
            contentContainerStyle={{width: '95%', alignSelf: 'center'}}
            style={{}}
            renderItem={({item}) => (
              <Article item={item} navigation={props.navigation} />
            )}
          />
        </View>
      </View>
    </View>
  );
}
