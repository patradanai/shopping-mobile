/* eslint-disable react-native/no-inline-styles */
import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Text, Button, Icon, Image} from 'react-native-elements';

// Get Width
const width = Dimensions.get('window').width;

const ItemScreen = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Product',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <Text h3 style={{fontWeight: 'bold', marginTop: 10}}>
          Modern Chair
        </Text>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://cdn.ambientedirect.com/chameleon/mediapool/thumbs/0/47/Gubi_Beetle-Chair-mit-Stoff-und-Gestell-schwarz_1515x1515-ID572442-a40195c7e75264b6a6309e1e0ffa09f7.jpg',
          }}
        />
        <View style={{height: 120, width: '95%'}}>
          <Text numberOfLines={5} style={styles.textDesc}>
            This chair can be used with at dinning table as a aside chair and as
            outdoor chair for use at home or workplace.
          </Text>
        </View>
        <Text h4 style={{fontWeight: 'bold'}}>
          $300.00
        </Text>
      </View>
      <View style={styles.containerBottom}>
        <Button
          title="Add to Cart"
          buttonStyle={[
            styles.buttonCart,
            {width: width * 0.75, backgroundColor: '#000'},
          ]}
        />
        <Button
          icon={<Icon name="heart-outline" type="ionicon" color="#fff" />}
          buttonStyle={[
            styles.buttonCart,
            {width: width * 0.2, backgroundColor: '#f4511e'},
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerItem: {
    flex: 1,
    alignItems: 'center',
  },
  containerBottom: {
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonCart: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    resizeMode: 'center',
  },
  textDesc: {
    fontSize: 16,
    paddingHorizontal: 40,
    marginVertical: 10,
  },
});

export default ItemScreen;
