import React, { memo } from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import MainStyle from '../styles/main-style';

const Dashboard = ({ navigation }) => (
  <Background>
    <View style={MainStyle.iconContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} style={MainStyle.menuContainer}>
        <Image source={require('../assets/images/MenuIcon.png')} style={MainStyle.BellImage} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={MainStyle.bellContainer}>
        <Image source={require('../assets/images/bell.png')} style={MainStyle.BellImage} />
      </TouchableOpacity>
    </View>
    <Logo />
    <Paragraph style={MainStyle.paraStyle}>
    Nous listons les 320,052,000 propriétés {"\n"}et grandissons
    </Paragraph>
    <TouchableOpacity
        onPress={() => navigation.navigate('ConnectToScreen')}
        style={MainStyle.btnContainer}
        activeOpacity={0.5}>
        <Image
          style={MainStyle.imageIconStyles}
          source={require('../assets/images/Cherchons-btn.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ConnectToScreen')}
        style={MainStyle.btnContainer}
        activeOpacity={0.5}>
        <Image
          style={MainStyle.imageIconStyles}
          source={require('../assets/images/ajouter-btn.png')}
        />
      </TouchableOpacity>
  </Background>
);

export default memo(Dashboard);
