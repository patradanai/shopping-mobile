import React from 'react';
import {SearchBar} from 'react-native-elements';

const SeachItem = props => {
  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={props.updateSearch}
      value={props.valueSeach}
    />
  );
};

export default SeachItem;
