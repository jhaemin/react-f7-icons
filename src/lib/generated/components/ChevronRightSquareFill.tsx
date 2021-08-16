import React from 'react'
import type { IconProps } from '../../types'

const ChevronRightSquareFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 23.6992 40.1524 C 22.9492 39.4023 22.9726 38.1836 23.6992 37.5274 L 33.8241 27.9883 L 23.6992 18.4961 C 22.9257 17.7930 22.9960 16.5742 23.7226 15.8477 C 24.4257 15.1445 25.5742 15.1914 26.3476 15.9180 L 36.5898 25.5742 C 37.9726 26.8633 37.9726 29.1367 36.5898 30.4258 L 26.3476 40.0820 C 25.6444 40.7149 24.3554 40.8086 23.6992 40.1524 Z"/></svg>
}

export default ChevronRightSquareFill
