import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, TouchableOpacity} from 'react-native-ui-lib';
import colors from '../styles/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface SelectViewProps {
  title: string;
  isNotEmpty?: boolean;
  onChange: () => void;
  dataCurrent: any;
  showRightIcon?: true | false;
  right?: any;
}

const SelectViewSmall: React.FC<SelectViewProps> = ({
  title,
  isNotEmpty,
  onChange,
  dataCurrent,
  showRightIcon,
  right,
}) => {
  return (
    <View style={css.viewBorder}>
      <View style={css.viewTxt}>
        <Text s14b>
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
            {showRightIcon && (
              <AntDesign name="right" size={20} color={colors.gray} />
            )}
          </View>
        </TouchableOpacity>
      </View>

      <View absR style={css.viewRight}>
        {right}
      </View>
    </View>
  );
};

SelectViewSmall.defaultProps = {
  showRightIcon: true,
};

const css = StyleSheet.create({
  viewTxt: {
    position: 'absolute',
    top: -10,
    paddingHorizontal: 5,
    marginLeft: 5,
    backgroundColor: colors.white,
  },
  viewRight: {
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

export default SelectViewSmall;
