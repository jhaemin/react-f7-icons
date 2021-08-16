import React from 'react'
import type { IconProps } from '../../types'

const RectangleFillOnRectangleAngledFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 9.6349 46.7440 L 9.6349 25.7668 C 9.6349 20.0143 12.6839 17.0060 18.4973 17.0060 L 44.3734 17.0060 L 43.6619 12.8796 C 42.9505 8.7533 40.4502 7.0458 36.2833 7.7776 L 5.9354 13.1439 C 1.7278 13.8756 0 16.3149 .7521 20.4615 L 4.4515 41.5200 C 5.0614 44.8943 6.8501 46.6017 9.6349 46.7440 Z M 18.8022 53.9803 L 49.6174 53.9803 C 53.8661 53.9803 56 51.8664 56 47.6790 L 56 26.0717 C 56 21.9047 53.8661 19.7907 49.6174 19.7907 L 18.8022 19.7907 C 14.5336 19.7907 12.4197 21.8844 12.4197 26.0717 L 12.4197 47.6790 C 12.4197 51.8664 14.5336 53.9803 18.8022 53.9803 Z"/></svg>
}

export default RectangleFillOnRectangleAngledFill
