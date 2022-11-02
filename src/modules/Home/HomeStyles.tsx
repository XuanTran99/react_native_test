import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  flex: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  icon: {
    width: 15,
    height: 15,
  },
  smallIcon: {
    width: 13,
    height: 13,
  },

  wrap: {
    flexWrap: 'wrap',
  },
  postList: {
    // borderWidth: 0.5,
    // borderColor: colors.placeholder_light2,
  },
  bellIcon: {position: 'absolute', top: 10, right: 10, zIndex: 1},
  bellBadge: {bottom: 12, right: 10},
  sliderRadius: {
    borderRadius: 13,
  },
  btnLogin: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 7,
    borderColor: colors.black,
    borderWidth: 0.5,
  },
  showMoneyIcon: {position: 'absolute', bottom: 2},
  badge: {
    position: 'absolute',
    left: 10,
    top: -12,
    zIndex: 9,
    width: 30,
  },
});
