import React, {useContext, useEffect, useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Context} from '../context/shippingContext';
import WishList from '../components/WishList';
import WishListItem from '../components/WishListItem';
import Axios from '../utils/lib/api/shipping';

const WishListScreen = ({navigation}) => {
  const context = useContext(Context);
  const token = context.state.token;

  const onClickProduct = productId => {
    navigation.navigate('item', {productId: productId});
  };

  useLayoutEffect(() => {
    if (!token) {
      navigation.replace('signin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  useEffect(() => {
    if (token) {
      Axios.get('db_wish/wish', {
        headers: {Authorization: `Bearer ${token}`},
      })
        .then(res => {
          context.setWishlist(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  if (!context.state?.wishlist?.length > 0) {
    return <WishList />;
  }

  return (
    <View style={styles.container}>
      {context.state?.wishlist.map((data, index) => (
        <WishListItem wishlist={data} key={index} onClick={onClickProduct} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WishListScreen;
