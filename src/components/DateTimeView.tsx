import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, View, TouchableOpacity} from 'react-native-ui-lib';
import colors from '../styles/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';

interface DateTimeViewProps {
  title: string;
  isNotEmpty?: boolean;
  onChange: (value: boolean) => void;
  dataCurrent: any;
  show: boolean;
  confirm: (date: any) => void;
  mode?: 'datetime' | 'time' | 'date';
  right?: any;
}

const DateTimeView: React.FC<DateTimeViewProps> = ({
  title,
  isNotEmpty,
  onChange,
  dataCurrent,
  show,
  confirm,
  mode,
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
        <TouchableOpacity
          flex-85
          onPress={() => onChange(true)}
          row
          spread
          paddingH-5>
          {dataCurrent ? (
            <Text s15>
              {mode === 'datetime'
                ? moment(dataCurrent, 'DD/MM/YYYY HH:mm').format(
                    'HH:mm DD/MM/YYYY',
                  )
                : mode === 'date'
                ? moment(dataCurrent, 'DD/MM/YYYY').format('DD/MM/YYYY')
                : moment(dataCurrent, 'HH:mm:ss').format('HH:mm:ss')}
            </Text>
          ) : (
            <Text s15 placeholder>
              Chạm để chọn
            </Text>
          )}
          <DateTimePickerModal
            isVisible={show}
            mode={mode}
            locale="vi"
            date={new Date()}
            onConfirm={confirm}
            confirmTextIOS="Chọn"
            cancelTextIOS="Huỷ"
            onCancel={() => onChange(false)}
          />

          <AntDesign name="right" size={20} color={colors.gray} />
        </TouchableOpacity>
      </View>
      <View absR style={css.viewRight}>
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
    padding: 10,
  },
});

export default DateTimeView;
