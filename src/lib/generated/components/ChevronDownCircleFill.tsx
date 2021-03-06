import React from 'react'
import type { IconProps } from '../../types'

const ChevronDownCircleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 30.4374 35.1484 C 28.9140 36.7656 27.0858 36.7656 25.5390 35.1484 L 15.9062 24.8828 C 15.1562 24.0859 15.1562 22.9844 15.8358 22.2812 C 16.5858 21.4844 17.7577 21.4609 18.4609 22.2344 L 27.9999 32.3125 L 37.5390 22.2344 C 38.2421 21.4609 39.4140 21.4844 40.1640 22.2812 C 40.8436 22.9844 40.8436 24.0859 40.0936 24.8828 Z"/></svg>
}

export default ChevronDownCircleFill
