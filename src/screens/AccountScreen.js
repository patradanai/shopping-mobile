/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect, useState, useCallback} from 'react';
import {Context} from '../context/shippingContext';
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {Text, Avatar, Icon} from 'react-native-elements';
import AccountList from '../components/AccountItem';
import Loading from '../components/Loading';
import Axios from '../utils/lib/api/shipping';

const width = Dimensions.get('window').width; //full width

const listAccount = [
  {
    name: 'My Profile',
    avatar_url: <Icon name="person-circle-outline" type="ionicon" />,
    pageName: 'profile',
  },
  {
    name: 'My Addresses',
    avatar_url: <Icon name="car-outline" type="ionicon" />,
    pageName: 'address',
  },
  {
    name: 'Orders',
    avatar_url: <Icon name="clipboard-outline" type="ionicon" />,
    pageName: 'order',
  },
  {
    name: 'Wishlist',
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
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(Context);

  const fetchProfile = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      Axios.get('/auth/profile', {
        headers: {authorization: `Bearer ${context.state.token}`},
      })
        .then(res => {
          //set Profle
          context.setProfile(res.data);
          // Loading
          setIsLoading(false);
        })
        .catch(err => console.log(err));
    }, 500);
  }, []);

  // Fetch Profile
  useEffect(() => {
    if (context.state.token) {
      fetchProfile();
    }
  }, []);

  return (
    <View style={styles.container}>
      <Loading state={isLoading} />
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
        {context?.state?.profile ? (
          <View style={{paddingHorizontal: 20}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                textTransform: 'uppercase',
              }}>
              {context?.state?.profile?.fname +
                ' ' +
                context?.state?.profile?.lname}
            </Text>
            <Text>{context?.state?.profile?.email}</Text>
          </View>
        ) : null}
      </View>

      {/* List Container Account */}
      <ScrollView
        style={{flex: 1}}
        refreshControl={
          <RefreshControl onRefresh={fetchProfile} refreshing={isLoading} />
        }>
        <View style={styles.listContainer}>
          <Text style={styles.textSubTitle}>Account</Text>
          {listAccount.map((l, i) => (
            <AccountList
              key={i}
              data={l}
              onPressList={() =>
                navigation.navigate(l.pageName, {
                  profile: context?.state?.profile,
                })
              }
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
