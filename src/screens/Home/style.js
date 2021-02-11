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
    opacity: COLORS.LIGHTGREY == '#2B2E3D' ? 0.5 : 1
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
    height: height * 0.15,
    borderRadius: width * 0.05,
    marginTop: height * 0.01,
    backgroundColor: COLORS.PRIMARY_BG,
    alignItems: 'center',
    flexDirection: 'row-reverse'
  },
  RightCont: {
    width: '50%',
    height: '80%',
    alignItems: 'flex-end',
    borderLeftColor: COLORS.TEXTGREY,
    borderLeftWidth: width * 0.00075,
    paddingHorizontal: width * 0.03,
    justifyContent: 'space-evenly'
  },
  LeftCont: {
    width: '50%',
    height: '80%',
    alignItems: 'flex-start',
    paddingHorizontal: width * 0.03,
    justifyContent: 'space-evenly'
  },
  RightContText: {
    fontSize: width * 0.05
  },
  ChartCont: {
    width: '90%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ChartRow: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  CarouselCont: {
    height: height * 0.25,
    width: width,
    alignItems: 'center',
    marginTop: height *0.01
  },
  CarouselItem: {
    backgroundColor: 'red',
    borderRadius: width * 0.1,
    height: '100%',
    width: '100%'
    // padding: 50,
  },
  CarouselTitle: {
    width: '80%',
    fontSize: width * 0.04,
    color: COLORS.WHITE,
    height: '35%',
    marginBottom: height *0.008
  },
  SmallSeperator: {
    height: '70%',
    width: '1%', backgroundColor:
      COLORS.TEXTGREY
  },
  CarouselRow: {
    width: '50%',
    height: '25%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-evenly',
  },
  CarouselInner: {
    marginTop: height * 0.1,
    width: '100%',
    alignItems: 'flex-end',
    height: '60%',
    justifyContent: 'space-evenly'
  },
  CarouselBottomRow:{
    width: '100%',
    height: '25%',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse'
  },
  TimeContainer:{
  width: '30%',
  alignItems: 'center',
  height : '100%',
  flexDirection: 'row-reverse',
  justifyContent: 'space-around'
  },
  StatsCont:{
    width: '30%',
    alignItems: 'center',
    height : '100%',
    flexDirection: 'row-reverse',
    justifyContent: 'space-around'
  },
  ClockCont:{
    width: '30%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  ClockImg:{
    resizeMode: 'contain',
    height: '70%',
    width: '70%'
  }

});
