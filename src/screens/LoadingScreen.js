/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Text} from 'react-native-elements';

const LoadingScreen = ({navigation}) => {
  // Get token
  const getToken = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // value previously stored
        navigation.replace('tab');
      }
    } catch (e) {
      // error reading value
    }
  }, [navigation]);

  useEffect(() => {
    setTimeout(async () => {
      await getToken();
    }, 1000);
  }, [getToken]);

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Welcome Back...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default LoadingScreen;
