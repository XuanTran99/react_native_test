import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import Image from 'react-native-fast-image';

interface Props {
  title?: string;
  sourceImage: any;
  children?: any;
  width?: any;
  height?: any;
}

const Notification: React.FC<Props> = ({
  title,
  sourceImage,
  width,
  height,
  children,
}) => {
  return (
    <View flex centerH marginT-100>
      <Image source={sourceImage} style={{width: width, height: height}} />
      <Text>{title}</Text>

      {children}
    </View>
  );
};

Notification.defaultProps = {
  width: 300,
  height: 200,
};

export default Notification;
