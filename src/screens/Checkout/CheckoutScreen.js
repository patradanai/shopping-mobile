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
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

// Width Screen
const width = Dimensions.get('window').width;

const FirstRoute = () => <View style={{flex: 1, backgroundColor: '#ff4081'}} />;

const SecondRoute = () => (
  <View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const ThirdRoute = () => <View style={{flex: 1, backgroundColor: '#673ab7'}} />;

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const CheckoutScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Shipping'},
    {key: 'second', title: 'Payment'},
    {key: 'third', title: 'Confirm'},
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
      renderIcon={({route, focused, color}) => (
        <Icon
          name={focused ? 'checkmark-circle-outline' : null}
          type="ionicon"
          color="green"
        />
      )}
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