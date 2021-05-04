/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Input, Button, Avatar, Icon} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';

const ProfileScreen = () => {
  const initialValues = {
    email: '',
    phone: '',
    name: '',
  };
  return (
    <View style={styles.container}>
      {/* Container Card */}
      <View style={styles.containerCard}>
        <View style={styles.containerAvatar}>
          <Avatar
            rounded
            title="PN"
            size={120}
            source={{
              uri:
                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
            }}>
            <Avatar.Accessory size={35} />
          </Avatar>
        </View>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Please fill your name'),
            phone: Yup.string().required('Please fill your phone'),
            email: Yup.string().email().required('Please fill your email'),
          })}>
          {({values, errors, handleChange, handleBlur, handleSubmit}) => (
            <View style={{width: '100%'}}>
              <Input
                label="Name"
                inputContainerStyle={styles.inputContianer}
                rightIcon={<Icon name="person-circle-outline" type="ionicon" />}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
                errorMessage={errors.name}
              />
              <Input
                label="Phone"
                inputContainerStyle={styles.inputContianer}
                rightIcon={<Icon name="call-outline" type="ionicon" />}
                onChangeText={handleChange('phone')}
                onBlur={handleBlur('phone')}
                value={values.phone}
                errorMessage={errors.phone}
              />
              <Input
                label="Email"
                inputContainerStyle={styles.inputContianer}
                rightIcon={<Icon name="at-outline" type="ionicon" />}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType="email-address"
                errorMessage={errors.email}
              />
              <Button
                title="Update Profile"
                buttonStyle={styles.buttonSave}
                containerStyle={{paddingHorizontal: 20}}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  containerCard: {
    backgroundColor: '#fff',
    margin: 20,
    paddingTop: 60,
    paddingBottom: 30,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  containerAvatar: {
    position: 'absolute',
    top: -60,
    alignSelf: 'center',
  },
  buttonSave: {
    backgroundColor: '#2ace25',
    height: 50,
    borderRadius: 20,
  },
  inputContianer: {
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
});

export default ProfileScreen;
