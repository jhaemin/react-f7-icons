import React from 'react'
import type { IconProps } from '../../types'

const LogoWindows: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path d="M0,6.53296704 L18.7987417,3.972773 L18.8069593,22.1056809 L0.0171726113,22.2126832 L0,6.53296704 Z M18.7897868,24.1949451 L18.8043781,42.343656 L0.0145914519,39.760337 L0.0135379175,24.0732091 L18.7897868,24.1949451 Z M21.0686343,3.6378544 L45.9942056,0 L45.9942056,21.8750623 L21.0686343,22.0729424 L21.0686343,3.6378544 Z M46,24.3656176 L45.994153,46.1421745 L21.0685816,42.6242122 L21.033657,24.3248458 L46,24.3656176 Z" transform="translate(5 5)"/>
</svg>

}

export default LogoWindows
