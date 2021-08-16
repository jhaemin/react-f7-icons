import React from 'react'
import type { IconProps } from '../../types'

const TagCircleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 15.0390 20.9453 C 15.0390 19.8672 15.3202 19.2578 16.0468 18.5313 L 18.1327 16.4687 C 18.8593 15.7656 19.4687 15.2969 20.5468 15.2969 L 25.1874 15.2969 C 26.6171 15.2969 27.2733 15.9766 28.1640 16.8906 L 39.6014 28.4453 C 41.0780 29.9219 41.0546 31.3047 39.6483 32.7344 L 32.4999 39.9062 C 31.0702 41.3125 29.6640 41.3359 28.1874 39.8594 L 16.6327 28.4219 C 15.7187 27.5313 15.0390 26.875 15.0390 25.4219 Z M 23.6874 23.9453 C 24.4374 23.1719 24.4140 21.9297 23.6874 21.1562 C 22.9374 20.4062 21.6718 20.4297 20.9218 21.1562 C 20.1718 21.9297 20.1952 23.1484 20.9452 23.8984 C 21.7187 24.6719 22.9374 24.6719 23.6874 23.9453 Z"/></svg>
}

export default TagCircleFill
