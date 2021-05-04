import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';
import DeliveryMethodItem from '../../components/DeliveryMethodItem';

const shippingList = [
  {name: 'Standard', price: '฿30'},
  {name: 'EMS', price: '฿50'},
  {name: 'Kerry', price: '฿70'},
  {name: 'Flash', price: '฿50'},
  {name: 'J&T', price: '฿50'},
];

const ShippingScreen = props => {
  return (
    <View style={styles.container}>
      <Text>ShippingScreen</Text>
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <Text style={{fontSize: 15, fontWeight: 'bold', marginVertical: 20}}>
          DELEVERY
        </Text>
        <ScrollView horizontal>
          <View style={styles.deliveryContainer}>
            {shippingList?.map((data, index) => (
              <DeliveryMethodItem
                name={data.name}
                price={data.price}
                key={index}
              />
            ))}
          </View>
        </ScrollView>
      </View>

      <View>
        <Button
          title="Continue to Payments"
          icon={
            <Icon name="arrow-forward-outline" type="ionicon" color="#fff" />
          }
          iconRight={true}
          buttonStyle={styles.ButtonStyle}
          onPress={() => props.jumpTo(1)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  deliveryContainer: {
    flexDirection: 'row',
  },
  ButtonStyle: {height: 64, backgroundColor: '#2db2ff'},
});

export default ShippingScreen;
