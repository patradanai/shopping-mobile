import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Image} from 'react-native-elements';

const WishList = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/21452079141582962144-128.png')}
        style={styles.image}
      />
      <Text>Wishlist is empty</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  image: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    marginVertical: 20,
  },
});

export default WishList;
