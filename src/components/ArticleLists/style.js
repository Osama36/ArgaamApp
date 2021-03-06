import {StyleSheet, Dimensions} from 'react-native';

//Dimenstion
const {width, height} = Dimensions.get('window');

export default class StyleSheetFactory {
  static getSheet(COLORS) {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: COLORS.PRIMARY_BG,
        zIndex: 999,
        // paddingVertical: height * 0.0
      },
      InnerCont: {
        height: height * 0.96,
        width,
        zIndex: 2,
        borderTopLeftRadius: width * 0.05,
        borderTopRightRadius: width * 0.05,
        backgroundColor: COLORS.SECONDARY_BG,
        paddingTop: height * 0.012,
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
      tabCont: {
        width: '100%',
        height: height * 0.055,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
      tabTextCont: {
        width: '27%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width * 0.025,
      },
      tabText: {
        // fontFamily: 'Poppins-Regular',
        fontSize: width * 0.04,
        color: COLORS.TEXTGREY,
      },
      DataCont: {
        width: '95%',
        alignSelf: 'center',
        height: height * 0.12,
        borderRadius: width * 0.03,
        marginTop: height * 0.01,
        backgroundColor: COLORS.PRIMARY_BG,
        alignItems: 'center',
        flexDirection: 'row-reverse',
      },
      RightCont: {
        width: '50%',
        height: '80%',
        alignItems: 'flex-end',
        borderLeftColor: COLORS.TEXTGREY,
        borderLeftWidth: width * 0.00075,
        paddingHorizontal: width * 0.03,
        justifyContent: 'space-evenly',
      },
      LeftCont: {
        width: '50%',
        height: '80%',
        alignItems: 'flex-start',
        paddingHorizontal: width * 0.03,
        justifyContent: 'space-evenly',
      },
      RightContText: {
        fontSize: width * 0.05,
      },
      ChartCont: {
        width: '90%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      ChartRow: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
      },
      CarouselCont: {
        height: height * 0.25,
        width: width,
        alignItems: 'center',
        marginTop: height * 0.01,
      },
      CarouselItem: {
        borderRadius: width * 0.1,
        height: '100%',
        width: '100%',
        // padding: 50,
      },
      CarouselTitle: {
        width: '80%',
        fontSize: width * 0.04,
        color: COLORS.WHITE,
        height: '35%',
        marginBottom: height * 0.008,
      },
      SmallSeperator: {
        height: '70%',
        width: '1%',
        backgroundColor: COLORS.TEXTGREY,
      },
      CarouselRow: {
        width: '50%',
        height: '25%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
      },
      CarouselInner: {
        marginTop: height * 0.1,
        width: '100%',
        alignItems: 'flex-end',
        height: '60%',
        justifyContent: 'space-evenly',
      },
      CarouselBottomRow: {
        width: '100%',
        height: '25%',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
      },
      TimeContainer: {
        width: '35%',
        alignItems: 'center',
        height: '100%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
      },
      StatsCont: {
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
    });
  }
}
