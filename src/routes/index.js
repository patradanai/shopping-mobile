import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import LoadingScreen from '../screens/LoadingScreen';
import AccountScreen from '../screens/AccountScreen';
import {Icon} from 'react-native-elements';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="home" type="antdesign" />;
          },
        }}
      />
      <Tab.Screen
        name="cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarBadge: 3,
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="shoppingcart" type="antdesign" />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AccountScreen}
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
        <Stack.Screen name="checkout" component={CheckoutScreen} />
        <Stack.Screen
          name="loading"
          component={LoadingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="tab" component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
