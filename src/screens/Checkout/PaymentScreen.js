/* eslint-disable react-native/no-inline-styles */
import React, {useRef, useState, useContext} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';
import {Context} from '../../context/shippingContext';
import PaymentItem from '../../components/PaymentItem';

const listPayment = [
  {key: 1, name: 'COD'},
  {key: 2, name: 'Paypal'},
  {key: 3, name: 'Debit/Credit Card'},
  {key: 4, name: 'Bank Account'},
];

const PaymentScreen = props => {
  const context = useContext(Context);
  const formRef = useRef();
  const [statePayment, setStatePayment] = useState(null);
  const initialValues = {
    paymentMethod: '',
  };

  // HandleSubmitForm
  const handleSubmitForm = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const handlePayment = (index, name) => {
    setStatePayment(index);

    // Set payment
    context.setOrder({payment: {index, name}});

    // setValueForm
    formRef.current.setFieldValue('paymentMethod', {payment: {index, name}});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textPayment}>Pay by</Text>
      {/* Form */}
      <Formik
        innerRef={formRef}
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          paymentMethod: Yup.object().required(),
        })}
        onSubmit={values => {
          props.jumpTo(2);
        }}>
        {({values, errors, handleSubmit}) => (
          <View style={styles.paymentContainer}>
            {listPayment.map((data, index) => (
              <PaymentItem
                name={data.name}
                key={index}
                index={data.key}
                state={statePayment}
                onPress={handlePayment}
              />
            ))}
          </View>
        )}
      </Formik>
      {/* Button */}
      <View style={styles.containerButton}>
        <Button
          title="Continue to Confirm"
          icon={
            <Icon name="arrow-forward-outline" type="ionicon" color="#fff" />
          }
          iconRight={true}
          buttonStyle={styles.ButtonStyle}
          onPress={handleSubmitForm}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    backgroundColor: '#f4f4f4',
  },
  containerButton: {
    backgroundColor: 'transparent',
    alignSelf: 'stretch',
  },
  paymentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 10,
  },
  textPayment: {
    fontSize: 20,
    fontWeight: '600',
  },
  ButtonStyle: {height: 64, backgroundColor: '#2db2ff'},
});

export default PaymentScreen;
