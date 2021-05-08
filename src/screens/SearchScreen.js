/* eslint-disable react-native/no-inline-styles */
import React, {useState, useLayoutEffect, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';
import SeachList from '../components/SeachtItem';
import CardItem from '../components/CardItem';
import Axios from '../utils/lib/api/shipping';
import Loading from '../components/Loading';

const SearchScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [valueSearch, setValueSearch] = useState('');
  const [products, setProducts] = useState(null);

  const handleSearch = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      Axios.get(`/db_product/products/find?search=${valueSearch}`)
        .then(res => {
          setProducts(res.data.data);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err);
          setIsLoading(false);
        });
    }, 500);
  }, [valueSearch]);

  const onChangeSearch = val => {
    setValueSearch(val);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerRight: () => (
        <Icon
          name="camera-outline"
          type="ionicon"
          containerStyle={{
            marginRight: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        />
      ),
      headerTitle: () => (
        <SeachList
          valueSearch={valueSearch}
          updateSearch={onChangeSearch}
          onSubmit={handleSearch}
          placeholder="Type Here..."
        />
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation, valueSearch]);

  return (
    <View style={styles.container}>
      <Loading state={isLoading} />
      <View style={styles.containerProduct}>
        {products?.map((data, index) => (
          <CardItem key={index} data={data} navigation={navigation} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  containerProduct: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default SearchScreen;
