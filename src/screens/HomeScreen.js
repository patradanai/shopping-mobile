/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import CardItem from '../components/CardItem';
import CategoryItem from '../components/CategoryItem';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
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
