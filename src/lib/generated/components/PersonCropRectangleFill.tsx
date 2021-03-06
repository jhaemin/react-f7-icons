import React from 'react'
import type { IconProps } from '../../types'

const PersonCropRectangleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 27.9882 32.8633 C 23.7929 32.8633 20.4413 29.3008 20.4413 24.5664 C 20.4413 20.1133 23.7929 16.5039 27.9882 16.5039 C 32.2070 16.5039 35.5585 20.1133 35.5585 24.5664 C 35.5585 29.3008 32.2070 32.8633 27.9882 32.8633 Z M 28.0117 36.5430 C 34.9492 36.5430 40.6210 39.5196 43.7147 45.8008 L 12.2851 45.8008 C 15.4023 39.5196 21.0507 36.5430 28.0117 36.5430 Z"/></svg>
}

export default PersonCropRectangleFill
