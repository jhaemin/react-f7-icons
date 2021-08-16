import React from 'react'
import type { IconProps } from '../../types'

const StopCircleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 20.1014 33.7890 L 20.1014 22.2344 C 20.1014 20.9219 20.9452 20.1250 22.2812 20.1250 L 33.7187 20.1250 C 35.0546 20.1250 35.8749 20.9219 35.8749 22.2344 L 35.8749 33.7890 C 35.8749 35.1016 35.0546 35.8984 33.7187 35.8984 L 22.2812 35.8984 C 20.9452 35.8984 20.1014 35.1016 20.1014 33.7890 Z"/></svg>
}

export default StopCircleFill
