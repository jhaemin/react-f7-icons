import React from 'react'
import type { IconProps } from '../../types'

const PersonFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 28.0117 27.3672 C 33.0508 27.3672 37.3867 22.8672 37.3867 17.0078 C 37.3867 11.2187 33.0274 6.9297 28.0117 6.9297 C 22.9961 6.9297 18.6367 11.3125 18.6367 17.0547 C 18.6367 22.8672 22.9961 27.3672 28.0117 27.3672 Z M 13.2930 49.0703 L 42.7305 49.0703 C 46.4101 49.0703 47.7226 48.0156 47.7226 45.9531 C 47.7226 39.9062 40.1523 31.5625 28.0117 31.5625 C 15.8477 31.5625 8.2774 39.9062 8.2774 45.9531 C 8.2774 48.0156 9.5898 49.0703 13.2930 49.0703 Z"/></svg>
}

export default PersonFill
