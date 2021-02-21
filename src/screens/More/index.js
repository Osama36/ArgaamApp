import React, {useState, useRef} from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';

// third party
import {useColorScheme} from 'react-native-appearance';

//local
import styles from './style';
import {light, dark} from '../../styles/colors';
import {icons} from '../../utils/assets';
import MainHeader from '../../components/MainHeader';

const {width, height} = Dimensions.get('window');

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
  const currentMode = useColorScheme();
  const COLORS = currentMode == 'light' ? light : dark;
  
  const _renderItem = ({item, index}) => {
    return (
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
    );
  };

  return (
    <View style={styles.getSheet(COLORS).container}>
      <MainHeader
        isCountry={true}
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
        <View style={styles.getSheet(COLORS).DataCont}>
          <View style={styles.getSheet(COLORS).RightCont}>
            <View style={styles.getSheet(COLORS).UserPic}>
              <Image
                source={icons.User}
                resizeMode="contain"
                style={{width: '100%', height: '100%'}}
              />
            </View>
            <View style={styles.getSheet(COLORS).UserDetailsCont}>
              <Text style={styles.getSheet(COLORS).UserName}>محمد عمير</Text>
              <Text style={styles.getSheet(COLORS).UserDesc}>
                عرض الصفحة الشخصية
              </Text>
            </View>
          </View>
          <View style={styles.getSheet(COLORS).LeftCont}>
            <View style={[styles.getSheet(COLORS).UserPic,{paddingLeft: 10}]}>
              <Image
                source={icons.Amount}
                resizeMode="contain"
                style={{width: '70%', height: '70%'}}
              />
            </View>
            <View style={styles.getSheet(COLORS).UserDetailsCont}>
              <Text style={styles.getSheet(COLORS).AmountLabel}>
                الرصيد الحالي
              </Text>
              <Text style={styles.getSheet(COLORS).Amount}>20.25</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={data}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{
            width: '95%',
            alignSelf: 'center',

            paddingBottom: height * 0.2,
          }}
          style={{marginTop: height * 0.02}}
          renderItem={({item}) => {
            return (
              <View style={styles.getSheet(COLORS).MenuRow}>
                <View style={styles.getSheet(COLORS).MenuIconCont}>
                  <Image
                    source={item.icon}
                    resizeMode="contain"
                    style={{width: '50%', height: '50%'}}
                  />
                </View>
                <View style={{height: '50%', width: '60%'}}>
                  <Text style={styles.getSheet(COLORS).MenuLabel}>
                    {item.text}
                  </Text>
                </View>
                <View style={styles.getSheet(COLORS).MenuIconCont}>
                  <Image
                    source={icons.BackArrow}
                    resizeMode="contain"
                    style={styles.getSheet(COLORS).ArrowIcon}
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
