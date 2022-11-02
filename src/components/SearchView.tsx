import React from 'react';
import {TextInput, StyleSheet, Dimensions} from 'react-native';
import {View} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Image from 'react-native-fast-image';
import {Icons} from '../utils/images';
import colors from '../styles/colors';

interface SearchViewProps {
  onChangeTextSearch: (value: string) => void;
  placeholderText: string;
  text?: string;
}

const SearchView: React.FC<SearchViewProps> = ({
  onChangeTextSearch,
  placeholderText,
  text,
}) => {
  return (
    <View style={css.viewSearch}>
      <TextInput
        placeholder={placeholderText}
        clearButtonMode="always"
        style={css.viewInputSearch}
        value={text}
        placeholderTextColor={colors.dark}
        onChangeText={value => onChangeTextSearch(value)}
      />
      <AntDesign name="search1" color={colors.gray} size={20} />
    </View>
  );
};

export default SearchView;

const css = StyleSheet.create({
  viewSearch: {
    borderBottomColor: colors.dark2,
    borderBottomWidth: 0.8,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  viewInputSearch: {
    width: Dimensions.get('screen').width - 40,
    color: colors.black,
    height: 45,
  },
  icSearch: {
    width: 20,
    height: 20,
  },
});
