import React from 'react'
import type { IconProps } from '../../types'

const ArrowDownRightSquare: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 13.8554 45.8008 C 11.5117 45.8008 10.1992 44.5586 10.1992 42.1211 L 10.1992 13.8789 C 10.1992 11.4414 11.5117 10.1992 13.8554 10.1992 L 42.1679 10.1992 C 44.4882 10.1992 45.8007 11.4414 45.8007 13.8789 L 45.8007 42.1211 C 45.8007 44.5586 44.4882 45.8008 42.1679 45.8008 Z M 35.3710 22.1523 C 34.3398 22.1523 33.6601 22.8555 33.6601 23.9805 L 33.6601 28.0352 L 34.0117 31.6680 L 30.6366 28.0820 L 22.0117 19.4336 C 21.6835 19.1055 21.2382 18.8945 20.6757 18.8945 C 19.6444 18.8945 18.9413 19.5977 18.9413 20.6523 C 18.9413 21.1211 19.1757 21.5664 19.5039 21.8945 L 28.1523 30.5430 L 31.8085 33.9414 L 28.3398 33.5664 L 24.0742 33.5664 C 22.9492 33.5664 22.2226 34.2461 22.2226 35.3008 C 22.2226 36.3320 22.9257 37.0118 24.0273 37.0118 L 35.1366 37.0118 C 36.3320 37.0118 37.1054 36.4492 37.1054 35.0664 L 37.1054 24.0274 C 37.1054 22.9258 36.4023 22.1523 35.3710 22.1523 Z"/></svg>
}

export default ArrowDownRightSquare
