/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useContext, useEffect} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';
import DeliveryMethodItem from '../../components/DeliveryMethodItem';
import SwitchLabel from '../../components/SwitchLabel';
import InputForm from '../../components/FormAddress';
import {Context} from '../../context/shippingContext';
import Axios from '../../utils/lib/api/shipping';
import Loading from '../../components/Loading';

//Width SCreen

const shippingList = [
  {key: 1, name: 'Standard', price: 30},
  {key: 2, name: 'EMS', price: 50},
  {key: 3, name: 'Kerry', price: 70},
  {key: 4, name: 'Flash', price: 50},
  {key: 5, name: 'J&T', price: 50},
];

const ShippingScreen = props => {
  const context = useContext(Context);
  const [stateSave, setStateSave] = useState(false);
  const [stateAddr, setStateAddr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [stateDelivery, setStateDelivery] = useState(null);
  const formRef = useRef();
  const token = context.state.token;

  // Init Value
  const initialValue = {
    name:
      (stateAddr &&
        context.state.profile?.fname + ' ' + context.state.profile?.lname) ||
      '',
    phone: (stateAddr && context.state.profile?.phone) || '',
    province: (stateAddr && context.state.profile?.Address?.province) || '',
    city: (stateAddr && context.state.profile?.Address?.city) || '',
    postcode: (stateAddr && context.state.profile?.Address?.postcode) || '',
    address: (stateAddr && context.state.profile?.Address?.address) || '',
    delivery: '',
  };

  // HandleSumbit
  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  // handle State Save
  const handleSave = e => {
    if (e) {
      putAddr(setStateSave(e));
    } else {
      setStateSave(e);
    }
  };

  // handle Delivery
  const handleDelivery = (index, name, price) => {
    setStateDelivery(index);
    //set Context
    context.setOrder({shippingMethod: {index, name, price}});

    //set subtotal and grantotal in Context
    context.setOrder({
      subTotal: context.state.cart?.subTotal,
      grandTotal: context.state.cart?.subTotal + price,
    });

    // set Shippingmethod in validate
    formRef.current.setFieldValue('delivery', {
      shippingMethod: {index, name, price},
    });
  };

  // handle State Addr
  const handleAddr = e => {
    if (e) {
      fetchProfile(setStateAddr(e));
    } else {
      setStateAddr(e);
    }
  };

  // get addr
  const fetchProfile = func => {
    if (token) {
      setIsLoading(true);
      setTimeout(() => {
        Axios.get('/auth/profile', {
          headers: {authorization: `Bearer ${token}`},
        })
          .then(res => {
            // set profile in context
            context.setProfile(res.data);

            // set order addr, profile in context
            context.setOrder({
              profile: {
                name: res.data.fname + ' ' + res.data.lname,
                phone: res.data.phone,
              },
              shippingAddress: {...res.data.Address},
            });
            setIsLoading(false);
            // pass State
            func;
          })
          .catch(err => {
            console.log(err);
            setIsLoading(false);
          });
      }, 500);
    }
  };

  // Put Addr
  const putAddr = func => {
    if (token) {
      setIsLoading(true);
      setTimeout(() => {
        Axios.put(
          '/auth/address/edit',
          {
            name: formRef.current.values.name,
            phone: formRef.current.values.phone,
            province: formRef.current.values.province,
            postcode: formRef.current.values.postcode,
            address: formRef.current.values.address,
          },
          {
            headers: {authorization: `Bearer ${token}`},
          },
        )
          .then(res => {
            context.setProfile(res.data);
            setIsLoading(false);
            // pass State
            func;
          })
          .catch(err => {
            console.log(err);
            setIsLoading(false);
          });
      }, 500);
    }
  };

  return (
    <View style={styles.container}>
      {/* Loading */}
      <Loading state={isLoading} />

      <ScrollView style={{flex: 1}}>
        {/* Form */}
        <Formik
          enableReinitialize={true}
          innerRef={formRef}
          initialValues={initialValue}
          validationSchema={Yup.object().shape({
            name: Yup.string().required(),
            phone: Yup.string().required(),
            province: Yup.string(),
            city: Yup.string(),
            postcode: Yup.string().required(),
            address: Yup.string().required(),
            delivery: Yup.object().required(),
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
              <SwitchLabel
                label="Save for future purchases"
                state={stateSave}
                onPress={handleSave}
              />
              <SwitchLabel
                label="Address seem as account"
                state={stateAddr}
                onPress={handleAddr}
              />

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
                    {shippingList?.map((data, key) => (
                      <DeliveryMethodItem
                        name={data.name}
                        price={data.price}
                        index={data.key}
                        onPress={handleDelivery}
                        state={stateDelivery}
                        key={key}
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
