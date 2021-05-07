import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {Text, Image} from 'react-native-elements';
import FastImage from 'react-native-fast-image';

const EmptyCart = () => {
  return (
    <View style={styles.container}>
      <FastImage
        source={require('../../assets/image/empty-cart.png')}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text>Cart is Empty</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width: 200,
    height: 200,

    marginVertical: 10,
    backgroundColor: 'transparent',
  },
});

export default EmptyCart;
