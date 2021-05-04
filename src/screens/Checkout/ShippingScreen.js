/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';
import DeliveryMethodItem from '../../components/DeliveryMethodItem';
import SwitchLabel from '../../components/SwitchLabel';
import InputForm from '../../components/FormAddress';

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
      <ScrollView>
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
            <>
              <InputForm
                name={'name'}
                placeholder="name"
                error={errors.name}
                value={values.name}
                handleChange={handleChange('name')}
                handleBlur={handleBlur('name')}
              />
              <InputForm
                name={'name'}
                placeholder="name"
                error={errors.name}
                value={values.name}
                handleChange={handleChange('name')}
                handleBlur={handleBlur('name')}
              />
              <InputForm
                name={'name'}
                placeholder="name"
                error={errors.name}
                value={values.name}
                handleChange={handleChange('name')}
                handleBlur={handleBlur('name')}
              />
              <InputForm
                name={'name'}
                placeholder="name"
                error={errors.name}
                value={values.name}
                handleChange={handleChange('name')}
                handleBlur={handleBlur('name')}
              />
              <InputForm
                name={'name'}
                placeholder="name"
                error={errors.name}
                value={values.name}
                handleChange={handleChange('name')}
                handleBlur={handleBlur('name')}
              />
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
            </>
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
  },
  containerButton: {},
  deliveryContainer: {
    flexDirection: 'row',
  },
  ButtonStyle: {height: 64, backgroundColor: '#2db2ff'},
});

export default ShippingScreen;
