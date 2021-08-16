import React from 'react'
import type { IconProps } from '../../types'

const XmarkRectangle: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 7.7851 45.8008 C 5.4413 45.8008 4.1288 44.5586 4.1288 42.1211 L 4.1288 13.8789 C 4.1288 11.4414 5.4413 10.1992 7.7851 10.1992 L 48.2147 10.1992 C 50.5350 10.1992 51.8708 11.4414 51.8708 13.8789 L 51.8708 42.1211 C 51.8708 44.5586 50.5350 45.8008 48.2147 45.8008 Z M 20.3476 37.5039 C 20.8632 37.5039 21.2617 37.3164 21.6132 36.9649 L 27.9648 30.5664 L 34.3632 36.9649 C 34.7148 37.2930 35.0898 37.5039 35.6288 37.5039 C 36.6132 37.5039 37.4101 36.6836 37.4101 35.7227 C 37.4101 35.1836 37.2226 34.8086 36.8710 34.4571 L 30.4960 28.0820 L 36.8944 21.6602 C 37.2695 21.2852 37.4335 20.9336 37.4335 20.4180 C 37.4335 19.4336 36.6366 18.6602 35.6523 18.6602 C 35.1601 18.6602 34.8085 18.8008 34.4335 19.1758 L 27.9648 25.5977 L 21.5663 19.1992 C 21.2382 18.8477 20.8632 18.7071 20.3476 18.7071 C 19.3632 18.7071 18.5663 19.4571 18.5663 20.4414 C 18.5663 20.9571 18.7538 21.3320 19.0819 21.6836 L 25.4804 28.0820 L 19.0819 34.4805 C 18.7538 34.8086 18.5663 35.2071 18.5663 35.7227 C 18.5663 36.6836 19.3632 37.5039 20.3476 37.5039 Z"/></svg>
}

export default XmarkRectangle
