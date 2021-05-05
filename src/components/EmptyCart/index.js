import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Image} from 'react-native-elements';

const EmptyCart = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/empty-cart.png')}
        style={styles.image}
      />
      <Text>Cart is Empty</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginVertical: 10,
  },
});

export default EmptyCart;
