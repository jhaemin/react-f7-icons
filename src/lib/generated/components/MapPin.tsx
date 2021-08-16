import React from 'react'
import type { IconProps } from '../../types'

const MapPin: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 28.0117 52.8203 C 28.9492 52.8203 30.1679 49.0703 30.1679 42.1328 L 30.1679 20.5703 C 33.9883 19.6094 36.8008 16.1406 36.8008 12.0156 C 36.8008 7.1641 32.8867 3.1797 28.0117 3.1797 C 23.1133 3.1797 19.1992 7.1641 19.1992 12.0156 C 19.1992 16.1172 22.0117 19.5859 25.8086 20.5703 L 25.8086 42.1328 C 25.8086 49.0469 27.0508 52.8203 28.0117 52.8203 Z M 25.4805 12.5078 C 23.8867 12.5078 22.4805 11.1016 22.4805 9.4609 C 22.4805 7.8437 23.8867 6.4609 25.4805 6.4609 C 27.1445 6.4609 28.4805 7.8437 28.4805 9.4609 C 28.4805 11.1016 27.1445 12.5078 25.4805 12.5078 Z"/></svg>
}

export default MapPin
