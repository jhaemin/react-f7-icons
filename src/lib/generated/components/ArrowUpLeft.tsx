import React from 'react'
import type { IconProps } from '../../types'

const ArrowUpLeft: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 11.9805 36.2149 C 11.9805 37.4570 12.9414 38.3711 14.0664 38.3711 C 15.1914 38.3711 16.1289 37.3867 16.1289 36.3086 L 16.1289 28.8320 L 15.7071 18.1680 L 19.4571 22.4102 L 40.4102 43.3867 C 40.8555 43.8086 41.3476 44.0195 41.8633 44.0195 C 43.0117 44.0195 44.0195 42.9648 44.0195 41.8633 C 44.0195 41.3711 43.7852 40.8555 43.3633 40.4336 L 22.4102 19.4570 L 18.1680 15.7070 L 29.3242 16.1289 L 36.3086 16.1289 C 37.3867 16.1289 38.3476 15.1914 38.3476 14.0898 C 38.3476 12.9883 37.5039 12.0273 36.2149 12.0273 L 14.2071 11.9805 C 12.8242 11.9805 11.9805 12.8711 11.9805 14.2070 Z"/></svg>
}

export default ArrowUpLeft
