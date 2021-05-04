import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text} from 'react-native-elements';

// Width

const width = Dimensions.get('window').width;

const col = 2;
const marginHorizontal = 4;

const PaymentItem = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eaeaea',
    width: width / col - marginHorizontal * (col * 2),
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
  },
});

export default PaymentItem;
