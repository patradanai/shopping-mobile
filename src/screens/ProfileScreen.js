/* eslint-disable react-native/no-inline-styles */
import React, {
  useState,
  useEffect,
  useContext,
  useLayoutEffect,
  useRef,
} from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import {View, StyleSheet, Platform} from 'react-native';
import {Input, Button, Avatar, Icon} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {Context} from '../context/shippingContext';
import Loading from '../components/Loading';
import Axios from '../utils/lib/api/shipping';

const ProfileScreen = ({route, navigation}) => {
  const formRef = useRef();
  const context = useContext(Context);
  const [isLoading, setIsLoading] = useState(false);
  const {profile} = route.params;
  const token = context.state.token;
  const initialValues = {
    email: profile?.email || '',
    phone: profile?.phone || '',
    fname: profile?.fname || '',
    lname: profile?.lname || '',
    imageSrc: '',
  };

  const handlePickerImage = () => {
    launchImageLibrary({mediaType: 'photo'}, response => {
      if (response) {
        // Add in Dataform
        let data = new FormData();
        data.append('profile', {
          name: response.fileName,
          type: response.type,
          uri:
            Platform.OS === 'ios'
              ? response.uri.replace('file://', '')
              : response.uri,
        });
        Axios.post('/db_image/footage/profile', data, {
          headers: {
            authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
          .then(res => {
            formRef.current.setFieldValue('imageSrc', res.data?.image);
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
  };

  useLayoutEffect(() => {
    if (!token) {
      navigation.replace('signin');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  useEffect(() => {
    console.log(formRef.current);
  }, [formRef]);

  return (
    <View style={styles.container}>
      {/* Loading */}
      <Loading state={isLoading} />
      {/* Container Card */}
      <View style={styles.containerCard}>
        <View style={styles.containerAvatar}>
          <Avatar
            onPress={() => handlePickerImage()}
            rounded
            title={profile?.fname[0] + profile?.lname[0]}
            size={120}
            source={
              formRef.current.values.imageSrc
                ? {
                    uri: formRef.current.values.imageSrc,
                  }
                : profile?.imageSrc
                ? {
                    uri: profile?.imageSrc,
                  }
                : require('../assets/image/avatar.png')
            }>
            <Avatar.Accessory size={35} />
          </Avatar>
        </View>
        <Formik
          innerRef={formRef}
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            fname: Yup.string().required('Please fill your name'),
            lname: Yup.string().required('Please fill your name'),
            phone: Yup.string().required('Please fill your phone'),
            email: Yup.string().email().required('Please fill your email'),
          })}
          onSubmit={values => {
            setIsLoading(true);
            // Delay
            setTimeout(() => {
              if (token) {
                Axios.put(
                  '/auth/profile/edit',
                  {
                    fname: values.fname,
                    lname: values.lname,
                    phone: values.phone,
                    email: values.email,
                    imageSrc: values.imageSrc,
                  },
                  {headers: {authorization: `Bearer ${token}`}},
                )
                  .then(res => {
                    setIsLoading(false);
                    navigation.goBack();
                  })
                  .catch(err => {
                    console.log(err.response.data);
                    setIsLoading(false);
                  });
              }
            }, 300);
          }}>
          {({values, errors, handleChange, handleBlur, handleSubmit}) => (
            <View style={{width: '100%'}}>
              <Input
                label="First Name"
                inputContainerStyle={styles.inputContianer}
                rightIcon={<Icon name="person-circle-outline" type="ionicon" />}
                onChangeText={handleChange('fname')}
                onBlur={handleBlur('fname')}
                value={values.fname}
                errorMessage={errors.fname}
              />
              <Input
                label="Last Name"
                inputContainerStyle={styles.inputContianer}
                rightIcon={<Icon name="person-circle-outline" type="ionicon" />}
                onChangeText={handleChange('lname')}
                onBlur={handleBlur('lname')}
                value={values.lname}
                errorMessage={errors.lname}
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
