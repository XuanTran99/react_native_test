import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableNativeFeedback,
  Touch,
} from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native-ui-lib';
import Image from 'react-native-fast-image';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../../styles/colors';
import { formatNumberToMoney } from '../../../utils/numbers';
import { Icons } from '../../../utils/images';

export interface Props {
  item: any;
  onPress: Function;
}

const PostItem: React.FC<Props> = ({ item, onPress }) => {
  const [orientation, setOrientation] = React.useState('LANDSCAPE');
  const determineAndSetOrientation = () => {
    let width = Dimensions.get('window').width;
    let height = Dimensions.get('window').height;

    if (width < height) {
      setOrientation('PORTRAIT');
    } else {
      setOrientation('LANDSCAPE');
    }
  };

  React.useEffect(() => {
    determineAndSetOrientation();
    Dimensions.addEventListener('change', determineAndSetOrientation);

    return () => {
      Dimensions.removeEventListener('change', determineAndSetOrientation);
    };
  }, []);

  return (
    <TouchableNativeFeedback onPress={() => onPress(item)}>
      <View style={styles.boxItem}>
        {item.post_img_video.length > 0 ? (
          <Image
            style={styles.image}
            source={{
              uri: item.post_img_video[0]?.url_image,
              priority: Image.priority.high,
            }}
            resizeMode={Image.resizeMode.cover}
          />
        ) : (
          <Image
            source={Icons.NO_IMAGE}
            resizeMode="center"
            style={styles.image}
          />
        )}

        <View
          absL
          margin-5
          paddingL-5
          paddingR-5
          padding-2
          br20
          row
          center
          backgroundColor="white">
          <Text dark10>{item.post_img_video.length} </Text>
          <FontAwesome name="file-photo-o" size={12} color={colors.dark} />
        </View>
        <View marginT-5 width={'100%'}>
          <Text numberOfLines={1}>{item?.title}</Text>
          <View row spread>
            <Text s14b red10>
              {formatNumberToMoney(item.post_description?.price)}
            </Text>
            <Text s14b dark40>
              {item.post_description?.area} m2
            </Text>
          </View>
          <View row>
            <Text s12 dark40>
              {moment(item.post_description.created_at).fromNow()}
            </Text>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  boxItem: {
    flex: 1,
    // width: width / 2 - 40,
    marginLeft: 15,
    marginTop: 15,
  },
  image: {
    // width: width / 2 - 25,
    height: 200,
    borderRadius: 5,
  },
});

export default PostItem;
