/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import CardItem from '../components/CardItem';
import CategoryItem from '../components/CategoryItem';
import CarouselItem from '../components/Carousel';
import Axios from '../utils/lib/api/shipping';

const carouselItems = [
  {
    title: 'Favourites landscapes 1',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/SsJmZ9jl.jpg',
  },
  {
    title: 'Favourites landscapes 2',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/5tj6S7Ol.jpg',
  },
  {
    title: 'Favourites landscapes 3',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat',
    illustration: 'https://i.imgur.com/pmSqIFZl.jpg',
  },
  {
    title: 'Favourites landscapes 4',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/cA8zoGel.jpg',
  },
  {
    title: 'Favourites landscapes 5',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/pewusMzl.jpg',
  },
  {
    title: 'Favourites landscapes 6',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat',
    illustration: 'https://i.imgur.com/l49aYS3l.jpg',
  },
];

const Home = ({route, navigation}) => {
  const [products, setProducts] = useState(null);
  // Fectchinh Product
  useEffect(() => {
    Axios.get('/db_product/products')
      .then(res => setProducts(res.data.data))
      .catch(err => console.log(err));
  }, []);

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
            {products?.map((data, index) => (
              <CardItem navigation={navigation} key={index} data={data} />
            ))}
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
