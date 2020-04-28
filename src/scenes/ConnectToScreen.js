import React, {memo} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import MainStyle from '../styles/main-style';
import SkipButton from '../components/SkipButton';

const ConnectToScreen = ({navigation}) => (
  <Background>
    <View style={MainStyle.container}>
      <SkipButton goNext={() => navigation.navigate('Dashboard')} />
      <Image source={require('../assets/images/logo.png')} style={MainStyle.logoImage} />
      <Text style={MainStyle.subTitle}>se connecter{"\n"}comme?</Text>
      <View style={MainStyle.mainConnecter}>
         <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={MainStyle.btnConnecter}
          activeOpacity={0.5}>
          <Image
            style={MainStyle.connectorImageStyles}
            source={require('../assets/images/user-connecter.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={MainStyle.btnConnecter}
          activeOpacity={0.5}>
          <Image
            style={MainStyle.connectorImageStyles}
            source={require('../assets/images/agency-connecter.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={MainStyle.socialLogin}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={MainStyle.loginBtnContainer}
          activeOpacity={0.5}>
          <Image
            style={MainStyle.loginImageStyles}
            source={require('../assets/images/email-login.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={MainStyle.loginBtnContainer}
          activeOpacity={0.5}>
          <Image
            style={MainStyle.loginImageStyles}
            source={require('../assets/images/fb-login.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginScreen')}
          style={MainStyle.loginBtnContainer}
          activeOpacity={0.5}>
          <Image
            style={MainStyle.loginImageStyles}
            source={require('../assets/images/s-identifier.png')}
          />
      </TouchableOpacity>
      </View>
    </View>
  </Background>
);

export default memo(ConnectToScreen);
