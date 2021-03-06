import React from 'react'
import type { IconProps } from '../../types'

const MinusSquareFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 18.1210 30.0508 C 16.7382 30.0508 15.7773 29.3242 15.7773 28.0118 C 15.7773 26.6758 16.6913 25.9258 18.1210 25.9258 L 37.9257 25.9258 C 39.3554 25.9258 40.2460 26.6758 40.2460 28.0118 C 40.2460 29.3242 39.3085 30.0508 37.9257 30.0508 Z"/></svg>
}

export default MinusSquareFill
