/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Text, Image} from 'react-native-elements';

const width = Dimensions.get('window').width; //full width
const height = Dimensions.get('window').height; //full width

const OrderStatusItem = props => {
  console.log(props.order);
  return (
    <View style={styles.container}>
      {/* Image and Desc */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          alignSelf: 'stretch',
        }}>
        {/* Image */}
        <Image
          style={styles.image}
          source={
            props.order?.Products[0]?.imageSrc
              ? {uri: props.order?.Products[0]?.imageSrc}
              : require('../../assets/image/no_product.png')
          }
        />
        {/* title , category, buttom */}
        <View style={styles.detailsContainer}>
          <View>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              {props.order?.Products[0].name}
            </Text>
            <Text style={{fontSize: 13, color: '#a7a7a7'}}>
              {props.product?.Category?.name}
            </Text>
          </View>
          <TouchableOpacity>
            <View style={styles.viewmoreContainer}>
              <Text style={{fontSize: 13, fontWeight: '500', color: '#b2b2b2'}}>
                View more
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* Order Id, Status , total */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'stretch',
        }}>
        <Text style={styles.textTitle}>Order Id</Text>
        <Text style={styles.textSubTitle}>#{props.order?.id}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'stretch',
        }}>
        <Text style={styles.textTitle}>Total Amount</Text>
        <Text style={styles.textSubTitle}>
          {props.order?.grandTotal?.toFixed(2)}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'stretch',
        }}>
        <Text style={styles.textTitle}>Status</Text>
        <Text style={styles.textSubTitle}>Pending</Text>
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
    borderRadius: 10,
    marginRight: 10,
  },
  container: {
    height: height * 0.2,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  detailsContainer: {
    width: width * 0.4,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  viewmoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastContainer: {
    height: '100%',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  textTitle: {
    fontSize: 15,
    color: '#b2b2b2',
  },
  textSubTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default OrderStatusItem;
