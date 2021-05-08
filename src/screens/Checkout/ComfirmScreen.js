/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useState} from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';
import {Context} from '../../context/shippingContext';
import OrderItem from '../../components/OrderItem';
import Axios from '../../utils/lib/api/shipping';
import * as RootNavigation from '../../routes/navigateRef';
import Loading from '../../components/Loading';
import {navigateReplace} from '../../routes/navigateRef';

const ConfirmScreen = props => {
  const context = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const token = context.state.token;

  // post placeorder POST /db_order/order
  const handlePlaceOrder = () => {
    if (token) {
      setIsLoading(true);
      Axios.post(
        '/db_order/order',
        {
          orderStatusId: 1,
          paymentId: 1,
          name: context.state.order?.profile?.name,
          phone: context.state.order?.profile?.phone,
          shippingMethodId: 1,
          shippingAddress: context.state.order?.shippingAddress?.Address,
          subTotal: context.state.order?.subTotal,
          grandTotal: context.state.order?.grandTotal,
        },
        {headers: {authorization: `Bearer ${token}`}},
      )
        .then(res => {
          setIsLoading(false);

          // Redirect Screen
          navigateReplace('orderconfirm');
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
        });
    }
  };

  return (
    <View style={styles.container}>
      <Loading state={isLoading} />
      <ScrollView style={{flex: 1, width: '100%'}}>
        <View style={{flex: 1, alignSelf: 'stretch'}}>
          {/* Shipping */}
          <View style={styles.containerContent}>
            <View style={styles.containerInnerContent}>
              <Text style={{fontWeight: 'bold'}}>SHIPPING TO:</Text>
              <TouchableOpacity onPress={() => props.jumpTo(0)}>
                <Text style={{color: 'blue'}}>EDIT</Text>
              </TouchableOpacity>
            </View>
            <Text style={{textTransform: 'uppercase'}}>
              {context.state.order?.profile?.name}
            </Text>
            <Text numberOfLines={1}>
              {context.state.order?.shippingAddress?.address}
            </Text>
          </View>

          {/* Payment */}
          <View style={styles.containerContent}>
            <View style={styles.containerInnerContent}>
              <Text style={{fontWeight: 'bold'}}>PAYMENT BY:</Text>
              <TouchableOpacity onPress={() => props.jumpTo(1)}>
                <Text style={{color: 'blue'}}>EDIT</Text>
              </TouchableOpacity>
            </View>
            <Text>{context.state.order?.payment?.name}</Text>
          </View>

          {/* Orders */}
          <View style={styles.containerContent}>
            <View style={styles.containerInnerContent}>
              <Text style={{fontWeight: 'bold'}}>ORDERS:</Text>
              <TouchableOpacity onPress={() => RootNavigation.navigate('cart')}>
                <Text style={{color: 'blue'}}>EDIT</Text>
              </TouchableOpacity>
            </View>
            {context.state.cart?.Products?.map((data, index) => (
              <OrderItem product={data} key={index} />
            ))}
          </View>
        </View>
      </ScrollView>
      {/* Button */}
      <View style={styles.containerButton}>
        {/* Sub */}
        <View style={styles.subContainer}>
          <Text style={styles.subText}>SubTotal</Text>
          <Text style={styles.subText}>{context.state.order?.subTotal}฿</Text>
        </View>
        {/* Shipping */}
        <View style={styles.subContainer}>
          <Text style={styles.subText}>
            Shipping & handling ( {context.state.order?.shippingMethod?.name} )
          </Text>
          <Text style={styles.subText}>
            +{context.state.order?.shippingMethod?.price}฿
          </Text>
        </View>
        {/* Total */}
        <View style={styles.toalContainer}>
          <Text style={styles.totalText}>Total Amount</Text>
          <Text style={styles.totalText}>
            {context.state.order?.grandTotal}$
          </Text>
        </View>
        <Button
          onPress={() => handlePlaceOrder()}
          title="Confirm & Pay"
          icon={
            <Icon name="arrow-forward-outline" type="ionicon" color="#fff" />
          }
          iconRight={true}
          buttonStyle={styles.ButtonStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  containerContent: {
    alignSelf: 'stretch',
    borderBottomWidth: 2,
    borderBottomColor: '#e0e0e0',
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  containerInnerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  containerButton: {
    paddingTop: 10,
    backgroundColor: 'rgba(243,243,244,1)',
    alignSelf: 'stretch',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  ButtonStyle: {height: 64, backgroundColor: '#2db2ff'},
  toalContainer: {
    height: 40,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  subContainer: {
    height: 25,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  subText: {
    fontSize: 13,

    color: '#878787',
  },
  totalText: {
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default ConfirmScreen;
