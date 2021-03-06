import React from 'react'
import type { IconProps } from '../../types'

const PlayRectangleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 23.3710 37.2696 C 22.2460 37.9258 20.9804 37.1992 20.9804 36.0274 L 20.9804 19.9727 C 20.9804 18.8242 22.3163 18.1211 23.3710 18.7305 L 36.8710 26.7461 C 37.8554 27.3086 37.9023 28.6914 36.8710 29.3008 Z"/></svg>
}

export default PlayRectangleFill
