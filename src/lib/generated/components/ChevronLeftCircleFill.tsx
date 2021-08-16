import React from 'react'
import type { IconProps } from '../../types'

const ChevronLeftCircleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 32.3124 40.1875 C 31.6562 40.8437 30.3905 40.7500 29.6874 40.1172 L 19.4218 30.4609 C 18.0624 29.1484 18.0390 26.8984 19.4218 25.6094 L 29.6874 15.9531 C 30.4609 15.2266 31.5858 15.1797 32.2890 15.8828 C 33.0155 16.6094 33.0858 17.8281 32.3358 18.5312 L 22.2109 28.0234 L 32.3358 37.5625 C 33.0390 38.2422 33.0624 39.4375 32.3124 40.1875 Z"/></svg>
}

export default ChevronLeftCircleFill
