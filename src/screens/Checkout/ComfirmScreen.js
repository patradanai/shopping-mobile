import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';

const ConfirmScreen = props => {
  return (
    <View style={styles.container}>
      <Text>ConfirmScreen</Text>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ConfirmScreen;
