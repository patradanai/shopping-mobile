import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text} from 'react-native-elements';

// Width

const width = Dimensions.get('window').width;

const col = 2;
const marginHorizontal = 4;

const PaymentItem = props => {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,

    width: width / col - marginHorizontal * (col * 2),
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#eaeaea',
    borderRadius: 10,
  },
});

export default PaymentItem;
