import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {View} from 'react-native-ui-lib';
import colors from '../styles/colors';

interface Props {
  children: any;
  background?: string;
  barBackground?: string;
  safe?: true | false;
}
const ViewContainer: React.FC<Props> = ({
  children,
  background,
  safe,
  barBackground,
}) => {
  return (
    <View flex backgroundColor={background}>
      {safe && (
        <SafeAreaView
          style={{backgroundColor: barBackground ? barBackground : colors.main}}
        />
      )}
      <StatusBar barStyle="light-content" backgroundColor={barBackground} />
      {children}
    </View>
  );
};

ViewContainer.defaultProps = {
  safe: true,
  barBackground: colors.main,
};

export default ViewContainer;
