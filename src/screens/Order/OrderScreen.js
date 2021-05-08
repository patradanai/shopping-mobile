/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useContext, useLayoutEffect} from 'react';
import {useWindowDimensions, StyleSheet, Dimensions} from 'react-native';
import Axios from '../../utils/lib/api/shipping';
import {Context} from '../../context/shippingContext';
import {TabView, TabBar} from 'react-native-tab-view';
import Loading from '../../components/Loading';
import PlaceOrderScreen from './PlaceOrderScreen';
import ShippingOrderScreen from './ShippingOrderScreen';
import CompletedOrderScreen from './CompletedOrderScreen';
import {navigateReplace} from '../../routes/navigateRef';
// Width Screen
const width = Dimensions.get('window').width;

const OrderScreen = () => {
  const layout = useWindowDimensions();
  const context = useContext(Context);
  const [orders, setOrders] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const token = context.state.token;
  const [routes] = useState([
    {key: 'order', title: 'Order'},
    {key: 'delivery', title: 'Delivery'},
    {key: 'complete', title: 'Completed'},
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

  const renderScene = ({route, jumpTo}) => {
    switch (route.key) {
      case 'order':
        return <PlaceOrderScreen order={orders} />;
      case 'delivery':
        return <ShippingOrderScreen order={orders} />;
      case 'complete':
        return <CompletedOrderScreen order={orders} />;
      default:
        return null;
    }
  };

  // Feteching Order
  useEffect(() => {
    if (token) {
      setIsLoading(true);
      setTimeout(() => {
        Axios.get('/db_order/orders', {
          headers: {authorization: `Bearer ${token}`},
        })
          .then(res => {
            setOrders(res.data.data);
            setIsLoading(false);
          })
          .catch(err => {
            console.log(err.response.data);
            setIsLoading(false);
          });
      }, 500);
    }
  }, [token]);

  useLayoutEffect(() => {
    if (!token) {
      navigateReplace('signin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigateReplace]);
  return (
    <>
      <Loading state={isLoading} />
      <TabView
        lazy
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        style={{backgroundColor: '#fff'}}
      />
    </>
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
