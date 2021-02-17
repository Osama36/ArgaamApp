import {StyleSheet, Dimensions} from 'react-native';

//Dimesntion
const {width, height} = Dimensions.get('window');

export default class StyleSheetFactory {
  static getSheet(COLORS) {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: COLORS.PRIMARY_BG,
        zIndex: 999,
        //paddingTop: height * 0.03,
      },
      InnerCont: {
        height: height * 0.96,
        width,
        zIndex: 2,
        borderTopLeftRadius: width * 0.05,
        borderTopRightRadius: width * 0.05,
        backgroundColor: COLORS.SECONDARY_BG,
        paddingTop: height * 0.07,
      },
      SecondaryContBg: {
        height: height * 0.015,
        alignSelf: 'center',
        width: width * 0.9,
        borderTopLeftRadius: width * 0.05,
        borderTopRightRadius: width * 0.05,
        backgroundColor: COLORS.LIGHTGREY,
        opacity: COLORS.LIGHTGREY == '#2B2E3D' ? 0.5 : 1,
      },
      FlatListItem: {
        width: '100%',
        height: height * 0.12,
        marginBottom: height * 0.01,
        flexDirection: 'row-reverse',
        backgroundColor: COLORS.PRIMARY_BG,
        borderRadius: width * 0.05,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '2.5%',
      },
      StoryImgCont: {
        height: '85%',
        width: '20%',
      },
      StoryDetails: {
        width: '75%',
        height: '95%',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
      },
      StoryTitle: {
        fontSize: width * 0.03,
      },
      StoryTime: {
        fontSize: width * 0.03,
        color: COLORS.GREY_BG,
      },
      FlatListImage: {
        width: '100%',
        height: '100%',
        borderRadius: width * 0.03,
      },
      FlatListStatsCont: {
        width: '30%',
        height: '100%',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      },
      FlatlistBottomCont: {
        height: '20%',
        flexDirection: 'row-reverse',
        width: '100%',
        justifyContent: 'space-between',
      },
      TimeContainer: {
        width: '30%',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
      },
      ClockCont: {
        width: '30%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      ClockImg: {
        resizeMode: 'contain',
        height: '60%',
        width: '60%',
      },
      ClockImg1: {
        resizeMode: 'contain',
        height: '100%',
        width: '95%',
        //backgroundColor: 'red',
      },
      ClockImg2: {
        resizeMode: 'contain',
        height: '72%',
        width: '72%',
        //backgroundColor: 'red',
      },
    });
  }
}
