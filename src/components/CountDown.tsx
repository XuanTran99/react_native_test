import React from 'react';
import {View} from 'react-native-ui-lib';
import {StyleSheet, Dimensions} from 'react-native';
import CountDown from 'react-native-countdown-component';
import moment from 'moment';
import colors from '../styles/colors';

interface Props {
  size?: number;
  time?: any;
  onFinish?: Function;
}
const CountDownComponent: React.FC<Props> = ({time, size, onFinish}) => {
  return (
    <View>
      <CountDown
        size={size}
        until={time}
        // until={item.id == 18 ? 10 : 20}
        onFinish={onFinish}
        digitStyle={{
          backgroundColor: colors.main,
        }}
        digitTxtStyle={{color: colors.white}}
        timeToShow={['D', 'H', 'M', 'S']}
        timeLabels={{d: 'Ngày', h: 'giờ', m: 'phút', s: 'giây'}}
        showSeparator
      />
    </View>
  );
};

CountDownComponent.defaultProps = {
  size: 10,
};

const maxWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    width: maxWidth,
  },
  icon: {
    width: 25,
    height: 25,
  },
  title: {
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default CountDownComponent;
