import React from 'react'
import type { IconProps } from '../../types'

const CircleLefthalfFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 28.0117 51.2734 C 40.7382 51.2734 51.2852 40.7266 51.2852 28 C 51.2852 15.2968 40.7148 4.7266 27.9882 4.7266 C 15.2617 4.7266 4.7148 15.2968 4.7148 28 C 4.7148 40.7266 15.2851 51.2734 28.0117 51.2734 Z M 28.0117 47.3125 L 27.9882 8.7109 C 38.6757 8.7109 47.2773 17.3125 47.3007 28 C 47.3242 38.7109 38.6991 47.3125 28.0117 47.3125 Z"/></svg>
}

export default CircleLefthalfFill
