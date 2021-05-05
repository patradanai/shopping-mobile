/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Provider} from '../context/shippingContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';

import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/Checkout/CheckoutScreen';
import SearchScreen from '../screens/SearchScreen';
import ItemScreen from '../screens/ItemScreen';
import LoadingScreen from '../screens/LoadingScreen';
import AccountScreen from '../screens/AccountScreen';
import OrderScreen from '../screens/Order/OrderScreen';
import OrderTrackingScreen from '../screens/OrderTrackingScreen';
import AddresScreen from '../screens/AddressScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="item" component={ItemScreen} />
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerRight: () => (
            <Icon
              style={{marginHorizontal: 15}}
              name="search"
              type="ionicon"
              color="#000"
              onPress={() => navigation.navigate('search')}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator initialRouteName="cart">
      <Stack.Screen
        name="cart"
        component={CartScreen}
        options={{headerTitle: 'CartShopping'}}
      />
      <Stack.Screen
        name="checkout"
        component={CheckoutScreen}
        options={{headerTitle: 'Checkout'}}
      />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={AccountScreen}
        options={{headerTitle: 'Profile'}}
      />
      <Stack.Screen
        name="address"
        component={AddresScreen}
        options={{headerTitle: 'Addresses'}}
      />
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{headerTitle: 'Profile'}}
      />
      <Stack.Screen
        name="order"
        component={OrderScreen}
        options={{headerTitle: 'Order History'}}
      />
      <Stack.Screen
        name="ordertracking"
        component={OrderTrackingScreen}
        options={{headerTitle: 'Order Tracking'}}
      />
    </Stack.Navigator>
  );
};

const TabScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="exploreTab"
        component={ExploreStack}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="home" type="antdesign" />;
          },
        }}
      />
      <Tab.Screen
        name="cartTab"
        component={CartStack}
        options={{
          tabBarLabel: 'Cart',
          tabBarBadge: 3,
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="shoppingcart" type="antdesign" />;
          },
        }}
      />
      <Tab.Screen
        name="accountTab"
        component={AccountStack}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="user" type="antdesign" />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const Routes = () => {
  const [isToken, setToken] = useState(null);
  // Get token
  const getToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        // value previously store
        setToken(JSON.parse(value));
      }
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    setTimeout(async () => {
      await getToken();
    }, 1000);
  }, []);
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={isToken ? 'signin' : 'tab'}>
          {isToken ? (
            <>
              <Stack.Screen
                name="signin"
                component={SigninScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="signup"
                component={SignupScreen}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name="loading"
                component={LoadingScreen}
                options={{headerShown: false}}
              />
            </>
          ) : null}
          <Stack.Screen
            name="tab"
            component={TabScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Routes;
