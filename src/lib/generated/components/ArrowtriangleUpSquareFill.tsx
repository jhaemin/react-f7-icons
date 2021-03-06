import React from 'react'
import type { IconProps } from '../../types'

const ArrowtriangleUpSquareFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 36.6366 34.9961 L 20.5351 34.9961 C 19.4101 34.9961 18.9179 33.7071 19.5507 32.6758 L 27.3554 19.5274 C 27.8944 18.5664 29.2773 18.5196 29.8398 19.5274 L 37.6210 32.6758 C 38.2539 33.7774 37.7382 34.9961 36.6366 34.9961 Z"/></svg>
}

export default ArrowtriangleUpSquareFill
