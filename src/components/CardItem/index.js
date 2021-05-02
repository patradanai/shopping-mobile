/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Image, Text} from 'react-native-elements';

const cols = 2;
const marginHorizontal = 4;
const width = Dimensions.get('window').width; // Width Screen

const CartItems = props => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        {/* Image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri:
                'https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/0/47/Gubi_Beetle-Chair-mit-Stoff-und-Gestell-schwarz_1515x1515-ID572442-a40195c7e75264b6a6309e1e0ffa09f7.jpg',
            }}
          />
        </View>
        {/* Content */}
        <View style={styles.textContainer}>
          <Text numberOfLines={1} style={{fontSize: 18, fontWeight: '500'}}>
            Modern Chair
          </Text>
          <Text
            numberOfLines={1}
            style={{fontSize: 15, fontWeight: '700', marginVertical: 1}}>
            200$
          </Text>
          <Text
            numberOfLines={1}
            style={{
              fontSize: 15,
              fontWeight: '400',
              color: '#a7a7a7',
              marginVertical: 1,
            }}>
            Desc
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
