import {StyleSheet} from 'react-native';
import * as Colors from './colors';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const style = StyleSheet.create({
  p: {
    color: 'black',
    fontFamily: 'Open Sans',
    fontSize: 14,
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
