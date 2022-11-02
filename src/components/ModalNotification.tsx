import React from 'react';
import {StyleSheet} from 'react-native';
import {Dialog, Text, TouchableOpacity, View} from 'react-native-ui-lib';
import colors from '../styles/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface ModalNotificationProps {
  content: string;
  visible: true | false;
  setVisible: Function;
  onClick?: () => void;
}

const ModalNotification: React.FC<ModalNotificationProps> = ({
  content,
  visible,
  setVisible,
  onClick,
}) => {
  return (
    <Dialog
      center
      width={'90%'}
      visible={visible}
      onDismiss={() => setVisible(false)}
      onModalDismissed={() => setVisible(false)}>
      <View backgroundColor="white" br30 paddingT-50 paddingB-50 padding-20>
        <Text s20b center>
          Thông báo
        </Text>
        <View marginT-20>
          <Text s14 dark10>
            {content}
          </Text>
        </View>
        <View row spread marginT-30 marginR-30 marginL-30>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Text yellow10 s16b>
              ĐÓNG
            </Text>
          </TouchableOpacity>
          {/* <Text yellow10 s16b>
            ĐĂNG NHẬP
          </Text> */}
        </View>
      </View>
    </Dialog>
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

export default ModalNotification;
