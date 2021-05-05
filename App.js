/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from './src/context/shippingContext';
import Routes from './src/routes';

const App = () => {
  return (
    <Provider>
      <SafeAreaProvider>
        <Routes />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
