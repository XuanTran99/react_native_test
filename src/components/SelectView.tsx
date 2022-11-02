import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {Text, View, TouchableOpacity} from 'react-native-ui-lib';
import colors from '../styles/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface SelectViewProps {
  title: string;
  isNotEmpty?: boolean;
  onChange: () => void;
  dataCurrent: any;
}

const SelectView: React.FC<SelectViewProps> = ({
  title,
  isNotEmpty,
  onChange,
  dataCurrent,
}) => {
  return (
    <View style={css.viewBorder}>
      <View style={css.viewTxt}>
        <Text s16b>
          {title} {isNotEmpty && <Text error>*</Text>}
        </Text>
      </View>

      <View row centerV spread marginT-7>
        <TouchableOpacity flex-70 centerV onPress={onChange}>
          <View style={css.viewInput} row centerV spread>
            <View>
              {dataCurrent ? (
                <Text s15 black>
                  {dataCurrent}
                </Text>
              ) : (
                <Text s15 gray>
                  Chạm để chọn
                </Text>
              )}
            </View>
            <AntDesign name="right" size={20} color={colors.gray} />
          </View>
        </TouchableOpacity>
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
    marginTop: 25,
    height: 50,
    padding: 10,
  },
  icArrR: {
    width: 20,
    height: 20,
  },
  viewInput: {
    borderRadius: 5,
    paddingHorizontal: 5,
  },
  icAdd: {
    width: 30,
    height: 30,
  },
});

export default SelectView;
