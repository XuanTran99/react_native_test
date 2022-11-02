/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import Image from 'react-native-fast-image';
import RNPickerSelect from 'react-native-picker-select';
import {Text} from 'react-native-ui-lib';
import colors from '../styles/colors';
import {Icons} from '../utils/images';

interface Props {
  style?: any;
  rowDirection?: boolean;
  colorTitle?: string;
  customTitleStyle?: any;
  title?: string;
  titleRequired?: boolean;
  bgPicker?: string;
  disabled?: boolean;
  onChangeValue?: any;
  data: any;
  value: any;
  placeholder: any;
  placeholderTextColor?: string;
  color?: string;
  bold?: boolean;
  hideTitle?: any;
  large?: boolean;
}

const PickerSelect: React.FC<Props> = ({
  style,
  rowDirection,
  colorTitle,
  customTitleStyle,
  title,
  titleRequired,
  bgPicker,
  disabled,
  onChangeValue,
  data,
  value,
  placeholder,
  color,
  bold,
  hideTitle,
  large,
}) => {
  return (
    <View
      style={[
        styles.container,
        style,
        {flexDirection: rowDirection ? 'row' : 'column'},
      ]}>
      {hideTitle ? null : (
        <Text
          s14b
          style={[
            styles.title,
            {
              // color: colorTitle ? colorTitle : colors.black,
              marginRight: rowDirection ? 7 : 0,
              textAlign: rowDirection ? 'right' : 'left',
              width: rowDirection ? 90 : '100%',
            },
            customTitleStyle,
          ]}>
          {title}
          {titleRequired && <Text style={{color: 'red'}}> (*)</Text>}
        </Text>
      )}
      <View
        style={[
          {
            backgroundColor: bgPicker ? bgPicker : colors.white,
            flex: rowDirection ? 1 : 0,
            borderRadius: 5,
          },
        ]}>
        <RNPickerSelect
          disabled={disabled}
          onValueChange={item => onChangeValue(item)}
          items={data}
          value={value}
          placeholder={
            placeholder ? placeholder : {label: '- Vui lòng chọn -', value: ''}
          }
          style={{
            inputIOS: {
              fontSize: 13,
              paddingVertical: large ? 20 : 15,
              paddingHorizontal: 10,
              //   fontFamily: fonts.regular,
              color: color ? color : '#000',
              borderRadius: 5,
              fontWeight: bold ? 'bold' : 'normal',
              paddingLeft: 10,
              borderWidth: 0.5,
            },
            inputAndroid: {
              fontSize: 13,
              paddingHorizontal: 7,
              paddingVertical: large ? 12 : 10,
              paddingLeft: large ? 20 : 20,
              //   fontFamily: fonts.regular,
              color: color ? color : '#000',
              paddingRight: 20,
              fontWeight: bold ? 'bold' : 'normal',
              borderWidth: 0.5,
              borderRadius: 10,
            },
            iconContainer: {
              top: Platform.OS === 'android' ? 10 : 10,
              right: 12,
            },
          }}
          useNativeAndroidPickerStyle={false}
          Icon={() => {
            return (
              <Image
                source={value === '' ? Icons.DOWN : ''}
                style={styles.icon}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginVertical: 10},
  title: {
    marginBottom: 5,
    // fontSize: 14,
    // fontWeight: 'bold',
  },
  icon: {
    width: 15,
    height: 15,
  },
});

export default React.memo(PickerSelect);
