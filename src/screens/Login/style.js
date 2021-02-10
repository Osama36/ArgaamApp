import { StyleSheet, Dimensions } from 'react-native';
import COLORS from '../../styles/colors';
const { width, height } = Dimensions.get('window');


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.PRIMARY_BG,
    zIndex: 999,
    paddingTop: height * 0.03
  },
  InnerCont: {
    height: height * 0.96,
    width,
    zIndex: 2,
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    backgroundColor: COLORS.SECONDARY_BG,
    paddingTop: height * 0.07
  },
  SecondaryContBg: {
    height: height * 0.015,
    alignSelf: 'center',
    width: width * 0.9,
    borderTopLeftRadius: width * 0.05,
    borderTopRightRadius: width * 0.05,
    backgroundColor: COLORS.LIGHTGREY
  },
  BackBtnCont: {
    width: width * 0.065,
    height: width * 0.065,
    borderRadius: width * 0.065 / 2,
    position: 'absolute',
    right: width * 0.05,
    top: height * 0.03,
    backgroundColor: COLORS.PRIMARY_BG,
    alignItems: 'center',
    justifyContent: 'center'
  },
  BackBtn: {
    width: '100%',
    height: '100%'
  },
  LogoCont: {
    width: width * 0.3,
    height: height * 0.1,
    alignSelf: 'center',
  },
  Heading: {
    fontSize: width * 0.1,
    paddingTop: height * 0.04,
    textAlign: 'center',
    color: COLORS.BLACK
  },
  HeadingDesc: {
    fontSize: width * 0.05,
    marginBottom: height *0.02,
    textAlign: 'center',
    color: COLORS.BLACK
  },
  CheckCont: {
    width: width * 0.17,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: height * 0.05,
    marginLeft: width * 0.05,
    alignItems: 'center'
  },
  Check: {
    borderWidth: width * 0.005,
    borderColor: COLORS.ORANGE,
    height: width * 0.04,
    width: width * 0.04,
  },
  CheckText: {
    fontSize: width * 0.04,
    color: COLORS.BLACK
  },
  BtnCont: {
    width: '90%',
    alignSelf: 'center', 
    marginTop: height * 0.03
  },
  Seprator:{
    width: width *0.6,
    height: height *0.07,
    alignSelf: 'center',
    marginTop: height *0.015,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  SocialCont:{
    width: width *0.65,
    height: height *0.1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  SocialBtn:{
    width :width *0.12,
    height: width *0.12,
    borderRadius :width *0.12/2,
    backgroundColor: COLORS.PRIMARY_BG,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SocialLogo:{
    width: '50%',
    height: '50%'
  },
  Line:{
    width :'33%',
    height: '2%',
    backgroundColor: COLORS.TEXTGREY
  },
  OrText:{
    fontSize: width *0.04,
    color: COLORS.TEXTGREY
  },
  BottomCont:{
    width,
    height: height *0.05,
    marginTop: height *0.02,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: width *0.025
  },
  BottomContText:{
    fontSize: width *0.04,
    fontWeight: 'bold',
    color: COLORS.BLACKWHITE,
    textDecorationLine :'underline'
  }
  

});
