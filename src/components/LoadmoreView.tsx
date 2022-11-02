import React from 'react';
import {ActivityIndicator} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import colors from '../styles/colors';
import '../styles/styles';

interface LoadmoreProps {
  totalData: number;
  lengthListData: number;
}

const LoadmoreView: React.FC<LoadmoreProps> = ({totalData, lengthListData}) => {
  if (totalData === lengthListData) {
    return null;
  } else {
    return (
      <View centerH marginT-10>
        <ActivityIndicator size="small" color={colors.placeholder} />
        <Text placeholder s12>
          Đang tải...
        </Text>
      </View>
    );
  }
};

export default LoadmoreView;
