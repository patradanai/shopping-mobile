import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import NoOrder from '../../components/NoOrder';

const CompletedOrderScreen = props => {
  if (!props.order?.length > 0) {
    return <NoOrder />;
  }
  return (
    <View>
      <Text>CompletedOrder</Text>
    </View>
  );
};

export default CompletedOrderScreen;
