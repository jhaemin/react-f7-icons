import React from 'react'
import type { IconProps } from '../../types'

const ArrowtriangleDownCircle: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 35.1483 22.0937 L 19.7968 22.0937 C 18.7187 22.0937 18.2733 23.3359 18.8593 24.2968 L 26.2890 36.8594 C 26.8280 37.75 28.1405 37.7968 28.6562 36.8594 L 36.0858 24.2968 C 36.6952 23.2656 36.2030 22.0937 35.1483 22.0937 Z"/></svg>
}

export default ArrowtriangleDownCircle
