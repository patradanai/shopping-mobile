import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Signin from '../screens/SigninScreen';
import Signup from '../screens/SignupScreen';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Account from '../screens/Account';
import {Icon} from 'react-native-elements';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="home" type="antdesign" />;
          },
        }}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          tabBarLabel: 'Cart',
          tabBarBadge: 3,
          tabBarIcon: ({focused, color, size}) => {
            return <Icon name="shoppingcart" type="antdesign" />;
          },
        }}
      />
      <Tab.Screen
        name="account"
        component={Account}
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
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="sigin"
          component={Signin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
