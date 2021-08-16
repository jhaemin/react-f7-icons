import React from 'react'
import type { IconProps } from '../../types'

const ArrowUpCircle: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 27.9999 15.9531 C 27.4843 15.9531 27.1093 16.1406 26.6405 16.6094 L 18.6718 24.5312 C 18.3671 24.8359 18.2265 25.2578 18.2265 25.75 C 18.2265 26.7109 18.9530 27.4375 19.9140 27.4375 C 20.4062 27.4375 20.8514 27.25 21.1562 26.9219 L 24.0624 23.9922 L 26.4296 21.1797 L 26.2421 26.1250 L 26.2421 38.3359 C 26.2421 39.3672 26.9687 40.0937 27.9999 40.0937 C 29.0077 40.0937 29.7577 39.3672 29.7577 38.3359 L 29.7577 26.1250 L 29.5702 21.1563 L 31.9374 23.9922 L 34.8436 26.9219 C 35.1483 27.2734 35.5702 27.4375 36.0858 27.4375 C 37.0468 27.4375 37.7968 26.7109 37.7968 25.75 C 37.7968 25.2578 37.6327 24.8359 37.3046 24.5312 L 29.3827 16.6094 C 28.9140 16.1641 28.5155 15.9531 27.9999 15.9531 Z"/></svg>
}

export default ArrowUpCircle
