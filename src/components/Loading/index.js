import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const Loading = ({state}) => {
  return (
    <>
      {state ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});

export default Loading;
