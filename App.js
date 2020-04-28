import React from 'react';
import {Provider} from 'react-native-paper';
import AppWrapper from './src';
import {theme} from './src/core/theme';

const App = () => (
  <Provider theme={theme}>
    <AppWrapper />
  </Provider>
);

export default App;
