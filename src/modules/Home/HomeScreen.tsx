import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  Dimensions,
  ImageBackground,
  Animated,
  Alert,
} from 'react-native';
import {
  View,
  Text,
  TouchableOpacity,
  Dialog,
  Avatar,
  Badge,
} from 'react-native-ui-lib';
import AppLink from 'react-native-app-link';
// import {SliderBox} from 'react-native-image-slider-box';
import { SliderBox } from '../../components/SliderBox/SliderBox';

import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useDispatch } from 'react-redux';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import colors from '../../styles/colors';
import styles from './HomeStyles';
import Carousel from './Components/Carousel/Carousel';
import PostItem from './Components/PostItem';
import { Images } from '../../utils/images';
import { useAppSelector } from '../../redux/hook';
import {
  loadPosts,
  loadAuctions,
  loadSlider,
  loadHomeBackground,
  loadAuctionBuyNow,
  loadLiveAuctions,
} from './HomeApi';
import { Routes } from '../../navigations/routes';
import CustomStatusBar from '../../components/CustomStatusBar';

const width = Dimensions.get('screen').width;
let height = Dimensions.get('screen').height;

const HomeScreen: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const user = useAppSelector(state => state.user);
  const background = useAppSelector(state => state.home.background);
  const [notification, setNotification] = useState(false);
  const countNotification = useAppSelector(
    state => state.notification.data.total,
  );
  const [slideAds, setSliderAds] = useState([]);

  //animated money
  const heightAnimated = useRef(new Animated.Value(0)).current;
  const opacityAnimated = useRef(new Animated.Value(0)).current;
  const [showMoney, setShowMoney] = useState(false);
  //animated money

  const [orientation, setOrientation] = React.useState('LANDSCAPE');
  const determineAndSetOrientation = () => {
    if (width < height) {
      setOrientation('PORTRAIT');
    } else {
      setOrientation('LANDSCAPE');
    }
  };
  React.useEffect(() => {
    determineAndSetOrientation();
    Dimensions.addEventListener('change', determineAndSetOrientation);

    return () => {
      Dimensions.removeEventListener('change', determineAndSetOrientation);
    };
  }, []);

  const fadeIn = () => {
    setShowMoney(true);
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(opacityAnimated, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
    }).start();
    Animated.timing(heightAnimated, {
      toValue: 300,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const fadeOut = () => {
    setShowMoney(false);
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(opacityAnimated, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
    Animated.timing(heightAnimated, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  // chỉ load 1 lần
  useEffect(() => {
    dispatch(loadHomeBackground({}));
    dispatch(loadSlider({ status: 1 }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // load khi focus vào màn hình
  function homeLoad() {
    if (user.isLogin) {
      dispatch(loadLiveAuctions({ user_id: user.userId }));
    }
    dispatch(loadPosts({ page: 1, pageSize: 25, auction_status: 'open' }));
    dispatch(loadAuctions({ page: 1, pageSize: 25, auction_status: 'open' }));
    //load đấu giá mua ngay
    dispatch(loadAuctionBuyNow({ is_buynow: 1, auction_status: 'open' }));
  }

  React.useEffect(() => {
    determineAndSetOrientation();
    Dimensions.addEventListener('change', determineAndSetOrientation);

    return () => {
      Dimensions.removeEventListener('change', determineAndSetOrientation);
    };
  }, []);

  function goLogin() {
    navigation.push(Routes.Login);
  }
  // function goNotification() {
  //   navigation.push(Routes.Notification);
  // }
  // function goInterestCost() {
  //   navigation.push(Routes.InterestCost);
  // }

  // OpenApplication.openApplication('com.geotechvn.dakland');
  // const url =
  //   'https://play.google.com/store/apps/details?id=com.geotechvn.dakland';

  // AppLink.maybeOpenURL(url, {
  //   appName: 'Onland',
  //   appStoreId: '',
  //   appStoreLocale: 'vi',
  //   playStoreId: 'com.geotechvn.dakland',
  // })
  //   .then(() => {
  //     // do stuff
  //   })
  //   .catch(err => {
  //     // handle error
  //   });

  // AppLink.openInStore( {
  //   appName: 'Onland',
  //   appStoreId: '',
  //   appStoreLocale: 'vi',
  //   playStoreId: 'com.geotechvn.dakland',
  // })
  //   .then(() => {
  //     // do stuff
  //   })
  //   .catch(err => {
  //     // handle error
  //   });

  return (
    <SafeAreaProvider>
      <CustomStatusBar
        barStyle={
          background.color === '#ffffff'
            ? 'dark-content'
            : background.color === '#fff'
              ? 'dark-content'
              : 'light-content'
        }
        backgroundColor={background.color ? background.color : colors.dark2}
      />
      {/* <StatusBar barStyle={'light-content'} backgroundColor="transparent" /> */}
      {/* <TouchableOpacity
        onPress={() => {
          Toast.show({
            type: 'success',
            text1: 'Hello',
            text2: 'This is some something 👋',
          });
        }}>
        <Text>ok</Text>
      </TouchableOpacity> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={() => homeLoad()} />
        }>
        <View style={styles.bellIcon}>
          {/* <TouchableOpacity right row onPress={goNotification}>
            <View>
              <FontAwesome size={22} name={'bell'} color={colors.main} />
            </View>
            <View absR style={styles.bellBadge}>
              <Badge size={15} label={'1'} backgroundColor={colors.error} />
            </View>
          </TouchableOpacity> */}
        </View>
        <ImageBackground
          resizeMode="cover"
          style={[styles.flex]}
          source={{
            uri: background.link_image
              ? background.link_image
              : 'https://png.pngtree.com/background/20210709/original/pngtree-pure-watercolor-gradient-colorful-background-picture-image_964413.jpg',
          }}>
          <View center>
            <View
              padding-20
              center
              // row
              // spread
              centerV>
              <View marginL-15 center>
                <View center paddingB-25 row centerH>
                  <Avatar
                    source={Images.LOGO}
                    size={30}
                    animate={false}
                    label="AU"
                  />
                  <Text style={background.color && { color: background.color }}>
                    Xin chào!{' '}
                  </Text>
                  {!user.userData ? (
                    <TouchableOpacity
                      marginR-10
                      style={styles.btnLogin}
                      onPress={goLogin}>
                      <Text
                        style={background.color && { color: background.color }}
                        black
                        s18b>
                        Đăng nhập
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <View center>
                      <Text
                        style={background.color && { color: background.color }}
                        s22b
                        w600
                        dark20>
                        {user.userData.name}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </View>

            {user.isLogin && (
              <TouchableOpacity
                onPress={showMoney ? fadeOut : fadeIn}
                padding-8
                br100
                style={styles.showMoneyIcon}
                backgroundColor={colors.white}>
                <AntDesign
                  name={showMoney ? 'up' : 'down'}
                  color={colors.dark}
                  size={12}
                />
              </TouchableOpacity>
            )}
          </View>
        </ImageBackground>

        {/* slider quảng cáo  */}
        {/* <View padding-10 backgroundColor={colors.placeholder_light2}>
          <SliderBox
            images={slider.images}
            sliderBoxHeight={175}
            ImageComponentStyle={styles.sliderRadius}
            parentWidth={width - 20}
            // currentImageEmitter={(index: number) => {
            //   // setIndexImg(index);
            // }}
            onCurrentImagePressed={(index: number) => {
              // setIndexImg(index + 1);
              navigation.push(Routes.SliderDetail, {
                data: slider.links[index],
              });
            }}
            dotColor={colors.main}
            inactiveDotColor="#90A4AE"
            autoplay={true}
            circleLoop={true}
          // dotStyle={styles.dotSlider}
          />
        </View> */}
        <View
          width={90}
          height={90}
          br40
          center
          margin-10
          backgroundColor={colors.white}>
          <TouchableOpacity padding-10 centerH center onPress={() => { }}>
            <View center padding-8 br40>
              <MaterialCommunityIcons
                size={35}
                name={'map-search'}
                color={colors.main}
              />
            </View>
            <Text s14>Quy hoạch</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* modal cảnh báo đăng nhập  */}
    </SafeAreaProvider>
  );
};

export default HomeScreen;
