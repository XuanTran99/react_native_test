import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native-ui-lib';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../styles/colors';

interface HeaderModalProps {
  title: string;
  left?: any;
  onPress: () => void;
}

const HeaderModal: React.FC<HeaderModalProps> = ({title, onPress, left}) => {
  return (
    <View padding-15 backgroundColor={colors.main} row spread>
      <View centerV style={css.ic}>
        {left}
      </View>
      <Text s16b white>
        {title}
      </Text>
      <TouchableOpacity onPress={onPress}>
        <AntDesign name="close" color={colors.white} size={20} />
      </TouchableOpacity>
    </View>
  );
};

const css = StyleSheet.create({
  ic: {
    // width: 20,
    // height: 20,
  },
});

export default HeaderModal;
