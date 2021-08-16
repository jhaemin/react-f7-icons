import React from 'react'
import type { IconProps } from '../../types'

const ArrowtriangleRightSquareFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 21.8710 19.9023 C 21.8710 18.8242 23.1835 18.3555 24.1913 18.9414 L 37.3632 26.7461 C 38.3007 27.3086 38.3241 28.6445 37.3632 29.2305 L 24.1913 37.0118 C 23.1132 37.6680 21.8710 37.1523 21.8710 36.0274 Z"/></svg>
}

export default ArrowtriangleRightSquareFill
