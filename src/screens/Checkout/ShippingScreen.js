/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';
import DeliveryMethodItem from '../../components/DeliveryMethodItem';
import SwitchLabel from '../../components/SwitchLabel';
import InputForm from '../../components/FormAddress';

//Width SCreen

const shippingList = [
  {name: 'Standard', price: '฿30'},
  {name: 'EMS', price: '฿50'},
  {name: 'Kerry', price: '฿70'},
  {name: 'Flash', price: '฿50'},
  {name: 'J&T', price: '฿50'},
];

const ShippingScreen = props => {
  const formRef = useRef();
  // Init Value
  const initialValue = {
    name: '',
    phone: '',
    province: '',
    city: '',
    postcode: '',
    address: '',
    delivery: '',
  };

  // HandleSumbit
  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <Formik
          innerRef={formRef}
          initialValues={initialValue}
          validationSchema={Yup.object().shape({
            name: Yup.string().required(),
            phone: Yup.string().required(),
            province: Yup.string().required(),
            city: Yup.string().required(),
            postcode: Yup.string().required(),
            address: Yup.string().required(),
          })}
          onSubmit={values => {
            props.jumpTo(1);
          }}>
          {({values, errors, handleBlur, handleChange}) => (
            <View style={styles.containerForm}>
              <InputForm
                name={'name'}
                placeholder="Name"
                error={errors.name}
                value={values.name}
                handleChange={handleChange('name')}
                handleBlur={handleBlur('name')}
              />
              <InputForm
                name={'phone'}
                placeholder="Phone"
                error={errors.phone}
                value={values.phone}
                handleChange={handleChange('phone')}
                handleBlur={handleBlur('phone')}
              />
              <InputForm
                name={'address'}
                placeholder="Address"
                error={errors.address}
                value={values.address}
                handleChange={handleChange('address')}
                handleBlur={handleBlur('address')}
              />
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1}}>
                  <InputForm
                    name={'province'}
                    placeholder="Province"
                    error={errors.province}
                    value={values.province}
                    handleChange={handleChange('province')}
                    handleBlur={handleBlur('province')}
                  />
                </View>
                <View style={{flex: 1}}>
                  <InputForm
                    name={'postcode'}
                    placeholder="Postcode"
                    error={errors.postcode}
                    value={values.postcode}
                    handleChange={handleChange('postcode')}
                    handleBlur={handleBlur('postcode')}
                  />
                </View>
              </View>
              {/* Swtich */}
              <SwitchLabel label="Save for future purchases" state={true} />
              <SwitchLabel label="Address seem as account" state={true} />

              {/* Delivery */}
              <View style={{flex: 1, paddingHorizontal: 10}}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    marginVertical: 20,
                  }}>
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
            </View>
          )}
        </Formik>
      </ScrollView>

      {/* Button */}
      <View style={styles.containerButton}>
        <Button
          title="Continue to Payments"
          icon={
            <Icon name="arrow-forward-outline" type="ionicon" color="#fff" />
          }
          iconRight={true}
          buttonStyle={styles.ButtonStyle}
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingTop: 20,
  },
  containerButton: {
    backgroundColor: 'transparent',
  },
  containerForm: {marginBottom: 20},
  deliveryContainer: {
    flexDirection: 'row',
  },
  ButtonStyle: {height: 64, backgroundColor: '#2db2ff'},
});

export default ShippingScreen;
