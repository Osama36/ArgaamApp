import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {COLORS} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    height : height * 0.07,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.04
  },
  Text:{
    fontSize: width * 0.04,
    // fontWeight:"bold"
  }
});
