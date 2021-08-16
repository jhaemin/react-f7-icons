import React from 'react'
import type { IconProps } from '../../types'

const Nosign: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9219 32.8984 46.1874 37.3750 43.2812 40.8203 L 15.1796 12.7188 C 18.6249 9.8125 23.0780 8.0781 27.9765 8.0781 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 23.1250 9.8124 18.6719 12.6952 15.2266 L 40.7968 43.3281 C 37.3280 46.2109 32.8749 47.9219 27.9999 47.9219 Z"/></svg>
}

export default Nosign
