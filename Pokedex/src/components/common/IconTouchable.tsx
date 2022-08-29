import React from 'react';
import {
  Image,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

interface IProps extends TouchableOpacityProps {
  onPress?(): void;
  iconImage: any;
  customStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ViewStyle>;
}

const IconTouchable = (props: IProps) => {
  const {onPress, iconImage, customStyle, imageStyle} = props;
  return (
    <TouchableOpacity onPress={onPress} style={customStyle} {...props}>
      <Image source={iconImage} style={[styles.styleImgDefault, imageStyle]} />
    </TouchableOpacity>
  );
};

export default IconTouchable;

const styles = ScaledSheet.create({
  styleImgDefault: {
    width: '25@ms',
    height: '25@ms',
  },
});
