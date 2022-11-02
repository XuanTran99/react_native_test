import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');
export default function Carousel() {
  const [index, setIndex] = useState(0);
  const indexRef = useRef(index);
  indexRef.current = index;
  const onScroll = useCallback(event => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(index);

    const distance = Math.abs(roundIndex - index);

    // Prevent one pixel triggering setIndex in the middle
    // of the transition. With this we have to scroll a bit
    // more to trigger the index change.
    const isNoMansLand = distance > 0.4;

    if (roundIndex !== indexRef.current && !isNoMansLand) {
      setIndex(roundIndex);
    }
  }, []);

  // Use the index
  useEffect(() => {
    console.warn(index);
  }, [index]);

  const slideList = Array.from({length: 4}).map((_, i) => {
    return {
      id: i,
      image:
        'https://daugia.onland.tech/public/uploads/auctions/90_2c1XrGdKld76qtA.jpeg',
      title: `This is the title! ${i + 1}`,
      subtitle: `This is the subtitle ${i + 1}!`,
    };
  });

  return (
    <View
      style={{
        flex: 1,
        // margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
      }}>
      <FlatList
        data={slideList}
        renderItem={({item, index}) => {
          if (index % 2 == 0) {
            return <Slide data={item} />;
          } else {
            return <Slide isVideo={true} data={item} />;
          }
        }}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        disableVirtualization
      />
    </View>
  );
}

function Slide({data, isVideo}) {
  return isVideo ? (
    <View
      style={{
        // height: windowHeight,
        width: windowWidth,
        // justifyContent: 'center',
        // alignItems: 'center',
      }}>
      <YoutubePlayer height={250} videoId={'LPdQ4T6lb2M'} />
    </View>
  ) : (
    <View
      style={{
        width: windowWidth,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          // height: windowHeight,
          width: windowWidth - 10,
          borderRadius: 10,
        }}>
        <Image
          source={{uri: data.image}}
          style={{
            height: 250,
            resizeMode: 'cover',
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
}
