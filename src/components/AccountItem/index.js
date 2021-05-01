import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ListItem, Avatar, Text} from 'react-native-elements';

const AccountItem = props => {
  return (
    <ListItem bottomDivider>
      <Avatar source={{uri: props.data.avatar_url}} />
      <ListItem.Content>
        <ListItem.Title>{props.data.name}</ListItem.Title>
        <ListItem.Subtitle>{props.data.subtitle}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default AccountItem;
