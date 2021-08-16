import React from 'react'
import type { IconProps } from '../../types'

const MoneyRubl: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path fill-rule="evenodd" d="M9,4 L9,16 L13.598,16 C17.866,16 20,13.6641221 20,9.97709924 C20,6.3129771 17.866,4 13.62,4 L9,4 Z M14.9168854,20.1355932 L9.14260717,20.1355932 L9.14260717,24.519774 L17.9133858,24.519774 L17.9133858,27.0734463 L9.14260717,27.0734463 L9.14260717,32 L4.3088364,32 L4.3088364,27.0734463 L0,27.0734463 L0,24.519774 L4.3088364,24.519774 L4.3088364,20.1355932 L0,20.1355932 L0,17.559322 L4.3088364,17.559322 L4.3088364,0 L15.0699913,0 C21.0848644,0 25,4.29378531 25,10.1016949 C25,15.8870056 20.9973753,20.1355932 14.9168854,20.1355932 Z" transform="translate(15 12)"/>
</svg>

}

export default MoneyRubl
