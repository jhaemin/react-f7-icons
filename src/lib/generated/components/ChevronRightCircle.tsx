import React from 'react'
import type { IconProps } from '../../types'

const ChevronRightCircle: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 22.5155 39.6016 C 23.1483 40.2109 24.3671 40.1641 25.0234 39.5312 L 34.7968 30.3437 C 36.1093 29.1016 36.1093 26.9453 34.7968 25.7266 L 25.0234 16.5156 C 24.2968 15.8594 23.2187 15.8125 22.5390 16.4453 C 21.8358 17.1250 21.7890 18.2968 22.5155 18.9766 L 32.1483 28.0234 L 22.5155 37.0937 C 21.8124 37.75 21.8124 38.9219 22.5155 39.6016 Z"/></svg>
}

export default ChevronRightCircle
