import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, TouchableOpacity} from 'react-native-ui-lib';
import colors from '../styles/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface ButtonAddProps {
  onClick: () => void;
}

const ButtonAdd: React.FC<ButtonAddProps> = ({onClick}) => {
  return (
    <TouchableOpacity style={css.btnAddRooms} onPress={onClick}>
      <AntDesign name="plus" color={colors.white} size={28} />
    </TouchableOpacity>
  );
};

const css = StyleSheet.create({
  btnAddRooms: {
    borderRadius: 100,
    backgroundColor: colors.main,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 25,
    right: 15,
  },
});

export default ButtonAdd;
