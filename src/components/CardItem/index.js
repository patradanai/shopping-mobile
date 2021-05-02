/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Image, Text} from 'react-native-elements';

const cols = 2;
const marginHorizontal = 4;
const width = Dimensions.get('window').width; // Width Screen

const CartItems = props => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/0/47/Gubi_Beetle-Chair-mit-Stoff-und-Gestell-schwarz_1515x1515-ID572442-a40195c7e75264b6a6309e1e0ffa09f7.jpg',
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={{fontSize: 15, fontWeight: '700'}}>Modern Chair</Text>
        <Text>Price</Text>
        <Text>Desc</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / cols - marginHorizontal * (cols + 1),
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 160,
    marginBottom: 5,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'center',
  },
  textContainer: {
    padding: 15,
  },
});

export default CartItems;
