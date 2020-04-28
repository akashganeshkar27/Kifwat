import React, { memo } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { theme } from '../core/theme';

const SkipButton = ({ goNext}) => (
  <TouchableOpacity onPress={goNext} style={styles.container}>
    <Text style={styles.textStyles}>Sauter</Text>
    <Image source={require('../assets/images/arrow_forward.png')} style={styles.image} />
    <Image source={require('../assets/images/arrow_forward.png')} style={styles.image} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },
  textStyles: {
    color: theme.colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    right: 20,
  },
  image: {
    width: 10,
    height: 10,
    alignSelf: 'flex-end',
    right: 10,
    marginBottom: 4,
  },
});

export default memo(SkipButton);
