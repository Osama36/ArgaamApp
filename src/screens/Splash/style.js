import {StyleSheet, Dimensions} from 'react-native';

//Dimesntion
const {width, height} = Dimensions.get('window');

export default class StyleSheetFactory {
  static getSheet(COLORS) {
    return StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#F58026',
        zIndex: 999,
        paddingTop: height * 0.03,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: width * 0.2,
        height: height * 0.2,
        //backgroundColor: 'red',
      },
    });
  }
}
