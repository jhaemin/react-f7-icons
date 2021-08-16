import React from 'react'
import type { IconProps } from '../../types'

const ArrowtriangleUpCircleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 36.3436 34.6563 L 19.6327 34.6563 C 18.4609 34.6563 17.9687 33.2968 18.6249 32.2422 L 26.7109 18.5781 C 27.2733 17.6172 28.7030 17.5703 29.2890 18.5781 L 37.3514 32.2422 C 38.0077 33.3672 37.4921 34.6563 36.3436 34.6563 Z"/></svg>
}

export default ArrowtriangleUpCircleFill
