import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {View} from 'react-native-ui-lib';
import colors from '../styles/colors';

interface Props {
  children: any;
  background?: string;
  isSafe?: true | false;
}
const ViewContainer: React.FC<Props> = ({children, background, isSafe}) => {
  return (
    <View flex backgroundColor={background}>
      {isSafe && <SafeAreaView style={{backgroundColor: colors.white}} />}
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      {children}
    </View>
  );
};

ViewContainer.defaultProps = {
  isSafe: true,
};

export default ViewContainer;
