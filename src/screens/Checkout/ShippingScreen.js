import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';

const ShippingScreen = props => {
  return (
    <View style={styles.container}>
      <Text>ShippingScreen</Text>
      <View style={{flex: 1}}></View>
      <View>
        <Button
          title="Continue to Payments"
          icon={
            <Icon name="arrow-forward-outline" type="ionicon" color="#fff" />
          }
          iconRight={true}
          buttonStyle={styles.ButtonStyle}
          onPress={() => props.jumpTo(1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ButtonStyle: {height: 64, backgroundColor: '#2db2ff'},
});

export default ShippingScreen;
