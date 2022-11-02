import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {View, Text, TouchableOpacity} from 'react-native-ui-lib';
import Image from 'react-native-fast-image';
// import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {formatNumberToMoney} from '../../../../utils/numbers';
import colors from '../../../../styles/colors';
import {checkAuctionLive} from '../../../../utils/auctionUtil';
const {width, height} = Dimensions.get('window');
interface Props {
  item: any;
  small: any;
  removeItem: Function;
  onPress: Function;
}
const CarouselItem: React.FC<Props> = ({item, small, removeItem, onPress}) => {
  return (
    <TouchableOpacity
      margin-5
      onPress={
        () => onPress(item)
        // removeItem(item)
      }>
      {checkAuctionLive(item) == 'prepare' ? (
        <View
          absT
          center
          br20
          margin-5
          style={styles.absStatus}
          backgroundColor={colors.success}>
          <Text white s12>
            Sắp bắt đầu
          </Text>
        </View>
      ) : checkAuctionLive(item) == 'pendding' ? (
        <View
          absT
          center
          br20
          margin-5
          style={styles.absStatus}
          backgroundColor={colors.main}>
          <Text white s12>
            Đang diễn ra
          </Text>
        </View>
      ) : checkAuctionLive(item) == 'online' ? (
        <View
          absT
          center
          br20
          margin-5
          style={styles.absStatus}
          backgroundColor={colors.green}>
          <Text white s12>
            Online
          </Text>
        </View>
      ) : null}
      <View
        style={[
          styles.cardView,
          small ? {height: height / 7} : {height: height / 2},
        ]}>
        <Image
          style={[
            styles.image,
            small ? {height: height / 7} : {height: height / 2},
          ]}
          source={{uri: item.link_image, priority: Image.priority.high}}
          resizeMode={Image.resizeMode.cover}
        />
        {/* <View style={styles.counterBox}>
          <CountDown
            size={10}
            until={moment(item.end_date).diff(new Date(), 'seconds')}
            // until={item.id == 18 ? 10 : 20}
            onFinish={() => removeItem(item)}
            digitStyle={{
              backgroundColor: colors.main,
            }}
            digitTxtStyle={{color: colors.white}}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{m: null, s: null}}
            showSeparator
          />
        </View> */}
        {/* <View
          absL
          margin-5
          paddingL-5
          paddingR-5
          padding-2
          br20
          row
          center
          backgroundColor="white">
          <Text dark10>10 </Text>
          <FontAwesome name="file-photo-o" size={12} color={colors.dark} />
        </View> */}
        {/* <View absR margin-5>
          <AntDesign name="heart" size={20} color={colors.error} />
          <AntDesign name="hearto" size={20} color={colors.error} />
        </View> */}
      </View>
      <View margin-5 style={{maxWidth: width / 2.5}}>
        <Text numberOfLines={1} ellipsizeMode="tail" s16>
          {item?.title}
        </Text>
        <View row spread>
          <Text s12i red10 marginT-3>
            {formatNumberToMoney(item?.reserve_price)}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width / 2.5,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: width / 2.5,
    // height: height / 3,
    borderRadius: 10,
  },
  counterBox: {
    position: 'absolute',
    bottom: 10,
    right: 5,
  },
  absStatus: {zIndex: 10, width: '50%', padding: 2},
});
export default React.memo(CarouselItem);
