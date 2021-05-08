import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';

// Width

const width = Dimensions.get('window').width;

const col = 2;
const marginHorizontal = 4;

const PaymentItem = ({index, name, onPress, state}) => {
  return (
    <TouchableOpacity onPress={() => onPress(index, name)}>
      <View style={index === state ? styles.containerActive : styles.container}>
        <Text>{name}</Text>
      </View>
    </TouchableOpacity>
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
  containerActive: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: width / col - marginHorizontal * (col * 2),
    marginLeft: marginHorizontal,
    marginRight: marginHorizontal,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: 'orange',
    borderRadius: 10,
  },
});

export default PaymentItem;
