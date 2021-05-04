import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button, Icon} from 'react-native-elements';

const ConfirmScreen = props => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}></View>
      <View>
        <Button
          title="Confirm & Pay"
          icon={
            <Icon name="arrow-forward-outline" type="ionicon" color="#fff" />
          }
          iconRight={true}
          buttonStyle={styles.ButtonStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ButtonStyle: {height: 64, backgroundColor: '#2db2ff'},
});

export default ConfirmScreen;
