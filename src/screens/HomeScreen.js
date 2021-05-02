/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button, Text} from 'react-native-elements';
import CardItem from '../components/CardItem';
import CategoryItem from '../components/CategoryItem';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <CategoryItem />
      </View>
      {/* Item */}
      <ScrollView style={{flex: 1}}>
        <View style={styles.itemContainer}>
          <CardItem navigation={navigation} />
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
