import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../styles/colors';
const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
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
  leftImageContainer: {
    // backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.1,
    height: width * 0.1,
  },
  leftImage: {
    width: '70%',
    height: '70%',
  },
  LogoContainer: {
    // backgroundColor: 'red',
    width: '40%',
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo: {
    width: '100%',
    height: '100%',
    tintColor: COLORS.ORANGE
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
    borderRadius: width * 0.1 / 2
  },
  rightImage: {
    width: '70%',
    height: '70%',
    tintColor: COLORS.TEXTGREY
  },

});
