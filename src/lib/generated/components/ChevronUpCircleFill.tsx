import React from 'react'
import type { IconProps } from '../../types'

const ChevronUpCircleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 30.4374 20.9219 L 40.0936 31.1641 C 40.8436 31.9609 40.8436 33.0859 40.1640 33.7656 C 39.4140 34.5625 38.2421 34.5859 37.5390 33.8125 L 27.9999 23.7344 L 18.4609 33.8125 C 17.7577 34.5859 16.5858 34.5625 15.8358 33.7656 C 15.1562 33.0859 15.1562 31.9609 15.9062 31.1641 L 25.5390 20.9219 C 27.0858 19.2812 28.9140 19.2812 30.4374 20.9219 Z"/></svg>
}

export default ChevronUpCircleFill
