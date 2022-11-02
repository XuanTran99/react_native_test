import React from 'react';
import {Text, View} from 'react-native-ui-lib';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import colors from '../styles/colors';

interface Props {
  background?: string;
  leftIcon?: any;
  pressLeft?: any;
  pressRight?: any;
  title?: string;
  color?: string;
  right?: any;
}
const Header: React.FC<Props> = ({
  background,
  leftIcon,
  pressLeft,
  pressRight,
  title,
  color,
  right,
}) => {
  return (
    <View
      row
      spread
      centerV
      paddingL-15
      paddingR-15
      padding-15
      style={[styles.container]}
      backgroundColor={background ? background : colors.white}>
      <TouchableOpacity onPress={pressLeft}>
        <View>{leftIcon}</View>
      </TouchableOpacity>
      <View>
        <Text style={[styles.title, {color: color ? color : colors.white}]}>
          {title}
        </Text>
      </View>

      {/* right */}
      <TouchableOpacity onPress={pressRight}>
        <View>{right}</View>
      </TouchableOpacity>
      {/* right */}
    </View>
  );
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

export default Header;
