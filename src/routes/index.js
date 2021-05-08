/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useContext} from 'react';
import {Context} from '../context/shippingContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import {navigationRef} from './navigateRef';

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
import WishListScreen from '../screens/WishListScreen';
import AddresScreen from '../screens/AddressScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import SplashScreen from '../screens/SpashScreen';
import OrderConfirmScreen from '../screens/OrderConfirmScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="item" component={ItemScreen} />
      <Stack.Screen name="Categories" component={CategoriesScreen} />
      <Stack.Screen name="search" component={SearchScreen} />
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={({navigation}) => ({
          headerTitle: 'E-Shopping',
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
    <Stack.Navigator initialRouteName="orderconfirm">
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
      <Stack.Screen
        name="orderconfirm"
        component={OrderConfirmScreen}
        options={{headerTitle: 'OrderConfirm'}}
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
        name="wishlist"
        component={WishListScreen}
        options={{headerTitle: 'Wishlist'}}
      />
    </Stack.Navigator>
  );
};

const TabScreen = () => {
  const context = useContext(Context);

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
          tabBarBadge: context.state.cart?.Products?.length,
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
  const context = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const [isToken, setToken] = useState(null);
  const [skip, setSkip] = useState(false);

  // Get token & Skip
  const getTokenSkip = async () => {
    try {
      const valueToken = await AsyncStorage.getItem('token');

      const token = JSON.parse(valueToken);

      context.setToken(token);

      const valueSkip = await AsyncStorage.getItem('skip');
      setSkip(JSON.parse(valueSkip));

      setIsLoading(true);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    getTokenSkip();
  }, []);

  if (!isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {skip ? (
          <>
            <Stack.Screen
              name="tab"
              component={TabScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="signin"
              component={SigninScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="loading"
              component={LoadingScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="signup"
              component={SignupScreen}
              options={{headerShown: false}}
            />
          </>
        ) : isToken ? (
          <>
            <Stack.Screen
              name="tab"
              component={TabScreen}
              options={{headerShown: false}}
            />
          </>
        ) : (
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
            <Stack.Screen
              name="tab"
              component={TabScreen}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
