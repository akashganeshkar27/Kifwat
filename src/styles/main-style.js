import {StyleSheet} from 'react-native';
import * as Colors from './colors';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const style = StyleSheet.create({
  p: {
    color: 'black',
    fontFamily: 'Open Sans',
    fontSize: 14,
  },
  title: {
    fontWeight: 'bold',
    color: Colors.WHITE,
    fontFamily: 'Open Sans',
    fontSize: 26,
    top: 10 + getStatusBarHeight(),
    textAlign: 'center',
  },
  subTitle: {
    fontWeight: 'bold',
    color: Colors.WHITE,
    fontFamily: 'Open Sans',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
  },
  data: {
    color: Colors.WHITE,
    fontFamily: 'Open Sans',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  mainConnecter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnConnecter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  connectorImageStyles: {
    width: 150,
    height: 150,
  },
  imageIconStyles: {
    width: 350,
    height: 80,
  },
  textStyles: {
    position: 'absolute',
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 20,
    paddingBottom: 40,
  },
  logoImage: {
    width: 140,
    height: 110,
    alignSelf: 'center',
  },
  socialLogin: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginImageStyles: {
    width: 350,
    height: 80,
  },
  bellContainer: {
    top: getStatusBarHeight(),
  },
  BellImage: {
    width: 20,
    height: 20,
  },
  menuContainer: {
    flex: 1,
    top: getStatusBarHeight(),
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  paraStyle: {
    marginBottom: 10,
  },
});
export default style;
