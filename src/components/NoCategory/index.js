import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import FastImage from 'react-native-fast-image';

const NoCategory = () => {
  return (
    <View style={styles.container}>
      <FastImage
        style={styles.image}
        source={require('../../assets/image/empty_category.png')}
        resizeMode={FastImage.resizeMode.cover}
      />
      <Text>Category don't have products yet</Text>
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

export default NoCategory;
