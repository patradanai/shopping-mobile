import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import FastImage from 'react-native-fast-image';

const NoOrder = () => {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={require('../../assets/image/no_order.jpeg')}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text>No Order Yet</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});

export default NoOrder;
