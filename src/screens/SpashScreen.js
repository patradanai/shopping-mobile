import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>E-Shipping</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SplashScreen;
