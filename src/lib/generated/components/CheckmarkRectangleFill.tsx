import React from 'react'
import type { IconProps } from '../../types'

const CheckmarkRectangleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z M 25.0819 39.5430 C 24.4023 39.5430 23.9101 39.3086 23.5351 38.8867 L 15.7070 30.1445 C 15.4023 29.7696 15.1913 29.3008 15.1913 28.7852 C 15.1913 27.6836 16.0117 26.8867 17.2070 26.8867 C 17.8866 26.8867 18.3554 27.0742 18.7773 27.5430 L 24.9882 34.4336 L 37.0819 17.3711 C 37.5507 16.6680 38.0195 16.4336 38.8866 16.4336 C 40.0351 16.4336 40.8319 17.2305 40.8319 18.3555 C 40.8319 18.7539 40.6913 19.2930 40.4335 19.6211 L 26.7226 38.8164 C 26.3944 39.2852 25.8085 39.5430 25.0819 39.5430 Z"/></svg>
}

export default CheckmarkRectangleFill
