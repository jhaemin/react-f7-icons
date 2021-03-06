import React from 'react'
import type { IconProps } from '../../types'

const MinusRectangleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 18.2148 30.0742 C 16.8319 30.0742 15.8007 29.3242 15.8007 28.0118 C 15.8007 26.6289 16.7851 25.8320 18.2148 25.8320 L 37.7851 25.8320 C 39.2382 25.8320 40.1757 26.6289 40.1757 28.0118 C 40.1757 29.3242 39.1679 30.0742 37.7851 30.0742 Z"/></svg>
}

export default MinusRectangleFill
