/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button, Text, Input} from 'react-native-elements';
import {Circle} from '../utils/lib/circle';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View style={styles.container}>
        <Circle size={300} color="#ff5c2c" position={styles.circleBackdrop1} />
        <Circle size={100} color="#ff5c2c" position={styles.circleBackdrop2} />
        <Circle size={300} color="#ff5c2c" position={styles.circleBackdrop3} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>E-Shopping</Text>
        </View>

        <View style={styles.containerInput}>
          <View
            style={{
              width: '100%',
              justifyContent: 'flex-start',
              marginLeft: 20,
              marginBottom: 10,
            }}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>Welcome back</Text>
          </View>
          <Input
            placeholder="Email"
            inputStyle={styles.inputContainer}
            placeholderTextColor="#c9c5c5"
            inputContainerStyle={{borderBottomWidth: 0}}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Input
            placeholder="Password"
            inputStyle={styles.inputContainer}
            placeholderTextColor="#c9c5c5"
            inputContainerStyle={{borderBottomWidth: 0}}
            onChangeText={text => setPassword(text)}
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>

        <Button
          title="Signin"
          titleStyle={{fontWeight: '500'}}
          buttonStyle={styles.buttonSignin}
        />
        <View>
          <Text
            style={{color: '#ff5c2c', fontWeight: '700', marginVertical: 50}}>
            Forgot Password!
          </Text>
        </View>
        <View style={styles.containerText}>
          <Text style={{color: '#c9c5c5'}}>If don't have a member.</Text>
          <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={{color: '#ff5c2c', fontWeight: '500'}}>
              SignupScreen
            </Text>
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
