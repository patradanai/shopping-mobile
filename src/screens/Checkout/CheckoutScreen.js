/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {Text, Icon} from 'react-native-elements';
import {TabView, TabBar} from 'react-native-tab-view';

import ConfirmScreen from './ComfirmScreen';
import PaymentScreen from './PaymentScreen';
import ShippingScreen from './ShippingScreen';

// Width Screen
const width = Dimensions.get('window').width;

const CheckoutScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'shipping', title: 'Shipping'},
    {key: 'payment', title: 'Payment'},
    {key: 'confirm', title: 'Confirm'},
  ]);

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'shipping':
        return <ShippingScreen jumpTo={setIndex} />;
      case 'payment':
        return <PaymentScreen jumpTo={setIndex} />;
      case 'confirm':
        return <ConfirmScreen />;
      default:
        return null;
    }
  };

  const renderTabBar = props => (
    <TabBar
      {...props}
      onTabPress={({route, preventDefault}) => {}}
      tabStyle={{width: width / 3}}
      activeColor="#f4511e"
      inactiveColor="#000"
      style={{backgroundColor: '#fff'}}
      scrollEnabled={true}
      indicatorStyle={{backgroundColor: '#f4511e', height: 5, borderRadius: 10}}
      renderIcon={({route, focused, color}) => (
        <Icon
          name={route.key ? 'checkmark-circle-outline' : null}
          type="ionicon"
          color="green"
        />
      )}
    />
  );

  return (
    <TabView
      lazy
      swipeEnabled={false}
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: '#fff'}}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    position: 'relative',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  slider: {
    height: 5,
    width: width / 2,
    position: 'absolute',
    bottom: 0,
    left: 10,
    zIndex: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
});

export default CheckoutScreen;

// const renderTabBar = ({navigationState, position}) => {
//   const inputRange = navigationState.routes.map((x, i) => i);

//   return (
//     <View style={[styles.tabBar, {width: width}]}>
//       {navigationState.routes.map((route, i) => {
//         const opacity = position.interpolate({
//           inputRange,
//           outputRange: inputRange.map(inputIndex =>
//             inputIndex === i ? 1 : 0.5,
//           ),
//         });

//         return (
//           <TouchableOpacity
//             key={i}
//             style={styles.tabItem}
//             onPress={() => setIndex(i)}>
//             <Animated.Text style={{opacity}}>
//               <Text style={{color: '#000'}}>{route.title}</Text>
//             </Animated.Text>
//           </TouchableOpacity>
//         );
//       })}
//       <Animated.View style={[styles.slider, {}]} />
//     </View>
//   );
// };
