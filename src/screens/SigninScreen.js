/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text, Input} from 'react-native-elements';
import {Circle} from '../utils/lib/circle';
import InputForm from '../components/FormAddress';

const initialValue = {
  email: '',
  password: '',
};

const SignupScreen = ({navigation}) => {
  const [isLoading, setIsloading] = useState(false);

  if (isLoading) {
    return (
      <View style={{flex: 1}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View style={styles.container}>
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
          onSubmit={values => {}}>
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
                />
                <InputForm
                  name={'password'}
                  placeholder="Password"
                  error={errors.password}
                  value={values.password}
                  handleChange={handleChange('password')}
                  handleBlur={handleBlur('password')}
                />
              </View>
              <Button
                title="Signin"
                titleStyle={{fontWeight: '500'}}
                containerStyle={{marginTop: 10}}
                buttonStyle={styles.buttonSignin}
              />
            </>
          )}
        </Formik>

        <View>
          <Text
            style={{color: '#ff5c2c', fontWeight: '700', marginVertical: 50}}>
            Forgot Password!
          </Text>
        </View>
        <View style={styles.containerText}>
          <Text style={{color: '#c9c5c5'}}>If don't have a member.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={{color: '#ff5c2c', fontWeight: '500'}}>Signup</Text>
          </TouchableOpacity>
        </View>
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
  containerText: {marginTop: 20, flexDirection: 'row'},
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
