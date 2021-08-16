import React from 'react'
import type { IconProps } from '../../types'

const Control: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 8.2656 35.7812 C 7.8672 36.2031 7.6328 36.7187 7.6328 37.3047 C 7.6328 38.5234 8.5703 39.4609 9.7891 39.4609 C 10.3750 39.4609 10.9140 39.2031 11.3125 38.8281 L 28.0000 21.7891 L 44.6875 38.8281 C 45.0859 39.2031 45.6484 39.4609 46.2109 39.4609 C 47.4297 39.4609 48.3672 38.5234 48.3672 37.3047 C 48.3672 36.7187 48.1328 36.2031 47.7344 35.7812 L 29.5703 17.2187 C 29.1718 16.7734 28.5859 16.5391 28.0000 16.5391 C 27.3906 16.5391 26.875 16.7734 26.4297 17.2187 Z"/></svg>
}

export default Control
