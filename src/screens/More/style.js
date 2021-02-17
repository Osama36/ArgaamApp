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
        width: '60%',
        height: '80%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderLeftColor: COLORS.TEXTGREY,
        borderLeftWidth: width * 0.00075,
        paddingHorizontal: width * 0.02,
        justifyContent: 'space-around',
      },
      UserPic: {
        width: width * 0.13,
        height: width * 0.13,
        borderRadius: (width * 0.13) / 2,
        alignItems: 'center',
        justifyContent: 'center',
      },
      UserDetailsCont: {
        width: '70%',
        height: '80%',
        justifyContent: 'space-evenly',
      },
      UserName: {
        fontSize: width * 0.05,
        color: COLORS.BLACKWHITE,
      },
      UserDesc: {
        fontSize: width * 0.038,
        color: COLORS.TEXTGREY,
      },
      AmountLabel: {
        fontSize: width * 0.04,
        color: COLORS.BLACKWHITE,
      },
      Amount: {
        fontSize: width * 0.05,
        color: COLORS.ORANGE,
        textAlign: 'right',
      },
      LeftCont: {
        width: '40%',
        height: '80%',
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingHorizontal: width * 0.015,
        justifyContent: 'space-around',
      },
      MenuRow: {
        width: '100%',
        height: height * 0.08,
        backgroundColor: COLORS.PRIMARY_BG,
        alignSelf: 'center',
        marginBottom: height * 0.01,
        borderRadius: width * 0.03,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      MenuIconCont: {
        height: '100%',
        width: '15%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      MenuLabel: {
        fontSize: width * 0.05,
        color: COLORS.BLACKWHITE,
      },
      ArrowIcon: {
        width: '50%',
        height: '50%',
        transform: [{rotate: '180deg'}],
        tintColor: COLORS.BLACKWHITE,
      },
    });
  }
}
