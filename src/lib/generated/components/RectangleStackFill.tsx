import React from 'react'
import type { IconProps } from '../../types'

const RectangleStackFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.1640 4.6562 L 43.3280 4.6562 C 43.1874 2.6875 42.0624 1.6328 39.9062 1.6328 L 16.5858 1.6328 C 14.4296 1.6328 13.3046 2.6875 13.1640 4.6562 Z M 8.1015 11.1484 L 47.9454 11.1484 C 47.5936 9.0156 46.5625 7.8438 44.2187 7.8438 L 11.8046 7.8438 C 9.4609 7.8438 8.4531 9.0156 8.1015 11.1484 Z M 10.2343 54.3672 L 45.7888 54.3672 C 50.6641 54.3672 53.1251 51.9297 53.1251 47.1016 L 53.1251 22.2109 C 53.1251 17.3828 50.6641 14.9453 45.7888 14.9453 L 10.2343 14.9453 C 5.3358 14.9453 2.8749 17.3594 2.8749 22.2109 L 2.8749 47.1016 C 2.8749 51.9297 5.3358 54.3672 10.2343 54.3672 Z"/></svg>
}

export default RectangleStackFill
