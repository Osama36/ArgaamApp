import {StyleSheet, Dimensions} from 'react-native';

//Dimenstion
const {width, height} = Dimensions.get('window');

export default class StyleSheetFactory {
  static getSheet(COLORS) {
    return StyleSheet.create({
      container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: height * 0.01,
        paddingHorizontal: height * 0.015,
        height: height * 0.07,
        // backgroundColor: 'red',
        width: '100%',
      },
      leftMultiImageContainer: {
        backgroundColor: COLORS.LIGHTGREY,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: (width * 0.1) / 2,
        marginHorizontal: width * 0.005,
      },

      leftImageContainer: {
        //backgroundColor: 'blue',
        alignItems: 'center',
        // justifyContent: 'center',
        width: width * 0.13,
        height: width * 0.1,
        flexDirection: 'row',
      },
      leftImage: {
        width: '95%',
        height: '95%',
        resizeMode: 'contain',
      },
      leftImage2: {
        width: '45%',
        height: '45%',
      },
      LogoContainer: {
        //backgroundColor: 'red',
        width: '40%',
        height: '90%',
        alignItems: 'center',
        justifyContent: 'center',
      },
      Logo: {
        width: '100%',
        height: '100%',
        tintColor: COLORS.ORANGE,
      },
      text: {
        color: '#E4A98C',
        fontSize: width * 0.05,
      },

      rightImageContainer: {
        backgroundColor: COLORS.LIGHTGREY,
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.1,
        height: width * 0.1,
        borderRadius: (width * 0.1) / 2,
      },
      rightImage: {
        resizeMode: 'contain',
        width: '70%',
        height: '70%',
        tintColor: COLORS.TEXTGREY,
      },
    });
  }
}
