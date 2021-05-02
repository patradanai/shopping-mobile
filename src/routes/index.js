import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import ItemScreen from '../screens/ItemScreen';
import LoadingScreen from '../screens/LoadingScreen';
import AccountScreen from '../screens/AccountScreen';
import {Icon} from 'react-native-elements';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ExploreStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen name="item" component={ItemScreen} />
      <Stack.Screen name="home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  return (
    <Stack.Navigator initialRouteName="cart">
      <Stack.Screen name="cart" component={CartScreen} />
      <Stack.Screen name="checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="account" component={AccountScreen} />
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
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tab">
        <Stack.Screen
          name="sigin"
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
