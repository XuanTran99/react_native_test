import React from 'react';
import {StyleSheet, TextInput, Platform} from 'react-native';
import {Text, View} from 'react-native-ui-lib';
import colors from '../styles/colors';

interface InputMulProps {
  title: string;
  isNotEmpty?: boolean;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  sizeBold?: boolean;
  isNumberPhone?: boolean;
  editTable?: boolean;
}

const InputMulLine: React.FC<InputMulProps> = ({
  title,
  isNotEmpty,
  value,
  onChange,
  multiline,
  sizeBold,
  isNumberPhone,
  editTable,
}) => {
  return (
    <View style={css.viewBorder}>
      <View style={css.viewTxt}>
        <Text s14b>
          {title} {isNotEmpty && <Text error>*</Text>}
        </Text>
      </View>

      <View marginT-7>
        <TextInput
          placeholder="Chạm để nhập"
          placeholderTextColor={colors.placeholder}
          style={[
            css.viewInputPrice,
            sizeBold && css.sizeBold,
            multiline && css.multiline,
          ]}
          value={value}
          multiline={multiline}
          editable={editTable ? false : true}
          clearButtonMode={editTable ? 'never' : 'always'}
          onChangeText={(val: string) => onChange(val)}
          keyboardType={isNumberPhone ? 'phone-pad' : 'default'}
        />
      </View>
    </View>
  );
};

const css = StyleSheet.create({
  viewTxt: {
    position: 'absolute',
    top: -10,
    paddingHorizontal: 5,
    marginLeft: 5,
    backgroundColor: colors.white,
  },
  viewBorder: {
    backgroundColor: colors.white,
    borderColor: colors.dark,
    borderWidth: 0.6,
    borderRadius: 10,
    marginTop: 15,
    padding: Platform.OS === 'android' ? 0 : 12,
    paddingLeft: 10,
  },
  viewInputPrice: {
    paddingHorizontal: 5,
    color: colors.black,
    borderRadius: 5,
    height: 100,
    textAlignVertical: 'top',
    // textAlign:'.'
  },
  sizeBold: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  multiline: {
    height: 150,
  },
});

export default InputMulLine;
