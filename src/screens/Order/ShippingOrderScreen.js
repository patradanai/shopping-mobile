import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import NoOrder from '../../components/NoOrder';
import OrderStatusItem from '../../components/OrderStatusItem';

const ShippingOrderScreen = props => {
  const [order, setOrder] = useState(null);
  useEffect(() => {
    const status = ['Delivery'];
    const filterOrder = props.order?.filter(data =>
      status.every(statusOrder => data.orderStatus === statusOrder),
    );
    setOrder(filterOrder);
  }, [props.order]);

  if (!props.order?.length > 0 || !order?.length > 0) {
    return <NoOrder />;
  }

  return (
    <View style={styles.container}>
      {order?.map((data, index) => (
        <OrderStatusItem key={index} order={data} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default ShippingOrderScreen;
