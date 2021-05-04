/* eslint-disable react-native/no-inline-styles */
import React, {useRef} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';
import PaymentItem from '../../components/PaymentItem';

const listPayment = [
  {name: 'COD'},
  {name: 'Paypal'},
  {name: 'Debit/Credit Card'},
  {name: 'Bank Account'},
];

const PaymentScreen = props => {
  const formRef = useRef();
  const initialValues = {
    paymentMethod: '',
  };

  // HandleSubmitForm
  const handleSubmitForm = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textPayment}>Pay by</Text>
      {/* Form */}
      <Formik
        innerRef={formRef}
        initialValues={initialValues}
        validationSchema={Yup.object().shape({})}
        onSubmit={values => {
          props.jumpTo(2);
        }}>
        {({values, errors, handleSubmit}) => (
          <View style={styles.paymentContainer}>
            {listPayment.map((data, index) => (
              <PaymentItem name={data.name} key={index} />
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
