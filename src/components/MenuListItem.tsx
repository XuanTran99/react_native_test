import React from 'react';
import {Text, View} from 'react-native-ui-lib';
import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import colors from '../styles/colors';

interface Props {
  background?: string;
  leftIcon?: any;
  onPress?: any;
  title?: string;
  color?: string;
  right?: any;
  bottomLine?: boolean;
}
const MenuListItem: React.FC<Props> = ({
  background,
  leftIcon,
  onPress,
  title,
  color,
  right,
  bottomLine,
}) => {
  return (
    <View padding-3 backgroundColor={background}>
      <TouchableOpacity onPress={onPress}>
        <View row spread padding-13>
          <View row>
            {leftIcon}
            <View paddingL-5 />
            <Text style={color ? {color: color} : {color: colors.black}}>
              {title}
            </Text>
          </View>
          {right}
          {/* <Text>></Text> */}
        </View>
      </TouchableOpacity>
      {bottomLine && <View style={styles.lineBottom} />}
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
  lineBottom: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: colors.placeholder_light2,
  },
});

export default MenuListItem;
