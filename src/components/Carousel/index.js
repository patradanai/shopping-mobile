import React, {useRef, useState} from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import EntrySlider from './EntrySlider';
// Width
const width = Dimensions.get('window').width;

const CarouselItem = props => {
  const carouselRef = useRef();
  const [indexCarousel, setIndexCarousel] = useState(0);

  const _renderItem = ({item, index}) => {
    return <EntrySlider data={item} even={(index + 1) % 2 === 0} />;
  };

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        layout={'default'}
        data={props.entries}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width}
        loop={true}
        loopClonesPerSide={2}
        autoplay={true}
        autoplayDelay={500}
        autoplayInterval={3000}
        containerCustomStyle={styles.slider}
        contentContainerCustomStyle={styles.sliderContentContainer}
        onSnapToItem={index => setIndexCarousel(index)}
      />
      <Pagination
        dotsLength={props.entries.length}
        activeDotIndex={indexCarousel}
        containerStyle={styles.paginationContainer}
        dotColor={'rgba(255, 255, 255, 0.92)'}
        dotStyle={styles.paginationDot}
        inactiveDotColor={'black'}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        carouselRef={carouselRef}
        tappableDots={!!carouselRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    marginTop: 5,
    overflow: 'visible', // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10, // for custom animation
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8,
  },
  paginationContainer: {paddingVertical: 8},
});

export default CarouselItem;
