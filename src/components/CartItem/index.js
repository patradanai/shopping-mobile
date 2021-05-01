/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text, Image, Icon} from 'react-native-elements';

var width = Dimensions.get('window').width; //full width

const CartItem = props => {
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
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Pink Chair</Text>
          <Text style={{fontSize: 15, color: '#a7a7a7'}}>Modern</Text>
        </View>
        <View style={styles.quantityContainer}>
          <Icon
            reverse
            name="minus"
            type="antdesign"
            size={12}
            color="#f7ba6f"
          />
          <Text style={{fontSize: 15, fontWeight: 'bold', marginHorizontal: 5}}>
            1
          </Text>
          <Icon
            reverse
            name="plus"
            type="antdesign"
            size={12}
            color="#f7ba6f"
          />
        </View>
      </View>

      {/* cancel & price */}
      <View style={styles.lastContainer}>
        <Icon name="closesquare" type="antdesign" size={25} color="#000" />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>300$</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width / 3,
    height: width / 3,
  },
  container: {
    width: width - 20,
    margin: 10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#cccccc',
    paddingBottom: 10,
  },
  detailsContainer: {
    width: width * 0.45,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastContainer: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 20,
  },
});

export default CartItem;
