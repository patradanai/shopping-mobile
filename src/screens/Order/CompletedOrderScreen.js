import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import NoOrder from '../../components/NoOrder';
import OrderStatusItem from '../../components/OrderStatusItem';

const CompletedOrderScreen = props => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const status = ['Processed'];
    const filterOrder = props.order?.filter(data =>
      status.some(statusOrder => data.orderStatus === statusOrder),
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

export default CompletedOrderScreen;
