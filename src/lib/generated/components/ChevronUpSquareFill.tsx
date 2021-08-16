import React from 'react'
import type { IconProps } from '../../types'

const ChevronUpSquareFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 31.0351 20.8398 L 40.6913 31.0820 C 41.4179 31.8789 41.4413 33.0039 40.7617 33.7071 C 40.0117 34.4805 38.8163 34.5039 38.1366 33.7305 L 28.5976 23.6758 L 19.0820 33.7305 C 18.3554 34.5039 17.1835 34.4805 16.4335 33.7071 C 15.7539 33.0039 15.7539 31.8789 16.5039 31.0820 L 26.1601 20.8398 C 27.6835 19.1992 29.4882 19.1992 31.0351 20.8398 Z"/></svg>
}

export default ChevronUpSquareFill
