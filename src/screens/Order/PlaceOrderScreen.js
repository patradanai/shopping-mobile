import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import NoOrder from '../../components/NoOrder';

const PlaceOrderScreen = props => {
  if (!props.order?.length > 0) {
    return <NoOrder />;
  }
  return (
    <View>
      <Text>PlaceOrder</Text>
    </View>
  );
};

export default PlaceOrderScreen;
