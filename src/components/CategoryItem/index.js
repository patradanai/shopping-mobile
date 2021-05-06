import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';

const Categoryitem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}></View>
      <Text style={styles.textTitle}>Modern</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
  containerInner: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginHorizontal: 10,
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
  textTitle: {marginTop: 5, fontSize: 15, fontWeight: '600'},
});

export default Categoryitem;
