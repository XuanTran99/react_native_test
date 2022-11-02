import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, FlatList, Animated} from 'react-native';
import {View} from 'react-native-ui-lib';
import CarouselItem from './CarouselItem';

const {width} = Dimensions.get('window');

// function infiniteScroll(dataList: any) {
//   const numberOfData = dataList.length;
//   let scrollValue = 0,
//     scrolled = 0;

//   setInterval(function () {
//     scrolled++;
//     if (scrolled < numberOfData) {
//       scrollValue = scrollValue + width;
//     } else {
//       scrollValue = 0;
//       scrolled = 0;
//     }

//     flatList.scrollToOffset({animated: true, offset: scrollValue});
//   }, 5000);
// }

interface Props {
  data: Array<object>;
  small?: true | false;
  removeItem: Function;
  onPress: Function;
}
const Carousel: React.FC<Props> = ({data, small, removeItem, onPress}) => {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);
  const [dataList, setDataList] = useState(data);

  useEffect(() => {
    setDataList(data);
    // infiniteScroll(dataList);
  }, [data, dataList]);

  if (data && data.length) {
    return (
      <View>
        <FlatList
          data={data}
          // ref={flatList => {
          //   this.flatList = flatList;
          // }}
          keyExtractor={(item, index) => 'carousel' + index}
          horizontal
          // pagingEnabled
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate={'fast'}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <CarouselItem
                item={item}
                small={small}
                removeItem={removeItem}
                onPress={onPress}
              />
            );
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />

        {/* <View row center style={styles.boxDot}>
          {data.map((_, i) => {
            let opacity = position.interpolate({
              inputRange: [i - 1, i, i + 1],
              outputRange: [0.3, 1, 0.3],
              extrapolate: 'clamp',
            });
            return <Animated.View key={i} style={[styles.dot, {opacity}]} />;
          })}
        </View> */}
      </View>
    );
  }

  console.log('Please provide Images');
  return null;
};

export default React.memo(Carousel);
