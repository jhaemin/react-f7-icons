import React from 'react'
import type { IconProps } from '../../types'

const SmallcircleFillCircle: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 28.0234 34.8906 C 31.7733 34.8906 34.8905 31.7968 34.8905 28 C 34.8905 24.25 31.7733 21.1797 28.0234 21.1797 C 24.2499 21.1797 21.1327 24.25 21.1327 28 C 21.1327 31.7968 24.2499 34.8906 28.0234 34.8906 Z"/></svg>
}

export default SmallcircleFillCircle
