import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';

const Categoryitem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}></View>
      <Text style={styles.textTitle} numberOfLines={3}>
        {props.data?.name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', width: 100},
  containerInner: {
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
});

export default Categoryitem;
