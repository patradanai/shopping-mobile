import React from 'react';
import {View, Platform} from 'react-native';
import {SearchBar} from 'react-native-elements';
import {SafeAreaView} from 'react-native-safe-area-context';

const SeachItem = props => {
  return (
    <SafeAreaView>
      <SearchBar
        showLoading
        platform={Platform.OS === 'ios' ? 'ios' : 'android'}
        placeholder="Type Here..."
        onChangeText={props.updateSearch}
        value={props.valueSeach}
        cancelButtonTitle="Cancel"
      />
    </SafeAreaView>
  );
};

export default SeachItem;
