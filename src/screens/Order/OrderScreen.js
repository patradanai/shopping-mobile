/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, useWindowDimensions, StyleSheet, Dimensions} from 'react-native';
import {Text} from 'react-native-elements';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import PlaceOrderScreen from './PlaceOrderScreen';
import ShippingOrderScreen from './ShippingOrderScreen';
import CompletedOrderScreen from './CompletedOrderScreen';

// Width Screen
const width = Dimensions.get('window').width;

const renderScene = SceneMap({
  first: PlaceOrderScreen,
  second: ShippingOrderScreen,
  third: CompletedOrderScreen,
});

const OrderScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Order'},
    {key: 'second', title: 'Delivery'},
    {key: 'third', title: 'Completed'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      tabStyle={{width: width / 3}}
      activeColor="#f4511e"
      inactiveColor="#000"
      style={{backgroundColor: '#fff'}}
      scrollEnabled={true}
      indicatorStyle={{backgroundColor: '#f4511e', height: 5, borderRadius: 10}}
    />
  );

  return (
    <TabView
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

export default OrderScreen;

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
