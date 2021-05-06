/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';

// Width

const DeliveryMethodItem = ({index, name, price, onPress, state}) => {
  return (
    <TouchableOpacity onPress={() => onPress(index, name, price)}>
      <View style={state === index ? styles.containerActive : styles.container}>
        <Text style={state === index ? styles.textActive : styles.text}>
          {price}
        </Text>
        <Text style={state === index ? styles.textActive : styles.text}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eaeaea',
    borderRadius: 10,
    width: 150,
    height: 80,
    marginHorizontal: 5,
  },
  text: {fontWeight: 'bold'},
  textActive: {
    color: 'orange',
  },
  containerActive: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    color: 'orange',
    borderColor: 'orange',
    borderRadius: 10,
    width: 150,
    height: 80,
    marginHorizontal: 5,
  },
});

export default DeliveryMethodItem;
