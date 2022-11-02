import {View, StatusBar} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  backgroundColor?: string;
  barStyle?: any;
}
const CustomStatusBar: React.FC<Props> = ({backgroundColor, barStyle}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{height: insets.top, backgroundColor}}>
      <StatusBar
        animated={true}
        backgroundColor={backgroundColor}
        barStyle={barStyle}
      />
    </View>
  );
};
CustomStatusBar.defaultProps = {
  barStyle: 'light-content',
};

export default CustomStatusBar;
