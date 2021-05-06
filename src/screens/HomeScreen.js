/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useContext, useCallback} from 'react';
import {View, StyleSheet, ScrollView, FlatList} from 'react-native';
import {Text} from 'react-native-elements';
import CardItem from '../components/CardItem';
import {Context} from '../context/shippingContext';
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
  const context = useContext(Context);
  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const token = context.state.token;
  /**
   * Get All product in cart
   */
  const fetchGetCart = useCallback(() => {
    if (token) {
      Axios.get('/db_cart/cart', {
        headers: {authorization: `Bearer ${token}`},
      })
        .then(res => {
          //set Cart
          context.setCart(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    // Fectchinh Product
    Axios.get('/db_product/products')
      .then(res => setProducts(res.data.data))
      .catch(err => console.log(err));

    Axios.get('/db_category/categories')
      .then(res => {
        setCategories(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetchGetCart();
  }, [token, fetchGetCart]);

  const columnCount = categories?.length / 2;

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        {/* Carousel */}
        <CarouselItem entries={carouselItems} />
        {/* Category */}
        <View style={{alignSelf: 'stretch', marginTop: 10}}>
          <Text style={styles.textHeader}>Categories</Text>
          <View>
            <ScrollView
              bounces={false}
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
              <FlatList
                bounces={false}
                contentContainerStyle={{
                  alignSelf: 'flex-start',
                  marginVertical: 10,
                }}
                style={{flexGrow: 0}}
                numColumns={11}
                data={categories}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) => (
                  <CategoryItem data={item} key={index} />
                )}
              />
            </ScrollView>
          </View>
        </View>
        {/* Item */}
        <View
          style={{
            alignSelf: 'stretch',

            flex: 1,
            marginTop: 10,
          }}>
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
    backgroundColor: 'white',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
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
