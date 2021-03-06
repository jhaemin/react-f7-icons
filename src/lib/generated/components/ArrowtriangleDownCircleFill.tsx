import React from 'react'
import type { IconProps } from '../../types'

const ArrowtriangleDownCircleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 36.3436 21.4141 C 37.4921 21.4141 38.0077 22.6797 37.3514 23.8047 L 29.2890 37.4688 C 28.7030 38.4766 27.2733 38.4297 26.7109 37.4688 L 18.6249 23.8047 C 17.9687 22.75 18.4609 21.4141 19.6327 21.4141 Z"/></svg>
}

export default ArrowtriangleDownCircleFill
