import React, {memo} from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo = () => (
  <Image source={require('../assets/images/logo.png')} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 160,
    height: 130,
    alignSelf: 'center',
    marginVertical: '40%',
  },
});

export default memo(Logo);
