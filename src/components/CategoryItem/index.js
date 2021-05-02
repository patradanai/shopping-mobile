import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Categoryitem = () => {
  return (
    <View style={styles.container}>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Categoryitem;
