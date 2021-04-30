/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, SafeAreaView, TouchableOpacity} from 'react-native';
import {Button, Text, Input} from 'react-native-elements';

const Signup = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Signup</Text>
        <View style={styles.containerInput}>
          <Input
            inputStyle={styles.inputContainer}
            inputContainerStyle={{borderBottomWidth: 0}}
          />
          <Input
            inputStyle={styles.inputContainer}
            inputContainerStyle={{borderBottomWidth: 0}}
          />
          <View style={styles.containerText}>
            <TouchableOpacity>
              <Text>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <Button title="Signin" buttonStyle={styles.buttonSignin} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    backgroundColor: '#e3eae8',
  },
  containerText: {marginBottom: 20},
  containerInput: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '90%',
    backgroundColor: '#465881',
    justifyContent: 'center',
    borderRadius: 25,
    height: 50,
    marginBottom: 5,
    paddingLeft: 20,
  },
  buttonSignin: {
    backgroundColor: '#f75c5e',
    color: '#000',
    width: 200,
    borderRadius: 25,
    height: 50,
    padding: 10,
  },
});

export default Signup;
