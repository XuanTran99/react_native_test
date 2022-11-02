import React, {Component} from 'react';
import {
  Image,
  ActivityIndicator,
  TouchableHighlight,
  Dimensions,
  Text,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {View} from 'react-native-ui-lib';
import YoutubePlayer from 'react-native-youtube-iframe';
import {getIdVideoYoutube} from '../../utils/stringUtils';

import Carousel, {Pagination} from 'react-native-snap-carousel'; //Thank From distributer(s) of this lib
import styles from './SliderBox.style';

// -------------------Props--------------------
// images
// onCurrentImagePressed
// sliderBoxHeight
// parentWidth
// dotColor
// inactiveDotColor
// dotStyle
// paginationBoxVerticalPadding
// circleLoop
// autoplay
// ImageComponent
// ImageLoader
// paginationBoxStyle
// resizeMethod
// resizeMode
// ImageComponentStyle,
// imageLoadingColor = "#E91E63"
// firstItem = 0
// activeOpacity

const width = Dimensions.get('window').width;

export class SliderBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: props.firstItem || 0,
      loading: [],
      play: false,
    };
    this.onCurrentImagePressedHandler =
      this.onCurrentImagePressedHandler.bind(this);
    this.onSnap = this.onSnap.bind(this);
    this._renderItem = this._renderItem.bind(this);
  }

  componentDidMount() {
    //let a = [...Array(this.props.images.length).keys()].map((i) => false);
  }

  onCurrentImagePressedHandler() {
    if (this.props.onCurrentImagePressed) {
      this.props.onCurrentImagePressed(this.state.currentImage);
    }
  }

  onSnap(index) {
    const {currentImageEmitter} = this.props;
    this.setState({currentImage: index}, () => {
      if (currentImageEmitter) {
        currentImageEmitter(this.state.currentImage);
      }
    });
  }

  _renderItem({item, index}) {
    const {
      ImageComponent,
      ImageComponentStyle = {},
      LoaderComponent,
      sliderBoxHeight,
      disableOnPress,
      resizeMethod,
      resizeMode,
      imageLoadingColor = '#E91E63',
      underlayColor = 'transparent',
      activeOpacity = 0.85,
    } = this.props;
    return (
      <View
        style={{
          position: 'relative',
          justifyContent: 'center',
        }}>
        {item.type === 'image' && (
          <TouchableHighlight
            key={index}
            underlayColor={underlayColor}
            disabled={disableOnPress}
            onPress={this.onCurrentImagePressedHandler}
            activeOpacity={activeOpacity}>
            <View>
              <ImageComponent
                style={[
                  {
                    width: '100%',
                    height: sliderBoxHeight || 200,
                    alignSelf: 'center',
                  },
                  ImageComponentStyle,
                ]}
                source={
                  typeof item.type === 'string' ? {uri: item.uri} : item.uri
                }
                resizeMethod={resizeMethod || 'resize'}
                resizeMode={resizeMode || 'cover'}
                //onLoad={() => {}}
                //onLoadStart={() => {}}
                onLoadEnd={() => {
                  let t = this.state.loading;
                  t[index] = true;
                  this.setState({loading: t});
                }}
                {...this.props}
              />
            </View>
          </TouchableHighlight>
        )}

        {item.type === 'video' && (
          <View>
            {this.state.play ? (
              <YoutubePlayer
                height={sliderBoxHeight || 200}
                play={this.state.play}
                videoId={getIdVideoYoutube(item.uri)}
              />
            ) : (
              <TouchableHighlight
                key={index}
                underlayColor={underlayColor}
                disabled={disableOnPress}
                onPress={() => this.setState({play: true})}
                activeOpacity={activeOpacity}>
                <View>
                  <View center>
                    <ImageComponent
                      style={[
                        {
                          width: '100%',
                          height: sliderBoxHeight || 200,
                          alignSelf: 'center',
                        },
                        ImageComponentStyle,
                      ]}
                      source={{
                        uri: `https://img.youtube.com/vi/${getIdVideoYoutube(
                          item.uri,
                        )}/hqdefault.jpg`,
                      }}
                      resizeMethod={resizeMethod || 'resize'}
                      resizeMode={resizeMode || 'contain'}
                      //onLoad={() => {}}
                      //onLoadStart={() => {}}
                      onLoadEnd={() => {
                        let t = this.state.loading;
                        t[index] = true;
                        this.setState({loading: t});
                      }}
                      {...this.props}
                    />
                    <View style={{position: 'absolute'}}>
                      <AntDesign name="play" size={50} color="white" />
                    </View>
                  </View>
                </View>
              </TouchableHighlight>
            )}
          </View>
        )}

        {/* {this.state.play ? (
          <YoutubePlayer
            height={sliderBoxHeight || 200}
            play={this.state.play}
            videoId={getIdVideoYoutube(item.uri)}
          />
        ) : (

        )} */}

        {!this.state.loading[index] && (
          <LoaderComponent
            index={index}
            size="large"
            color={imageLoadingColor}
            style={{
              position: 'absolute',
              alignSelf: 'center',
            }}
          />
        )}
      </View>
    );
  }

  get pagination() {
    const {currentImage} = this.state;
    const {
      images,
      dotStyle,
      dotColor,
      inactiveDotColor,
      paginationBoxStyle,
      paginationBoxVerticalPadding,
    } = this.props;
    return (
      <Pagination
        borderRadius={2}
        dotsLength={images.length}
        activeDotIndex={currentImage}
        dotStyle={dotStyle || styles.dotStyle}
        dotColor={dotColor || colors.dotColors}
        inactiveDotColor={inactiveDotColor || colors.white}
        inactiveDotScale={0.8}
        carouselRef={this._ref}
        inactiveDotOpacity={0.8}
        tappableDots={!!this._ref}
        containerStyle={[
          styles.paginationBoxStyle,
          paginationBoxVerticalPadding
            ? {paddingVertical: paginationBoxVerticalPadding}
            : {},
          paginationBoxStyle ? paginationBoxStyle : {},
        ]}
        {...this.props}
      />
    );
  }

  render() {
    const {
      images,
      circleLoop,
      autoplay,
      parentWidth,
      loopClonesPerSide,
      autoplayDelay,
      useScrollView,
    } = this.props;
    return (
      <View>
        <Carousel
          autoplayDelay={autoplayDelay}
          layout={'default'}
          useScrollView={useScrollView}
          data={images}
          ref={c => (this._ref = c)}
          loop={circleLoop || false}
          enableSnap={true}
          autoplay={autoplay || false}
          itemWidth={parentWidth || width}
          sliderWidth={parentWidth || width}
          loopClonesPerSide={loopClonesPerSide || 5}
          renderItem={this._renderItem}
          onSnapToItem={index => this.onSnap(index)}
          {...this.props}
        />
        {images.length > 1 && this.pagination}
      </View>
    );
  }
}

const colors = {
  dotColors: '#BDBDBD',
  white: '#FFFFFF',
};

SliderBox.defaultProps = {
  ImageComponent: Image,
  LoaderComponent: ActivityIndicator,
};
