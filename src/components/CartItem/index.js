/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text, Image, Icon} from 'react-native-elements';

const width = Dimensions.get('window').width; //full width

const CartItem = props => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        style={styles.image}
        source={
          props?.product?.imageSrc
            ? {uri: props?.product?.imageSrc}
            : require('../../assets/image/no_product.png')
        }
      />
      {/* title , category, buttom */}
      <View style={styles.detailsContainer}>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {props.product?.name}
          </Text>
          <Text style={{fontSize: 15, color: '#a7a7a7'}}>
            {props.product.Category?.name}
          </Text>
        </View>
        <View style={styles.quantityContainer}>
          <Icon
            reverse
            name="minus"
            type="antdesign"
            size={12}
            color="#f7ba6f"
            onPress={() =>
              props.handleQuantity(
                props.product?.id,
                props.product?.CartProduct?.quantity,
                -1,
              )
            }
          />
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'bold',
              marginHorizontal: 5,
              width: 20,
              textAlign: 'center',
            }}>
            {props.product?.CartProduct?.quantity}
          </Text>
          <Icon
            reverse
            name="plus"
            type="antdesign"
            size={12}
            color="#f7ba6f"
            onPress={() =>
              props.handleQuantity(
                props.product?.id,
                props.product?.CartProduct?.quantity,
                1,
              )
            }
          />
        </View>
      </View>

      {/* cancel & price */}
      <View style={styles.lastContainer}>
        <Icon
          name="closesquare"
          type="antdesign"
          size={25}
          color="#000"
          onPress={() => props.handleDelete(props.product?.id)}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          {props.product?.CartProduct?.quantity * props.product?.price}$
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: width * 0.3,
    resizeMode: 'cover',
    aspectRatio: 1,
  },
  container: {
    width: width - 20,
    margin: 10,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#cccccc',
    paddingBottom: 10,
    justifyContent: 'center',
  },
  detailsContainer: {
    width: width * 0.4,
    paddingVertical: 10,
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastContainer: {
    width: width * 0.2,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingBottom: 20,
  },
});

export default CartItem;
