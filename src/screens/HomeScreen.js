/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import CardItem from '../components/CardItem';
import CategoryItem from '../components/CategoryItem';
import CarouselItem from '../components/Carousel';

const carouselItems = [
  {
    title: 'Item 1',
    text: 'Text 1',
  },
  {
    title: 'Item 2',
    text: 'Text 2',
  },
  {
    title: 'Item 3',
    text: 'Text 3',
  },
  {
    title: 'Item 4',
    text: 'Text 4',
  },
  {
    title: 'Item 5',
    text: 'Text 5',
  },
];

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        {/* Carousel */}
        <CarouselItem entries={carouselItems} />
        {/* Category */}
        <View style={{alignSelf: 'stretch', marginTop: 10}}>
          <Text style={styles.textHeader}>Categories</Text>
          <View style={{height: 120}}>
            <ScrollView
              horizontal
              contentContainerStyle={{flexGrow: 1}}
              style={{flex: 1}}>
              <View style={styles.categoryContainer}>
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
                <CategoryItem />
              </View>
            </ScrollView>
          </View>
        </View>
        {/* Item */}
        <View style={{alignSelf: 'stretch', flex: 1, marginTop: 10}}>
          <Text style={styles.textHeader}>Products</Text>

          <View style={styles.itemContainer}>
            <CardItem navigation={navigation} />
            <CardItem navigation={navigation} />
            <CardItem navigation={navigation} />
            <CardItem navigation={navigation} />
            <CardItem navigation={navigation} />
            <CardItem navigation={navigation} />
          </View>
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
  categoryContainer: {
    flexDirection: 'row',
  },
  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default Home;
