import React from 'react';
import {StyleSheet, TouchableOpacity, useWindowDimensions} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import colors from '../styles/colors';
import '../styles/styles';

interface ItemTabsProp {
  id: number;
  tittle: string;
  active: boolean;
}

interface TabsProps {
  dataTabs: ItemTabsProp[];
  handleActiveTab: (index: number) => void;
  small?: true | false;
}

const TabsComponent: React.FC<TabsProps> = ({
  dataTabs,
  handleActiveTab,
  small,
}) => {
  const window = useWindowDimensions();

  return (
    <View row spread>
      {dataTabs.map((item, index) => {
        return (
          <View
            key={index}
            width={window.width / dataTabs.length}
            style={[css.item, item.active ? css.itemActive : null]}>
            <TouchableOpacity onPress={() => handleActiveTab(index)}>
              <View center paddingV-10>
                <Text
                  s14b
                  style={[
                    {color: item.active ? colors.main : colors.dark},
                    small && {fontSize: 12},
                  ]}>
                  {item.tittle}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default React.memo(TabsComponent);

const css = StyleSheet.create({
  item: {
    // paddingVertical: 10,
    borderBottomColor: colors.main,
    borderBottomWidth: 0.5,
  },
  itemActive: {
    borderBottomColor: colors.main,
    borderBottomWidth: 3,
  },
});
