import React from 'react'
import type { IconProps } from '../../types'

const DivideSquareFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 27.9648 21.8477 C 26.3241 21.8477 25.0351 20.6758 25.0351 19.1289 C 25.0351 17.4180 26.3241 16.1758 27.9648 16.1758 C 29.7460 16.1758 30.9882 17.3945 30.9882 19.1289 C 30.9882 20.6523 29.7226 21.8477 27.9648 21.8477 Z M 18.4492 30.0508 C 17.0429 30.0508 16.1054 29.3477 16.1054 28.0118 C 16.1054 26.6758 16.9960 25.9258 18.4492 25.9258 L 37.6210 25.9258 C 39.0273 25.9258 39.9179 26.6758 39.9179 28.0118 C 39.9179 29.3477 38.9804 30.0508 37.6210 30.0508 Z M 27.9648 39.8008 C 26.3241 39.8008 25.0351 38.6055 25.0351 37.0820 C 25.0351 35.3242 26.3241 34.1289 27.9648 34.1289 C 29.7460 34.1289 30.9882 35.3242 30.9882 37.0820 C 30.9882 38.6055 29.7226 39.8008 27.9648 39.8008 Z"/></svg>
}

export default DivideSquareFill
