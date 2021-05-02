import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ListItem, Avatar, Text} from 'react-native-elements';

const AccountItem = props => {
  return (
    <ListItem bottomDivider>
      <View>{props.data.avatar_url}</View>
      <ListItem.Content>
        <ListItem.Title>{props.data.name}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

export default AccountItem;
