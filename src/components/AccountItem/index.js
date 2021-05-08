import React from 'react';
import {View} from 'react-native';
import {ListItem} from 'react-native-elements';

const AccountItem = props => {
  return (
    <ListItem bottomDivider onPress={props.onPressList}>
      <View>{props.data.avatar_url}</View>
      <ListItem.Content>
        <ListItem.Title>{props.data.name}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  );
};

export default AccountItem;
