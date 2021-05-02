/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Dimensions, ScrollView} from 'react-native';
import {Text, Avatar, Icon} from 'react-native-elements';
import AccountList from '../components/AccountItem';

const width = Dimensions.get('window').width; //full width

const listAccount = [
  {
    name: 'My Profile',
    avatar_url: <Icon name="person-circle-outline" type="ionicon" />,
    pageName: 'profile',
  },
  {
    name: 'My Addesses',
    avatar_url: <Icon name="car-outline" type="ionicon" />,
    pageName: 'address',
  },
  {
    name: 'Order History',
    avatar_url: <Icon name="clipboard-outline" type="ionicon" />,
    pageName: 'order',
  },
  {
    name: 'Order Tracking',
    avatar_url: <Icon name="receipt-outline" type="ionicon" />,
    pageName: 'ordertracking',
  },
];

const listMore = [
  {
    name: 'Feedback Us',
    avatar_url: <Icon name="megaphone-outline" type="ionicon" />,
  },
  {
    name: 'Logout',
    avatar_url: <Icon name="exit-outline" type="ionicon" />,
  },
];

const Account = ({navigation}) => {
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
      <ScrollView style={{flex: 1}}>
        <View style={styles.listContainer}>
          <Text style={styles.textSubTitle}>Account</Text>
          {listAccount.map((l, i) => (
            <AccountList
              key={i}
              data={l}
              onPressList={() => navigation.navigate(l.pageName)}
            />
          ))}
        </View>

        {/* List Container Account */}
        <View style={styles.listContainer}>
          <Text style={styles.textSubTitle}>More</Text>
          {listMore.map((l, i) => (
            <AccountList key={i} data={l} />
          ))}
        </View>
      </ScrollView>
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
