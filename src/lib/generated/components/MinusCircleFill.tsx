import React from 'react'
import type { IconProps } from '../../types'

const MinusCircleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 18.0858 30.0859 C 16.7030 30.0859 15.7421 29.3594 15.7421 28.0469 C 15.7421 26.7109 16.6562 25.9609 18.0858 25.9609 L 37.8905 25.9609 C 39.3202 25.9609 40.2109 26.7109 40.2109 28.0469 C 40.2109 29.3594 39.2733 30.0859 37.8905 30.0859 Z"/></svg>
}

export default MinusCircleFill
