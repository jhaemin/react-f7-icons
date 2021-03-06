import React from 'react'
import type { IconProps } from '../../types'

const CircleBottomthirdSplit: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9219 30.6016 47.4296 33.0625 46.5624 35.3125 L 9.4609 35.3125 C 8.5702 33.0625 8.1014 30.6016 8.1014 28 Z M 27.9999 47.9219 C 20.9452 47.9219 14.8046 44.3359 11.2655 38.8516 L 44.7343 38.8516 C 41.1952 44.3359 35.0312 47.9219 27.9999 47.9219 Z"/></svg>
}

export default CircleBottomthirdSplit
