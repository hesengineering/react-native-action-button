import * as React from 'react'
import {
  ViewStyle,
  ViewProperties,
  TextStyle,
  ImageSourcePropType
} from 'react-native'


export interface ActionButtonProperties extends ViewProperties {
  resetToken?: any,
  active?: boolean,

  position?: string,
  elevation?: number,
  zIndex?: number,

  hideShadow?: boolean,
  shadowStyle?: {} | [any] | number,
  bgColor?: string,
  bgOpacity?: number,
  buttonColor?: string,
  buttonTextStyle?: TextStyle,
  buttonText?: string,
  imageSource?: ImageSourcePropType,

  offsetX?: number,
  offsetY?: number,
  spacing?: number,
  size?: number,
  autoInactive?: boolean,
  onPress?: (active: boolean) => void,
  onReset?: () => void,
  renderIcon?: (active: boolean) => React.ReactElement<any>,
  backdrop?: boolean | object,
  degrees?: number,
  verticalOrientation?: 'up' | 'down',
  backgroundTappable?: boolean,
  activeOpacity?: number,

  useNativeFeedback?: boolean,
  fixNativeFeedbackRadius?: boolean,
  nativeFeedbackRippleColor?: string
}

export interface ActionButtonItemProperties extends ViewProperties {
  size?: number,
  title?: string
  onPress?:	() => void
  buttonColor?:	string
  textContainerStyle?: ViewStyle
  textStyle?: TextStyle
  spaceBetween?: number
  activeOpacity?:	number
  hideLabelShadow?:	boolean
  shadowStyle?:	ViewStyle
  useNativeFeedback?:	boolean
  fixNativeFeedbackRadius?:	boolean
  nativeFeedbackRippleColor?: string
}

export class ActionButtonItem extends React.Component <ActionButtonItemProperties> {}
export default class ActionButton extends React.Component <ActionButtonProperties> {
  static Item: typeof ActionButtonItem
}
