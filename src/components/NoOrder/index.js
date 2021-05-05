import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Image} from 'react-native-elements';

const NoOrder = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/image/no_order.jpeg')}
        style={styles.image}
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
    resizeMode: 'cover',
    marginVertical: 10,
  },
});

export default NoOrder;
