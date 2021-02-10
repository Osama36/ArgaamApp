import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

//loca imports
import COLORS from '../../styles/colors';

export default StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    height: height * 0.065,
    borderRadius: width * 0.035,
    marginTop: height *0.015,
    backgroundColor: COLORS.PRIMARY_BG,
    flexDirection: 'row-reverse',
    overflow: 'hidden',
    marginVertical: height * 0.007,
    
  },
  PlaceHolderStye: {
    width: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'green',
  },
  iconCont: {
    width: '12%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: '50%',
    height: '50%',
  },
  textInputCont: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    direction: 'rtl'
  },
  textInput: {
    color: '#929497',
    textAlign: 'right',
    fontSize: width * 0.04,
    direction: 'rtl'
  },
  passwordIconCont: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'green',
    position: 'absolute',
    right: 0,
    zIndex: 999,
    top: 0,
    bottom: 0
  },
  isPasswordIcon: {
    width: '50%',
    height: '50%',
  },
  ArrowIcon: {
    width: '50%',
    height: '50%',
    tintColor: COLORS.GREY_TEXT,
    transform: [{rotate: '180deg'}],
  },
});
