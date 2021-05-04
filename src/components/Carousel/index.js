import React from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import {Text} from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';

// Width
const width = Dimensions.get('window').width;

const CarouselItem = props => {
  const _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  };
  return (
    <Carousel
      layout={'default'}
      data={props.entries}
      renderItem={_renderItem}
      sliderWidth={width}
      itemWidth={width}
    />
  );
};

const styles = StyleSheet.create({});

export default CarouselItem;
