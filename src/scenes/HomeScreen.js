import React, {memo} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import MainStyle from '../styles/main-style';

const HomeScreen = ({navigation}) => (
  <Background>
    <View style={MainStyle.container}>
      <Text style={MainStyle.title}>WELCOME TO</Text>
      <Logo />
      <TouchableOpacity
        onPress={() => navigation.navigate('ConnectToScreen')}
        style={MainStyle.btnContainer}
        activeOpacity={0.5}>
        <Image
          style={MainStyle.imageIconStyles}
          source={require('../assets/images/rectangle-button.png')}
        />
        <Text style={MainStyle.textStyles}>Commencer</Text>
      </TouchableOpacity>
      <Text style={MainStyle.data}>En continuant, vous acceptez d'avoir lu et accepté nos conditions d'utilisation et notre politique de confidentialité</Text>
    </View>
  </Background>
);

export default memo(HomeScreen);
