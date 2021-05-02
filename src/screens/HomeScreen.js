import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button, Text} from 'react-native-elements';
import CardItem from '../components/CardItem';

const Home = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <View style={styles.itemContainer}>
          <CardItem />
          <CardItem />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
