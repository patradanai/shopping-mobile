/* eslint-disable react-native/no-inline-styles */
import React, {useLayoutEffect, useContext, useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Context} from '../context/shippingContext';
import Loading from '../components/Loading';
import Axios from '../utils/lib/api/shipping';

const AddressScreen = ({route, navigation}) => {
  const context = useContext(Context);
  const [isLoading, setIsLoading] = useState(null);
  const {address, profile} = route.params;
  const token = context.state?.token;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerBackTitleVisible: false,
    });

    if (!token) {
      navigation.replace('signin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <Formik
          enableReinitialize={true}
          initialValues={{
            name: profile?.fname + ' ' + profile?.lname || '',
            phone: profile?.phone || '',
            province: address?.province || '',
            city: address?.city || '',
            postcode: address?.postcode || '',
            address: address?.address || '',
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required(),
            phone: Yup.string().required(),
            province: Yup.string().required(),
            city: Yup.string().required(),
            postcode: Yup.string().required(),
            address: Yup.string().required(),
          })}
          onSubmit={values => {
            if (token) {
              setIsLoading(true);
              setTimeout(() => {
                Axios.put(
                  '/auth/address/edit',
                  {
                    name: values.name,
                    phone: values.phone,
                    province: values.province,
                    postcode: values.postcode,
                    address: values.address,
                  },
                  {headers: {authorization: `Bearer ${token}`}},
                )
                  .then(res => {
                    setIsLoading(false);
                    navigation.goBack();
                  })
                  .catch(err => {
                    setIsLoading(false);
                    console.log(err);
                  });
              }, 500);
            }
          }}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View>
              {/* Loading */}
              <Loading state={isLoading} />

              {/* Form */}
              <Input
                name="name"
                placeholder="Full Name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                inputContainerStyle={styles.inputContainer}
                errorMessage={errors.name}
              />
              <Input
                name="phone"
                placeholder="Phone"
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                inputContainerStyle={styles.inputContainer}
                errorMessage={errors.phone}
                keyboardType="phone-pad"
              />
              <Input
                name="province"
                placeholder="Province"
                onChangeText={handleChange('province')}
                onBlur={handleBlur('province')}
                value={values.province}
                inputContainerStyle={styles.inputContainer}
                errorMessage={errors.province}
              />
              <Input
                name="city"
                placeholder="City"
                onChangeText={handleChange('city')}
                onBlur={handleBlur('city')}
                value={values.city}
                inputContainerStyle={styles.inputContainer}
                errorMessage={errors.city}
              />
              <Input
                name="postcode"
                placeholder="Post Code"
                onChangeText={handleChange('postcode')}
                onBlur={handleBlur('postcode')}
                value={values.postcode}
                errorMessage={errors.postcode}
                inputContainerStyle={styles.inputContainer}
              />
              <Input
                name="address"
                placeholder="Address Details"
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
                errorMessage={errors.address}
                inputContainerStyle={styles.inputContainer}
              />
              <Button
                title="Save"
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.buttonSave}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#edeef2',
    justifyContent: 'center',
    borderRadius: 5,
    height: 50,
    marginBottom: 5,
    paddingLeft: 20,
    borderWidth: 1,
    borderColor: '#eaeaea',
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  buttonSave: {
    backgroundColor: '#2ace25',
    height: 50,
    borderRadius: 20,
  },
  buttonCancel: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#2ace25',
    height: 50,
    borderRadius: 20,
  },
});

export default AddressScreen;
