/* eslint-disable react-native/no-inline-styles */
import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';

const AddressScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerBackTitleVisible: false,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <Formik
          initialValues={{
            name: '',
            phone: '',
            province: '',
            city: '',
            postcode: '',
            address: '',
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required(),
            phone: Yup.string().required(),
            province: Yup.string().required(),
            city: Yup.string().required(),
            postcode: Yup.string().required(),
            address: Yup.string().required(),
          })}
          onSubmit={values => {}}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <View>
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
              <Button
                title="Cancel"
                containerStyle={styles.buttonContainer}
                buttonStyle={styles.buttonCancel}
                titleStyle={{color: '#2ace25'}}
                onPress={() => navigation.goBack()}
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
