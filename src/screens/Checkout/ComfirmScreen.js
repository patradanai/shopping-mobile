/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';
import OrderItem from '../../components/OrderItem';

const ConfirmScreen = props => {
  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1, width: '100%'}}>
        <View style={{flex: 1, alignSelf: 'stretch'}}>
          {/* Shipping */}
          <View style={styles.containerContent}>
            <View style={styles.containerInnerContent}>
              <Text style={{fontWeight: 'bold'}}>SHIPPING TO:</Text>
              <TouchableOpacity>
                <Text style={{color: 'blue'}}>EDIT</Text>
              </TouchableOpacity>
            </View>
            <Text>Patradanai Nakpimay</Text>
            <Text>44 M.4 T.Donpao A.Meawang Chiangmai 50360</Text>
          </View>

          {/* Payment */}
          <View style={styles.containerContent}>
            <View style={styles.containerInnerContent}>
              <Text style={{fontWeight: 'bold'}}>PAYMENT BY:</Text>
              <TouchableOpacity>
                <Text style={{color: 'blue'}}>EDIT</Text>
              </TouchableOpacity>
            </View>
            <Text>Cash on Delivery ( COD )</Text>
          </View>

          {/* Orders */}
          <View style={styles.containerContent}>
            <View style={styles.containerInnerContent}>
              <Text style={{fontWeight: 'bold'}}>ORDERS:</Text>
              <TouchableOpacity>
                <Text style={{color: 'blue'}}>EDIT</Text>
              </TouchableOpacity>
            </View>
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </View>
        </View>
      </ScrollView>
      {/* Button */}
      <View style={styles.containerButton}>
        {/* Sub */}
        <View style={styles.subContainer}>
          <Text style={styles.subText}>SubTotal</Text>
          <Text style={styles.subText}>302$</Text>
        </View>
        {/* Shipping */}
        <View style={styles.subContainer}>
          <Text style={styles.subText}>Shipping & handling</Text>
          <Text style={styles.subText}>+30$</Text>
        </View>
        {/* Total */}
        <View style={styles.toalContainer}>
          <Text style={styles.totalText}>Total Amount</Text>
          <Text style={styles.totalText}>302$</Text>
        </View>
        <Button
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
