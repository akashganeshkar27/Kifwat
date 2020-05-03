import React, {memo} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import {Colors} from '../styles';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const HomeScreen = ({navigation}) => (
  <Background>
    <View style={style.container}>
      <Text style={style.title}>WELCOME TO</Text>
      <Logo />
      <TouchableOpacity
        onPress={() => navigation.navigate('ConnectToScreen')}
        style={style.btnContainer}
        activeOpacity={0.5}>
        <Image
          style={style.imageIconStyles}
          source={require('../assets/images/rectangle-button.png')}
        />
        <Text style={style.textStyles}>Commencer</Text>
      </TouchableOpacity>
      <Text style={style.data}>En continuant, vous acceptez d'avoir lu et accepté nos conditions d'utilisation et notre politique de confidentialité</Text>
    </View>
  </Background>
);

export default memo(HomeScreen);

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontWeight: 'normal',
    color: Colors.WHITE,
    fontFamily: 'Open Sans',
    fontSize: 26,
    top: 10 + getStatusBarHeight(),
    textAlign: 'center',
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
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
  data: {
    color: Colors.WHITE,
    fontFamily: 'Open Sans',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
});
