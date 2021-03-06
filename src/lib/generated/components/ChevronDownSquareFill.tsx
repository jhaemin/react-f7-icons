import React from 'react'
import type { IconProps } from '../../types'

const ChevronDownSquareFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 31.0351 35.1367 C 29.4882 36.7774 27.6835 36.7774 26.1601 35.1367 L 16.5039 24.8945 C 15.7539 24.0977 15.7539 22.9961 16.4335 22.2930 C 17.1835 21.5196 18.3554 21.4727 19.0820 22.2461 L 28.5976 32.3242 L 38.1366 22.2461 C 38.8163 21.4727 40.0117 21.5196 40.7617 22.2930 C 41.4413 22.9961 41.4179 24.0977 40.6913 24.8945 Z"/></svg>
}

export default ChevronDownSquareFill
