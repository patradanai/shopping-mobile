import React, {useLayoutEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, Icon} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';
import SeachList from '../components/SeachtItem';

const Search = ({navigation}) => {
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
      headerTitle: () => <SeachList />,
    });
  }, [navigation]);

  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

export default Search;
