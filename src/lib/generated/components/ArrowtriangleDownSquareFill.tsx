import React from 'react'
import type { IconProps } from '../../types'

const ArrowtriangleDownSquareFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 36.6366 20.6289 C 37.7382 20.6289 38.2539 21.8477 37.6210 22.9258 L 29.8398 36.0977 C 29.2539 37.0820 27.8944 37.0586 27.3554 36.0977 L 19.5507 22.9258 C 18.9413 21.9180 19.4101 20.6289 20.5351 20.6289 Z"/></svg>
}

export default ArrowtriangleDownSquareFill
