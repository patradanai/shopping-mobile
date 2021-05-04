/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text, Image} from 'react-native-elements';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full width

const OrderItem = props => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={{
          uri:
            'https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/0/47/Gubi_Beetle-Chair-mit-Stoff-und-Gestell-schwarz_1515x1515-ID572442-a40195c7e75264b6a6309e1e0ffa09f7.jpg',
        }}
      />
      {/* title , category, buttom */}
      <View style={styles.detailsContainer}>
        <View>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>Pink Chair</Text>
          <Text style={{fontSize: 13, color: '#a7a7a7'}}>Modern</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Text style={{fontSize: 13, fontWeight: 'bold', marginHorizontal: 5}}>
            300$
          </Text>
        </View>
      </View>

      {/* cancel & price */}
      <View style={styles.lastContainer}>
        <Text
          style={{
            fontSize: 13,
            fontWeight: 'bold',
            borderWidth: 1,
            padding: 8,
            borderRadius: 5,
          }}>
          1
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width * 0.2,
    height: width * 0.2,
    resizeMode: 'contain',
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

export default OrderItem;
