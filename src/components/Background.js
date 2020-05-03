import React, {memo} from 'react';
import {ImageBackground, StyleSheet, KeyboardAvoidingView} from 'react-native';

const Background = ({children}) => (
  <ImageBackground
    source={require('../assets/images/background.png')}
    style={styles.container}>
    <KeyboardAvoidingView style={styles.image} behavior="padding">
      {children}
    </KeyboardAvoidingView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  image: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);
