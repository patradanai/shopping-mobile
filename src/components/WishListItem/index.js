/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text, Image, Icon} from 'react-native-elements';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full width

const WishListItem = props => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={
          props?.wishlist?.imageSrc
            ? {uri: props?.wishlist?.imageSrc}
            : require('../../assets/image/no_product.png')
        }
      />
      {/* title , category, buttom */}
      <View style={styles.detailsContainer}>
        <View>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            {props?.wishlist?.name}
          </Text>
          <Text style={{fontSize: 13, color: '#a7a7a7'}}>
            {props?.wishlist?.Category?.name}
          </Text>
        </View>
        <View style={styles.quantityContainer}>
          <Text style={{fontSize: 13, fontWeight: 'bold', marginHorizontal: 5}}>
            {props?.wishlist?.price}$
          </Text>
        </View>
      </View>

      {/* cancel & price */}
      <View style={styles.lastContainer}>
        <Icon
          name="cart-outline"
          type="ionicon"
          reverse
          color="orange"
          size={20}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width * 0.25,
    resizeMode: 'cover',
    aspectRatio: 1,
  },
  container: {
    height: height * 0.13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    borderBottomWidth: 2,
    borderColor: '#cccccc',
    paddingVertical: 10,
  },
  detailsContainer: {
    width: width * 0.4,
    height: '100%',
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastContainer: {
    height: '100%',
    justifyContent: 'center',
    paddingVertical: 10,
  },
});

export default WishListItem;
