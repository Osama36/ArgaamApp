import {StyleSheet, Dimensions} from 'react-native';

// Dimenstion
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
      scrollView: {
        marginBottom: height * 0.1,
        //backgroundColor: 'red',
      },
      img1Container: {
        width: width * 0.9,
        height: height * 0.31,
        alignSelf: 'center',
      },
      img1: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
      },
      img2Container: {
        width: width * 0.9,
        height: height * 0.69,
        alignSelf: 'center',
      },
      img2: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
      },
      img3Container: {
        marginVertical: height * 0.01,
        width: width * 0.9,
        height: height * 0.69,
        alignSelf: 'center',
      },
      img3: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
      },
      img4Container: {
        marginVertical: height * 0.01,
        width: width * 0.9,
        height: height * 0.69,
        alignSelf: 'center',
      },
      img4: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
      },
      img5Container: {
        marginVertical: height * 0.01,
        width: width * 0.9,
        height: height * 0.69,
        alignSelf: 'center',
      },
      img5: {
        width: '100%',
        height: '100%',
        resizeMode: 'stretch',
      },
    });
  }
}
