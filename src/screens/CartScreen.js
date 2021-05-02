/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Button, Text} from 'react-native-elements';
import CartItem from '../components/CartItem';

var width = Dimensions.get('window').width; //full width

const Cart = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <CartItem />
          <CartItem />
        </View>
      </ScrollView>
      {/* Checkout */}

      <View style={styles.checkoutContainer}>
        {/* Total */}
        <View style={styles.toalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalText}>302$</Text>
        </View>
        <Button
          title="Checkout"
          buttonStyle={styles.checkoutButton}
          containerStyle={{width: '80%'}}
          onPress={() => navigation.navigate('checkout')}
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
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  totalText: {
    fontSize: 25,
    fontWeight: '700',
  },
  checkoutContainer: {alignItems: 'center'},
  checkoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});

export default Cart;
