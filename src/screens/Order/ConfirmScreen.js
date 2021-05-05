import React from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import NoOrder from '../../components/NoOrder';

const ConfirmScreen = props => {
  if (!props.order?.length > 0) {
    return <NoOrder />;
  }
  return (
    <View>
      <Text>ConfirmScreens</Text>
    </View>
  );
};

export default ConfirmScreen;
