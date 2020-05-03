import React, {memo} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Background from '../components/Background';
import Paragraph from '../components/Paragraph';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const Dashboard = ({navigation}) => (
  <Background>
    <View style={styles.iconContainer}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={styles.menuContainer}>
        <Image
          source={require('../assets/images/MenuIcon.png')}
          style={styles.BellImage}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('LoginScreen')}
        style={styles.bellContainer}>
        <Image
          source={require('../assets/images/bell.png')}
          style={styles.BellImage}
        />
      </TouchableOpacity>
    </View>

    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ConnectToScreen')}
        style={styles.btnContainer}
        activeOpacity={0.5}>
        <Image
          style={styles.imageIconStyles}
          source={require('../assets/images/ajouter-btn.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('ConnectToScreen')}
        style={styles.btnContainer}
        activeOpacity={0.5}>
        <Image
          style={styles.imageIconStyles}
          source={require('../assets/images/Cherchons-btn.png')}
        />
      </TouchableOpacity>
      <Paragraph style={styles.paraStyle}>
        Nous listons les 320,052,000 propriétés {'\n'}et grandissons
      </Paragraph>
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.image}
      />
    </View>
  </Background>
);

export default memo(Dashboard);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  paraStyle: {
    marginBottom: 10,
  },
  menuContainer: {
    flex: 1,
    top: getStatusBarHeight(),
    left: 10,
  },
  bellContainer: {
    top: getStatusBarHeight(),
    right: 10,
  },
  BellImage: {
    width: 20,
    height: 20,
  },
  btnContainer: {
    justifyContent: 'flex-end',
  },
  imageIconStyles: {
    width: 350,
    height: 80,
  },
  image: {
    width: 160,
    height: 130,
    alignSelf: 'center',
    marginVertical: '40%',
  },
});
