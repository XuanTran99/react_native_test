import React from 'react';
import {Dimensions} from 'react-native';
import {View, Text} from 'react-native-ui-lib';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export interface Props {
  dataInfo: any;
  onPressMap: Function;
  showTextInstruction?: Boolean;
}
const LocationMapView: React.FC<Props> = ({
  dataInfo,
  onPressMap,
  showTextInstruction,
}) => {
  return (
    <View width={'100%'} height={screenWidth}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        initialRegion={{
          latitude: parseFloat(dataInfo.coor_lat),
          longitude: parseFloat(dataInfo.coor_long),
          latitudeDelta: 0.02,
          longitudeDelta: 0.02 * (screenWidth / screenHeight),
        }}
        region={{
          latitude: parseFloat(dataInfo.coor_lat),
          longitude: parseFloat(dataInfo.coor_long),
          latitudeDelta: 0.02,
          longitudeDelta: 0.02 * (screenWidth / screenHeight),
        }}
        zoomEnabled={true}
        showsTraffic={true}
        showsScale={true}
        showsCompass={true}
        showsPointsOfInterest={true}
        // onPress={e => onPressMap(e.nativeEvent)}
        onLongPress={e => onPressMap(e.nativeEvent)}
        mapType={'hybrid'}>
        <Marker
          coordinate={{
            latitude: parseFloat(dataInfo.coor_lat),
            longitude: parseFloat(dataInfo.coor_long),
          }}
        />
      </MapView>
      {showTextInstruction && (
        <View backgroundColor="white" height={100} width={'100%'} paddingV-10>
          <Text>
            Để tăng độ tin cậy và tin rao được nhiều người quan tâm hơn, hãy
            thêm vị trí đăng tin của bạn trên bản đồ bằng cách di chuyển bản đồ
            và nhấn chọn vào vị trí bạn cần thêm.
          </Text>
        </View>
      )}
    </View>
  );
};

LocationMapView.defaultProps = {
  showTextInstruction: true,
};

export default LocationMapView;
