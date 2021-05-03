/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {View, Platform} from 'react-native';
import {SearchBar} from 'react-native-elements';

const SeachItem = props => {
  return (
    <SearchBar
      showLoading
      platform={Platform.OS === 'ios' ? 'ios' : 'android'}
      placeholder="Type Here..."
      onChangeText={props.updateSearch}
      value={props.valueSeach}
      cancelButtonTitle="Cancel"
      inputContainerStyle={{height: '100%'}}
    />
  );
};

export default SeachItem;
