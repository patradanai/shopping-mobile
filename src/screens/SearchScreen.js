import React, {useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import SeachList from '../components/SeachtItem';

const Search = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitleVisible: false,
      headerTitle: () => <SeachList />,
    });
  }, [navigation]);

  return (
    <SafeAreaView>
      <View>
        <Text>Search</Text>
      </View>
    </SafeAreaView>
  );
};

export default Search;
