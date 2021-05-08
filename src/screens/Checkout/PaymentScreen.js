import React, {useRef, useState, useContext, useEffect} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';
import {Context} from '../../context/shippingContext';
import PaymentItem from '../../components/PaymentItem';
import Axios from '../../utils/lib/api/shipping';
import Loading from '../../components/Loading';

const PaymentScreen = props => {
  const context = useContext(Context);
  const formRef = useRef();
  const [isLoading, setIsloading] = useState(false);
  const [payment, setPayment] = useState([]);
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

  useEffect(() => {
    setIsloading(true);
    setTimeout(() => {
      Axios.get('db_payment/payments')
        .then(res => {
          setPayment(res.data);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setIsloading(false);
        });
    }, 500);
  }, []);

  return (
    <View style={styles.container}>
      {/* Loading */}
      <Loading state={isLoading} />

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
            {payment?.map((data, index) => (
              <PaymentItem
                name={data.name}
                key={index}
                index={data.id}
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
