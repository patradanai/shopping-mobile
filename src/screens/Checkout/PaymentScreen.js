/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';

const listPayment = [
  {name: 'COD'},
  {name: 'Paypal'},
  {name: 'Debit/Credit Card'},
  {name: 'Bank Account'},
];

const PaymentScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.paymentContainer}>
        <Text style={styles.textPayment}>Pay by</Text>
      </View>
      <View>
        <Button
          title="Continue to Confirm"
          icon={
            <Icon name="arrow-forward-outline" type="ionicon" color="#fff" />
          }
          iconRight={true}
          buttonStyle={styles.ButtonStyle}
          onPress={() => props.jumpTo(2)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paymentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  textPayment: {
    fontSize: 20,
    fontWeight: '600',
  },
  ButtonStyle: {height: 64, backgroundColor: '#2db2ff'},
});

export default PaymentScreen;
