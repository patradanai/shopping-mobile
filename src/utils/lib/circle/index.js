import React from 'react';
import {View} from 'react-native';

export const Circle = ({size, color, position}) => {
  let style = {
    wrapper: {
      flexDirection: 'row',
      ...position,
    },
    circle: {
      width: size,
      height: size,
      borderRadius: size / 2,
      backgroundColor: color,
    },
  };
  return (
    <View style={style.wrapper}>
      <View style={style.circle} />
    </View>
  );
};
