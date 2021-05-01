/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Button, Text} from 'react-native-elements';
import CartItem from '../components/CartItem';

var width = Dimensions.get('window').width; //full width

const Cart = () => {
  return (
    <View style={styles.container}>
      <View>
        <CartItem />
      </View>
      {/* Total */}
      <View style={styles.toalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalText}>302$</Text>
      </View>
      {/* Checkout */}

      <View style={styles.checkoutContainer}>
        <Button
          title="Checkout"
          buttonStyle={styles.checkoutButton}
          containerStyle={{width: '80%'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  toalContainer: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#a7a7a7',
    paddingHorizontal: 10,
  },
  totalText: {
    fontSize: 25,
    fontWeight: '700',
  },
  checkoutContainer: {
    width: width,
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  checkoutButton: {
    height: 55,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});

export default Cart;
