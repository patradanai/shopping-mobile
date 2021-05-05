import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {Context} from '../context/shippingContext';
import WishList from '../components/WishList';

const WishListScreen = () => {
  const context = useContext(Context);

  if (!context.state?.wishlist?.length > 0) {
    return <WishList />;
  }
  return (
    <View>
      <Text>WishListScreen</Text>
    </View>
  );
};

export default WishListScreen;
