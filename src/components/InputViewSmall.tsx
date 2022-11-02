import React from 'react';
import {StyleSheet, TextInput, Platform} from 'react-native';
import {Text, View} from 'react-native-ui-lib';
import {TextInputMask} from 'react-native-masked-text';
import colors from '../styles/colors';

interface InputViewProps {
  title: string;
  isNotEmpty?: boolean;
  value: any;
  onChange: (value: string) => void;
  isMoney?: boolean;
  unit?: string;
  multiline?: boolean;
  sizeBold?: boolean;
  isNumberPhone?: boolean;
  editTable?: boolean;
  right?: any;
}

const InputViewSmall: React.FC<InputViewProps> = ({
  title,
  isNotEmpty,
  value,
  onChange,
  isMoney,
  unit,
  multiline,
  sizeBold,
  isNumberPhone,
  editTable,
  right,
}) => {
  return (
    <View style={css.viewBorder}>
      <View style={css.viewTxt}>
        <Text s14b>
          {title} {isNotEmpty && <Text error>*</Text>}
        </Text>
      </View>

      {isMoney ? (
        <View row centerV marginT-7>
          <TextInputMask
            type={'money'}
            value={value}
            placeholder="Chạm để nhập"
            onChangeText={(val: string) => onChange(val)}
            keyboardType="number-pad"
            clearButtonMode="always"
            placeholderTextColor={colors.placeholder}
            options={{
              precision: 0,
              delimiter: '.',
              unit: '',
            }}
            style={css.viewInputPrice}
          />
          {unit ? (
            <Text s16b marginL-15 marginR-5>
              {unit}
            </Text>
          ) : null}
        </View>
      ) : (
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
      )}
      <View absR style={css.viewTxt}>
        {right}
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
  viewIcon: {
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
    height: 50,
    marginTop: 20,
    padding: Platform.OS === 'android' ? 0 : 12,
    paddingLeft: 10,
  },
  viewInputPrice: {
    paddingHorizontal: 5,
    color: colors.black,
    borderRadius: 5,
    textAlignVertical: 'top',
    width: '100%',
    // textAlign:'.'
  },
  sizeBold: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  multiline: {
    height: 200,
  },
});

export default InputViewSmall;
