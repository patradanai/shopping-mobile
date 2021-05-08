/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Image, Text} from 'react-native-elements';
import FastImage from 'react-native-fast-image';

const cols = 2;
const marginHorizontal = 4;
const width = Dimensions.get('window').width; // Width Screen

const CartItems = props => {
  return (
    <TouchableOpacity
      onPress={() =>
        props.navigation.navigate('item', {productId: props.data?.id})
      }>
      <View style={styles.container}>
        {/* Image */}
        <View style={styles.imageContainer}>
          <FastImage
            style={styles.image}
            resizeMode={FastImage.resizeMode.contain}
            source={
              props.data?.imageSrc
                ? {
                    uri: props.data?.imageSrc,
                    priority: FastImage.priority.normal,
                  }
                : require('../../assets/image/no_product.png')
            }
          />
        </View>
        {/* Content */}
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={{fontSize: 18, fontWeight: '500'}}>
            {props.data?.name}
          </Text>
          <Text
            numberOfLines={1}
            style={{fontSize: 15, fontWeight: '700', marginVertical: 1}}>
            {props.data?.price}$
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 15,
              fontWeight: '400',
              color: '#a7a7a7',
              marginVertical: 1,
            }}>
            {props.data?.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / cols - marginHorizontal * (cols + 1),
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    marginVertical: 5,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 160,
    marginBottom: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 15,
  },
});

export default CartItems;
