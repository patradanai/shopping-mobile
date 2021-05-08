/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';
import FastImage from 'react-native-fast-image';

const OrderConfirmScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <FastImage
          style={styles.image}
          source={require('../assets/image/check.png')}
          resizeMode={FastImage.resizeMode.cover}
        />
        <Text style={styles.textTitle}>Order Comfirmed</Text>
        <Text style={styles.textSub}>
          Your order is confirmed and will be its on way soon
        </Text>
      </View>

      <Button
        title="Next"
        containerStyle={{marginBottom: 20}}
        buttonStyle={{width: 200, borderRadius: 20}}
        titleStyle={{textTransform: 'uppercase', fontWeight: '600'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  containerText: {
    flex: 1,

    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },

  textTitle: {
    marginTop: 30,
    fontSize: 23,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  textSub: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
  },
  image: {
    width: 120,
    aspectRatio: 1,
    marginVertical: 10,
  },
});

export default OrderConfirmScreen;
