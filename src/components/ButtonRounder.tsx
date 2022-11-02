import React from 'react';
import {Text, View} from 'react-native-ui-lib';
import {StyleSheet, TouchableOpacity} from 'react-native';
import colors from '../styles/colors';

interface Props {
  label?: string;
  background?: string;
  color?: string;
  onPress: any;
}
const ButtonRounder: React.FC<Props> = ({
  label,
  background,
  color,
  onPress,
}) => {
  return (
    <View style={[styles.container]} backgroundColor={background}>
      <TouchableOpacity onPress={onPress}>
        <View row center spread style={[styles.boxButton]}>
          <View row centerV>
            <Text style={[styles.label, {color: color ? color : colors.white}]}>
              {label}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
  },
  boxButton: {
    borderRadius: 8,
    padding: 10,
  },
  label: {
    fontSize: 14,
  },
});

export default ButtonRounder;
