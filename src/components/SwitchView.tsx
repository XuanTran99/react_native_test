import React from 'react';
import {Text, View, Switch} from 'react-native-ui-lib';
import colors from '../styles/colors';

interface SwitchViewProps {
  title: string;
  value: boolean;
  onChange: (val: boolean) => void;
}

const SwitchView: React.FC<SwitchViewProps> = ({title, value, onChange}) => {
  return (
    <View row spread marginT-30 marginB-10>
      <Text s16b>{title}</Text>
      <Switch
        offColor={colors.dark2}
        onColor={colors.secondMain}
        value={value}
        onValueChange={(val: boolean) => onChange(val)}
      />
    </View>
  );
};

export default SwitchView;
