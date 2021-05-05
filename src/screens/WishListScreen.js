import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {Context} from '../context/shippingContext';
import WishList from '../components/WishList';
import WishListItem from '../components/OrderItem';

const WishListScreen = () => {
  const context = useContext(Context);

  if (!context.state?.wishlist?.length > 0) {
    return <WishList />;
  }
  return (
    <View style={styles.container}>
      {context.state?.wishlist.map((data, index) => (
        <WishListItem />
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
