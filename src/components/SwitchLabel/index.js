import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Text, Switch} from 'react-native-elements';

const SwitchLabel = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>{props.label}</Text>

      <Switch
        value={props.state}
        color="#f4511e"
        onValueChange={e => props.onPress(e)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    marginVertical: 10,
  },
  textLabel: {
    fontSize: 15,
    fontWeight: '600',
  },
});

export default SwitchLabel;
