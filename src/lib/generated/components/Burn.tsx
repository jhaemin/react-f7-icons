import React from 'react'
import type { IconProps } from '../../types'

const Burn: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9530 28 L 17.9921 45.2734 C 12.0624 41.8281 8.1014 35.4063 8.1014 28 L 27.9530 28 L 17.9921 10.7266 C 20.9218 9.0390 24.3202 8.0781 27.9765 8.0781 C 31.6093 8.0781 35.0077 9.0390 37.9374 10.7266 L 27.9530 28 L 47.9219 28 C 47.9219 35.4297 43.9374 41.8750 37.9609 45.2969 Z"/></svg>
}

export default Burn
