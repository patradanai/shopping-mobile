/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text} from 'react-native-elements';
import {Circle} from '../utils/lib/circle';
import {Context} from '../context/shippingContext';
import InputForm from '../components/FormAddress';
import Axios from '../utils/lib/api/shipping';
import Loading from '../components/Loading';

const initialValue = {
  email: '',
  password: '',
};

const SignupScreen = ({navigation}) => {
  const context = useContext(Context);
  const [isLoading, setIsloading] = useState(false);

  // Token Storage
  const storeToken = async token => {
    context.setToken(token);
    try {
      const value = JSON.stringify(token);
      await AsyncStorage.setItem('token', value);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSkip = async () => {
    await AsyncStorage.setItem('skip', JSON.stringify(true));

    navigation.replace('tab');
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View style={styles.container}>
        <Loading state={isLoading} />
        {/* Backdrop */}
        <Circle size={300} color="#ff5c2c" position={styles.circleBackdrop1} />
        <Circle size={100} color="#ff5c2c" position={styles.circleBackdrop2} />
        <Circle size={300} color="#ff5c2c" position={styles.circleBackdrop3} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>E-Shopping</Text>
        </View>

        {/* Form */}
        <Formik
          initialValues={initialValue}
          validationSchema={Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required(),
          })}
          onSubmit={values => {
            setIsloading(true);
            setTimeout(async () => {
              try {
                const res = await Axios.post(
                  '/auth/signin',
                  {
                    username: values.email,
                    password: values.password,
                  },
                  {},
                );

                if (res.status === 200) {
                  storeToken(res.data.token);
                  setIsloading(false);
                }

                // redirect Screen
                navigation.replace('loading');
              } catch (err) {
                console.log(err.response.request._response);
                setIsloading(false);
              }
            }, 500);
          }}>
          {({values, handleBlur, handleChange, errors, handleSubmit}) => (
            <>
              <View style={styles.containerInput}>
                <View
                  style={{
                    width: '100%',
                    justifyContent: 'flex-start',
                    marginLeft: 20,
                    marginBottom: 10,
                  }}>
                  <Text style={{fontSize: 20, fontWeight: '700'}}>
                    Welcome back
                  </Text>
                </View>
                <InputForm
                  name={'email'}
                  placeholder="Email"
                  error={errors.email}
                  value={values.email}
                  handleChange={handleChange('email')}
                  handleBlur={handleBlur('email')}
                  keyboardType="email-address"
                  returnKeyType="next"
                  autoCapitalize="none"
                />
                <InputForm
                  name={'password'}
                  placeholder="Password"
                  error={errors.password}
                  value={values.password}
                  handleChange={handleChange('password')}
                  handleBlur={handleBlur('password')}
                  secureTextEntry={true}
                />
              </View>
              <Button
                title="Signin"
                titleStyle={{fontWeight: '500'}}
                containerStyle={{marginTop: 10}}
                buttonStyle={styles.buttonSignin}
                onPress={handleSubmit}
              />
            </>
          )}
        </Formik>

        <View>
          <Text
            style={{color: '#ff5c2c', fontWeight: '700', marginVertical: 30}}>
            Forgot Password!
          </Text>
        </View>
        <View style={styles.containerText}>
          <Text style={{color: '#c9c5c5'}}>If don't have a member.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={{color: '#ff5c2c', fontWeight: '500'}}>Signup</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => handleSkip()}>
          <View style={{marginTop: 30}}>
            <Text
              style={{
                color: '#ff5c2c',
                fontWeight: '500',
                textDecorationLine: 'underline',
              }}>
              Do you want to Skip
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  headerTextContainer: {marginBottom: 100},
  headerText: {fontSize: 50, fontWeight: '500'},
  containerText: {marginTop: 10, flexDirection: 'row'},
  containerInput: {
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: '#edeef2',
    justifyContent: 'center',
    borderRadius: 15,
    height: 50,
    marginBottom: 5,
    paddingLeft: 20,
  },
  buttonSignin: {
    backgroundColor: '#ff5c2c',
    color: '#000',
    width: 200,
    borderRadius: 25,
    height: 50,
    padding: 10,
  },
  circleBackdrop1: {
    position: 'absolute',
    left: -80,
    bottom: -100,
    opacity: 0.2,
  },
  circleBackdrop2: {position: 'absolute', left: 50, top: 200, opacity: 0.2},
  circleBackdrop3: {position: 'absolute', right: -80, top: -100, opacity: 0.2},
});

export default SignupScreen;
