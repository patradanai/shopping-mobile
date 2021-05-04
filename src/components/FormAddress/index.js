import React from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'react-native-elements';

const FormAddress = props => {
  return (
    <Input
      name={props.name}
      placeholder={props.placeholder}
      onChangeText={props.handleChange}
      onBlur={props.handleBlur}
      value={props.value}
      inputContainerStyle={styles.inputContainer}
      errorMessage={props.error}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default FormAddress;
