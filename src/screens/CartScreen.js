/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useContext, useCallback} from 'react';
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
  const token = context.state.token;

  const fetchGetCart = () => {
    if (token) {
      setIsloading(true);
      Axios.get('/db_cart/cart', {
        headers: {authorization: `Bearer ${token}`},
      })
        .then(res => {
          //set Cart
          context.setCart(res.data.data);
          console.log(res.data.data?.Products[0]?.CartProduct?.quantity);
          setIsloading(false);
        })
        .catch(err => {
          console.log(err);
          setIsloading(false);
        });
    }
  };

  const updateQuantityProduct = (productId, quantity) => {
    if (token) {
      Axios.post(
        '/db_cart/cart',
        {productId: productId, quantity: quantity},
        {headers: {authorization: `Bearer ${token}`}},
      )
        .then(() => {
          fetchGetCart();
        })
        .catch(err => {
          console.log(err);
          setIsloading(false);
        });
    }
  };

  // Fetch Cart
  useEffect(() => {
    fetchGetCart();
  }, [navigation]);

  if (!context.state?.cart?.Products.length > 0) {
    return <EmptyCart />;
  }

  return (
    <View style={styles.container}>
      {/* Loading */}
      <Loading state={isLoading} />

      {/* ListCart */}
      <ScrollView>
        <View>
          {context.state?.cart?.Products.map((data, index) => (
            <CartItem
              product={data}
              key={index}
              handleQuantity={updateQuantityProduct}
            />
          ))}
        </View>
      </ScrollView>
      {/* Checkout */}

      <View style={styles.checkoutContainer}>
        {/* Total */}
        <View style={styles.toalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalText}>{context.state?.cart.subTotal}$</Text>
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
