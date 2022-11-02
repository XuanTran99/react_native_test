/* eslint-disable @typescript-eslint/no-shadow */
import React from 'react';
import {Text, View} from 'react-native-ui-lib';
import {TextInputMask} from 'react-native-masked-text';
import {TextInput, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import colors from '../styles/colors';
interface Props {
  width?: string;
  label?: string;
  placeholder?: string;
  keyboardType?: any;
  editable?: boolean;
  value: any;
  leftIcon?: any;
  rightIcon?: any;
  background?: string;
  hideTextInput?: boolean;
  onChangeText?: any;
  pressRight?: any;
  isError?: boolean;
  textError?: any;
  small?: boolean;
  titleRequired?: boolean;
  simpleInput?: boolean;
  isMoney?: boolean;
}
const Input: React.FC<Props> = ({
  width,
  label,
  placeholder,
  keyboardType,
  editable,
  value,
  leftIcon,
  rightIcon,
  background,
  hideTextInput,
  onChangeText,
  pressRight,
  isError,
  textError,
  small,
  titleRequired,
  simpleInput,
  isMoney,
}) => {
  return (
    <View width={width ? width : '100%'}>
      {isError && <View marginT-10 />}
      {!isError && (
        <View row>
          <Text style={styles.label}>{label && label}</Text>
          {titleRequired && <Text red10> (*)</Text>}
        </View>
      )}
      {textError && <Text red10>{textError}</Text>}
      <View
        row
        center
        spread
        style={[
          styles.boxInput,
          background !== '' && {backgroundColor: background},
          isError && styles.inputError,
          small ? styles.btnSmall : styles.btnLarger,
        ]}>
        <View row centerV paddingL-5>
          {leftIcon}
          {isMoney ? (
            <TextInputMask
              type={'money'}
              style={styles.simpleInput}
              value={value}
              placeholder={placeholder}
              onChangeText={value => {
                onChangeText(value);
              }}
              keyboardType="number-pad"
              clearButtonMode="always"
              placeholderTextColor={colors.placeholder}
              options={{
                precision: 0,
                delimiter: '.',
                unit: '',
              }}
              // style={css.viewInputPrice}
            />
          ) : (
            <TextInput
              autoCapitalize="none"
              style={simpleInput ? styles.simpleInput : styles.defaultInput}
              placeholder={placeholder}
              keyboardType={keyboardType ? keyboardType : 'default'}
              secureTextEntry={hideTextInput ? hideTextInput : false}
              placeholderTextColor={colors.dark}
              editable={editable ? false : true}
              value={value}
              onChangeText={value => {
                onChangeText(value);
              }}
            />
          )}
        </View>
        <View>
          <TouchableOpacity onPress={pressRight}>{rightIcon}</TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxInput: {
    borderRadius: 5,
  },
  label: {
    fontWeight: 'bold',
  },
  inputError: {
    borderWidth: 1,
    borderColor: colors.error,
  },
  btnSmall: {
    // padding: 0,
    paddingLeft: 10,
    paddingRight: 10,
    padding: Platform.OS === 'ios' ? 15 : 0,
  },
  btnLarger: {
    padding: Platform.OS === 'ios' ? 15 : 3,
    paddingLeft: 30,
    paddingRight: 30,
  },
  simpleInput: {
    width: '100%',
    paddingLeft: 0,
    color: colors.dark,
  },
  defaultInput: {
    width: '100%',
    paddingLeft: 10,
    color: colors.dark,
  },
});

export default Input;
