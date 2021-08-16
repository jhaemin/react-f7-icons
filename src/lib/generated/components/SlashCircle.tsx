import React from 'react'
import type { IconProps } from '../../types'

const SlashCircle: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 19.8436 38.1953 C 20.4999 38.1953 20.9921 37.9141 21.5077 37.3984 L 37.2577 21.4141 C 37.7499 20.9219 38.0546 20.3359 38.0546 19.7968 C 38.0546 18.7188 37.1640 17.8516 36.0858 17.8516 C 35.5234 17.8516 34.9843 18.1328 34.4687 18.6484 L 18.7421 34.6094 C 18.2030 35.1250 17.9452 35.7109 17.9452 36.25 C 17.9452 37.3047 18.7187 38.1953 19.8436 38.1953 Z"/></svg>
}

export default SlashCircle
