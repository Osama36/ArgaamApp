import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../styles/colors';
const { width, height } = Dimensions.get('window');


export default StyleSheet.create({
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
    paddingTop: height * 0.012
  },
  SecondaryContBg: {
    height: height * 0.015,
    alignSelf: 'center',
    width: width * 0.9,
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    backgroundColor: COLORS.LIGHTGREY,
    opacity: COLORS.LIGHTGREY =='#2B2E3D' ?  0.5 : 1
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
    fontSize: width *0.04,
    color: COLORS.TEXTGREY,
  },

});
