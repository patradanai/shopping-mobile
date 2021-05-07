import React from 'react';
import {View, StyleSheet, Platform, Dimensions} from 'react-native';
import {ParallaxImage} from 'react-native-snap-carousel';
import FastImage from 'react-native-fast-image';

const sliderWidth = Dimensions.get('window').width;
const entryBorderRadius = 8;
const horizontalMargin = 20;

const EntrySilder = props => {
  const {
    data: {illustration},
    parallax,
    parallaxProps,
    even,
  } = props;

  const getImage = () => {
    return parallax ? (
      <ParallaxImage
        source={{uri: illustration}}
        containerStyle={[
          styles.imageContainer,
          even ? styles.imageContainerEven : {},
        ]}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
        {...parallaxProps}
      />
    ) : (
      <FastImage
        source={{uri: illustration, priority: FastImage.priority.normal}}
        style={styles.image}
        resizeMode={FastImage.resizeMode.cover}
      />
    );
  };

  return (
    <View
      style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
      {getImage()}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    // zIndex: 100,
    // ...StyleSheet.absoluteFillObject,
    resizeMode: 'cover',
    borderRadius: Platform.OS === 'ios' ? entryBorderRadius : 0,
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.OS === 'ios' ? 0 : -1, // Prevent a random Android rendering issue
    backgroundColor: 'transparent',
    borderTopLeftRadius: entryBorderRadius,
    borderTopRightRadius: entryBorderRadius,
    height: 150,
    paddingHorizontal: horizontalMargin,
    width: sliderWidth,
  },
  imageContainerEven: {
    backgroundColor: 'transparent',
  },
});

export default EntrySilder;
