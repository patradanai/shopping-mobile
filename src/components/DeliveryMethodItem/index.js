/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';

// Width

const DeliveryMethodItem = ({name, price}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold'}}>{price}</Text>
      <Text>{name}</Text>
    </View>
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
});

export default DeliveryMethodItem;
