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
        paddingTop: height * 0.01,
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
      InnerCont: {
        height: height * 0.8,
        width,
        zIndex: 2,
        borderTopLeftRadius: width * 0.05,
        borderTopRightRadius: width * 0.05,
        backgroundColor:COLORS.SECONDARY_BG,
        //paddingTop: height * 0.07,
        justifyContent: 'center',
        alignItems: 'center',
      },
      middleCont: {
        width: '90%',
        height: '40%',
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      },
      iconCont: {
        width: '50%',
        height: '50%',
        //backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
      },
      bellIcon: {
        width: '75%',
        height: '75%',
      },
      txtCont: {
        width: '90%',
        alignItems: 'center',
      },
      txt1: {
        fontSize: width * 0.045,
        color: COLORS.BLACKWHITE,
      },
      txt2: {
        marginTop: height * 0.01,
        fontSize: width * 0.035,
        color: COLORS.BLACKWHITE,
      },
      BtnCont: {
        width: '90%',
        alignSelf: 'center',
        marginTop: height * 0.02,
      },
    });
  }
}
