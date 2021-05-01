import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Signin from '../screens/SigninScreen';
import Signup from '../screens/SignupScreen';
import Home from '../screens/Home';
import Cart from '../screens/Cart';
import Account from '../screens/Account';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="home"
        component={Home}
        options={{tabBarLabel: 'Explore'}}
      />
      <Tab.Screen
        name="cart"
        component={Cart}
        options={{tabBarLabel: 'Cart'}}
      />
      <Tab.Screen
        name="account"
        component={Account}
        options={{tabBarLabel: 'Account'}}
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
