import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {navigate} from '../../routes/navigateRef';
const Categoryitem = props => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigate('Categories', {
            categoryId: props.data?.id,
            name: props.data?.name,
          })
        }>
        <View style={styles.containerInner}>
          <FastImage
            style={styles.image}
            source={{
              uri:
                'http://localhost:4000/images/categories/' +
                props.data?.imageSrc,
              priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.textTitle} numberOfLines={3}>
        {props.data?.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', width: 100},
  containerInner: {
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    width: 80,
    height: 80,
    borderRadius: 50,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textTitle: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'contain',
  },
});

export default Categoryitem;
