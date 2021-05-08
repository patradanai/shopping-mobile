/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {Platform} from 'react-native';
import {SearchBar} from 'react-native-elements';

const SeachItem = props => {
  return (
    <SearchBar
      {...props}
      platform={Platform.OS === 'ios' ? 'ios' : 'android'}
      onChangeText={props.updateSearch}
      value={props.valueSearch}
      cancelButtonTitle="Cancel"
      inputContainerStyle={{height: '100%'}}
      returnKeyType="search"
      onSubmitEditing={() => props.onSubmit()}
      autoCapitalize="none"
    />
  );
};

export default SeachItem;
