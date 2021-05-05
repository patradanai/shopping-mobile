/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useContext} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {Context} from '../context/shippingContext';
import EmptyCart from '../components/EmptyCart';
import Loading from '../components/Loading';
import CartItem from '../components/CartItem';
import Axios from '../utils/lib/api/shipping';

const CartScreen = ({navigation}) => {
  const [isLoading, setIsloading] = useState(false);
  const context = useContext(Context);

  const fetchGetCart = () => {
    const token = context.state.token;

    if (token) {
      setIsloading(true);
      Axios.get('/db_cart/cart', {
        headers: {authorization: `Bearer ${token}`},
      })
        .then(res => {
          //set Cart
          context.setCart(res.data.data);
          console.log(res.data.data);
          setIsloading(false);
        })
        .catch(err => {
          console.log(err);
          setIsloading(false);
        });
    }
  };

  const postCart = () => {
    const token = context.state.token;

    if (token) {
      Axios.post(
        '/db_cart/cart',
        {},
        {headers: {authorization: `Bearer ${token}`}},
      );
    }
  };

  // Fetch Cart
  useEffect(() => {
    fetchGetCart();
  }, [navigation]);

  if (!context.state?.cart[0]?.subTotal > 0) {
    return <EmptyCart />;
  }

  const product = context.state?.cart[0];

  return (
    <View style={styles.container}>
      {/* Loading */}
      <Loading state={isLoading} />

      {/* ListCart */}
      <ScrollView>
        <View>
          {product?.Products.map((data, index) => (
            <CartItem product={data} key={index} />
          ))}
        </View>
      </ScrollView>
      {/* Checkout */}

      <View style={styles.checkoutContainer}>
        {/* Total */}
        <View style={styles.toalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalText}>{product.subTotal}$</Text>
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

export default CartScreen;
