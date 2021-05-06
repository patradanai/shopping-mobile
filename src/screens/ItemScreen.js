/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useLayoutEffect, useContext} from 'react';
import {Context} from '../context/shippingContext';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text, Button, Icon, Image} from 'react-native-elements';
import Loading from '../components/Loading';
import Axios from '../utils/lib/api/shipping';

// Get Width
const width = Dimensions.get('window').width;

const ItemScreen = ({route, navigation}) => {
  const context = useContext(Context);
  const {productId} = route.params;
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const token = context.state.token;

  // set Layout
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Product',
    });
  }, [navigation]);

  // fetch product
  useEffect(() => {
    if (productId) {
      setIsLoading(true);
      setTimeout(() => {
        Axios.get(`/db_product/product/${productId}`)
          .then(res => {
            setProduct(res.data.data);
            setIsLoading(false);
          })
          .catch(err => {
            console.log(err);
            setIsLoading(false);
          });
      }, 500);
    }
  }, [productId]);

  const addWishList = () => {
    if (product) {
      // Add product to wish
      context.setWishlist(product);
    }
  };

  /**
   * Get All product in cart
   */
  const fetchGetCart = () => {
    if (token) {
      setIsLoading(true);
      Axios.get('/db_cart/cart', {
        headers: {authorization: `Bearer ${token}`},
      })
        .then(res => {
          //set Cart
          context.setCart(res.data.data);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  /**
   * Post quanlity to Cart
   */
  const addCartProduct = () => {
    if (token && productId) {
      setIsLoading(true);
      setTimeout(() => {
        Axios.post(
          '/db_cart/cart',
          {
            productId: productId,
            quantity: 1,
          },
          {headers: {authorization: `Bearer ${token}`}},
        )
          .then(res => {
            fetchGetCart();
          })
          .catch(err => {
            console.log(err);
            setIsLoading(false);
          });
      }, 500);
    }
  };

  // if (isLoading) {
  //   return <Loading state={isLoading} />;
  // }

  return (
    <View style={styles.container}>
      {/* Loading */}
      <Loading state={isLoading} />

      {/* Product */}
      <View style={styles.containerItem}>
        <Text h3 style={{fontWeight: 'bold', marginTop: 10}}>
          {product?.name}
        </Text>
        <Image
          style={styles.image}
          source={
            product?.imageSrc
              ? {uri: product?.imageSrc}
              : require('../assets/image/no_product.png')
          }
        />
        <View style={{height: 120, width: '95%'}}>
          <Text numberOfLines={5} style={styles.textDesc}>
            {product?.description}
          </Text>
        </View>
        <Text h4 style={{fontWeight: 'bold'}}>
          ${product?.price}
        </Text>
      </View>

      {/* Add to Cart and Wishlist */}
      <View style={styles.containerBottom}>
        <Button
          onPress={addCartProduct}
          title="Add to Cart"
          buttonStyle={[
            styles.buttonCart,
            {width: width * 0.75, backgroundColor: '#000'},
          ]}
        />
        <Button
          onPress={addWishList}
          icon={<Icon name="heart-outline" type="ionicon" color="#fff" />}
          buttonStyle={[
            styles.buttonCart,
            {width: width * 0.2, backgroundColor: '#f4511e'},
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerItem: {
    flex: 1,
    alignItems: 'center',
  },
  containerBottom: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonCart: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  textDesc: {
    fontSize: 16,
    paddingHorizontal: 40,
    marginVertical: 10,
  },
});

export default ItemScreen;
