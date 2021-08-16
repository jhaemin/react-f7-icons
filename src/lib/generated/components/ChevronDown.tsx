import React from 'react'
import type { IconProps } from '../../types'

const ChevronDown: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 28.0000 39.4609 C 28.5859 39.4609 29.1718 39.2266 29.5703 38.7813 L 47.7344 20.1953 C 48.1328 19.7969 48.3672 19.2813 48.3672 18.6953 C 48.3672 17.4766 47.4297 16.5391 46.2109 16.5391 C 45.6484 16.5391 45.0859 16.7735 44.6875 17.1484 L 28.0000 34.2109 L 11.3125 17.1484 C 10.9140 16.7735 10.3750 16.5391 9.7891 16.5391 C 8.5703 16.5391 7.6328 17.4766 7.6328 18.6953 C 7.6328 19.2813 7.8672 19.7969 8.2656 20.2187 L 26.4297 38.7813 C 26.875 39.2266 27.3906 39.4609 28.0000 39.4609 Z"/></svg>
}

export default ChevronDown
