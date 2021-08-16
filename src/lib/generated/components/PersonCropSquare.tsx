import React from 'react'
import type { IconProps } from '../../types'

const PersonCropSquare: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 28.0117 35.8164 C 19.6913 35.8164 13.7148 39.8242 11.1835 44.9102 C 10.5507 44.2774 10.1992 43.3633 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 43.3399 45.4726 44.2774 44.8398 44.8867 C 42.3320 39.8008 36.5429 35.8164 28.0117 35.8164 Z M 28.0117 31.9023 C 32.4882 31.9492 36.0273 28.1289 36.0273 23.1133 C 36.0273 18.4023 32.4882 14.5118 28.0117 14.5118 C 23.5351 14.5118 19.9726 18.4023 19.9960 23.1133 C 20.0429 28.1289 23.5351 31.8320 28.0117 31.9023 Z"/></svg>
}

export default PersonCropSquare
