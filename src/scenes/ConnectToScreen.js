import React, {memo} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Background from '../components/Background';
import SkipButton from '../components/SkipButton';
import {Colors} from '../styles';

const ConnectToScreen = ({navigation}) => (
  <Background>
    <View style={style.container}>
      <SkipButton goNext={() => navigation.navigate('Dashboard')} />
      <Image
        source={require('../assets/images/logo.png')}
        style={style.logoImage}
      />
      <Text style={style.subTitle}>se connecter{'\n'}comme?</Text>
      <View style={style.mainConnecter}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreen')}
          style={style.btnConnecter}
          activeOpacity={0.5}>
          <Image
            style={style.connectorImageStyles}
            source={require('../assets/images/user-connecter.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreen')}
          style={style.btnConnecter}
          activeOpacity={0.5}>
          <Image
            style={style.connectorImageStyles}
            source={require('../assets/images/agency-connecter.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={style.socialLogin}>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreen')}
          style={style.loginBtnContainer}
          activeOpacity={0.5}>
          <Image
            style={style.loginImageStyles}
            source={require('../assets/images/email-login.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreen')}
          style={style.loginBtnContainer}
          activeOpacity={0.5}>
          <Image
            style={style.loginImageStyles}
            source={require('../assets/images/fb-login.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RegisterScreen')}
          style={style.loginBtnContainer}
          activeOpacity={0.5}>
          <Image
            style={style.loginImageStyles}
            source={require('../assets/images/s-identifier.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  </Background>
);

export default memo(ConnectToScreen);

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  logoImage: {
    width: 160,
    height: 130,
    alignSelf: 'center',
  },
  subTitle: {
    fontWeight: 'bold',
    color: Colors.WHITE,
    fontFamily: 'Open Sans',
    fontSize: 22,
    textAlign: 'center',
    margin: 10,
  },
  mainConnecter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnConnecter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  connectorImageStyles: {
    width: 150,
    height: 150,
  },
  socialLogin: {
    flex: 1,
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
});
