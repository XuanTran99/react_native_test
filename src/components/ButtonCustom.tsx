import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import colors from '../styles/colors';

interface Props {
  label?: string;
  background?: string;
  color?: string;
  onPress: () => void;
}
const ButtonCustom: React.FC<Props> = ({label, background, color, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container]}
      backgroundColor={background}>
      <View row center spread style={[styles.boxButton]}>
        <View row centerV>
          <Text style={[styles.label, {color: color ? color : colors.white}]}>
            {label}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 8,
  },
  boxButton: {
    borderRadius: 8,
    paddingLeft: 30,
    paddingRight: 30,
    padding: 14,
  },
  label: {
    fontSize: 15,
  },
});

export default ButtonCustom;
