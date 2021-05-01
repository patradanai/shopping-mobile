/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text, Avatar} from 'react-native-elements';
import AccountList from '../components/AccountItem';
import {SafeAreaView} from 'react-native-safe-area-context';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const list = [
  {
    name: 'Amy Farha',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President',
  },
  {
    name: 'Chris Jackson',
    avatar_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman',
  },
];

const Account = () => {
  return (
    <View style={styles.container}>
      {/* Header Container */}
      <View style={styles.headerContainer}>
        <Avatar
          size={90}
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
        />
        <View style={{paddingHorizontal: 20}}>
          <Text style={{fontSize: 20, fontWeight: '600'}}>
            Patradanai Nakpimay
          </Text>
          <Text>Patradanai_n@hotmail.com</Text>
        </View>
      </View>

      {/* List Container Account */}
      <View style={styles.listContainer}>
        <Text style={styles.textSubTitle}>Account</Text>
        {list.map((l, i) => (
          <AccountList key={i} data={l} />
        ))}
      </View>

      {/* List Container Account */}
      <View style={styles.listContainer}>
        <Text style={styles.textSubTitle}>More</Text>
        {list.map((l, i) => (
          <AccountList key={i} data={l} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: width,
  },
  listContainer: {
    width: width,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    height: 130,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  textSubTitle: {
    fontSize: 18,
    fontWeight: '400',
    paddingLeft: 20,
    marginVertical: 10,
    color: '#a7a7a7',
  },
});

export default Account;
