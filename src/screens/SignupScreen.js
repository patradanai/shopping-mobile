/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, Input} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Circle} from '../utils/lib/circle';

const SignupScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <View style={styles.container}>
        {/* Circle Backdrop */}
        <Circle size={300} color="#ff5c2c" position={styles.circleBackdrop1} />
        <Circle size={100} color="#ff5c2c" position={styles.circleBackdrop2} />
        <Circle size={300} color="#ff5c2c" position={styles.circleBackdrop3} />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>SignupScreen</Text>
        </View>
        <Input
          inputContainerStyle={styles.inputContainer}
          placeholder="Full Name"
        />
        <Input
          inputContainerStyle={styles.inputContainer}
          placeholder="Eamil"
        />
        <Input
          inputContainerStyle={styles.inputContainer}
          placeholder="Password"
        />
        <Button title="SignupScreen" buttonStyle={styles.buttonSignin} />
        <View style={styles.containerButtom}>
          <Text style={{color: '#c9c5c5'}}>If you have a member. </Text>
          <TouchableOpacity onPress={() => navigation.navigate('signin')}>
            <Text style={{color: '#ff5c2c', fontWeight: '500'}}>Signin</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  headerTextContainer: {marginBottom: 100},
  headerText: {fontSize: 50, fontWeight: '500'},
  inputContainer: {
    width: '100%',
    backgroundColor: '#edeef2',
    justifyContent: 'center',
    borderRadius: 15,
    height: 50,
    marginBottom: 5,
    paddingLeft: 20,
    borderBottomWidth: 0,
  },
  buttonSignin: {
    backgroundColor: '#ff5c2c',
    color: '#000',
    width: 200,
    borderRadius: 25,
    height: 50,
    padding: 10,
  },
  containerButtom: {
    flexDirection: 'row',
    marginTop: 30,
  },
  circleBackdrop1: {
    position: 'absolute',
    left: -80,
    bottom: -100,
    opacity: 0.2,
  },
  circleBackdrop2: {position: 'absolute', right: 50, bottom: 150, opacity: 0.2},
  circleBackdrop3: {position: 'absolute', right: -80, top: -100, opacity: 0.2},
});

export default SignupScreen;
