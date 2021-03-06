import React from 'react'
import type { IconProps } from '../../types'

const ArrowtriangleUpCircle: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 35.6640 33.9531 C 36.7187 33.9531 37.2109 32.7812 36.6014 31.7500 L 29.1718 19.2109 C 28.6562 18.25 27.3436 18.2968 26.8046 19.2109 L 19.3749 31.7500 C 18.7890 32.7109 19.2343 33.9531 20.2890 33.9531 Z"/></svg>
}

export default ArrowtriangleUpCircle
