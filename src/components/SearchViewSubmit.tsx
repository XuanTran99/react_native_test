import React from 'react';
import {TextInput, StyleSheet, Dimensions} from 'react-native';
import {TouchableOpacity, View} from 'react-native-ui-lib';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TextInputMask} from 'react-native-masked-text';
import colors from '../styles/colors';

interface SearchViewSubmitProps {
  onChangeTextSearch: (value: string) => void;
  placeholderText: string;
  text?: string;
  isMoney?: boolean;
  isNumber?: true | false;
  rightPress: (value: any) => void;
}

const SearchViewSubmit: React.FC<SearchViewSubmitProps> = ({
  onChangeTextSearch,
  placeholderText,
  text,
  isNumber,
  isMoney,
  rightPress,
}) => {
  return (
    <View style={css.viewSearch}>
      {isMoney ? (
        <TextInputMask
          type={'money'}
          value={text}
          placeholder="Chạm để nhập"
          onChangeText={value => onChangeTextSearch(value)}
          keyboardType="number-pad"
          clearButtonMode="always"
          placeholderTextColor={colors.placeholder}
          options={{
            precision: 0,
            delimiter: '.',
            unit: '',
          }}
          style={css.viewInputSearch}
        />
      ) : (
        <TextInput
          placeholder={placeholderText}
          clearButtonMode="always"
          style={css.viewInputSearch}
          keyboardType={isNumber ? 'numeric' : 'default'}
          value={text}
          placeholderTextColor={colors.dark}
          onChangeText={value => onChangeTextSearch(value)}
        />
      )}

      <TouchableOpacity padding-5 onPress={rightPress}>
        <AntDesign name="check" color={colors.gray} size={20} />
      </TouchableOpacity>
    </View>
  );
};

SearchViewSubmit.defaultProps = {
  isNumber: false,
};

export default SearchViewSubmit;

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
