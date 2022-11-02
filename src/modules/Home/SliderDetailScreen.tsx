import React from 'react';
import {View} from 'react-native-ui-lib';
import {WebView} from 'react-native-webview';
import Image from 'react-native-fast-image';
import {useNavigation, useRoute} from '@react-navigation/native';
// import {useDispatch} from 'react-redux';
import Header from '../../components/Header';
import colors from '../../styles/colors';
import {Icons} from '../../utils/images';
import styles from './HomeStyles';
import ViewContainer from '../../components/ViewContainer';
import AntDesign from 'react-native-vector-icons/AntDesign';
const SliderDetailScreen: React.FC<{}> = () => {
  //   const dispatch = useDispatch();
  const navigation = useNavigation();
  const {params}: any = useRoute<any>();

  function goBack() {
    navigation.goBack();
  }

  return (
    <ViewContainer>
      <View flex>
        <Header
          title={'Chi tiết quảng cáo'}
          background={colors.main}
          leftIcon={
            <View padding-5>
              <AntDesign name="left" color={colors.white} size={18} />
            </View>
          }
          pressLeft={goBack}
        />
        <WebView
          source={{
            uri: params.data ? params.data : 'https://daugia.onland.tech/index',
          }}
        />
      </View>
    </ViewContainer>
  );
};

export default SliderDetailScreen;
