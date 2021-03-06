import React from 'react'
import type { IconProps } from '../../types'

const StopFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 8.8984 41.9219 C 8.8984 45.1797 10.8672 47.1016 14.1719 47.1016 L 41.8281 47.1016 C 45.1328 47.1016 47.1016 45.1797 47.1016 41.9219 L 47.1016 14.0781 C 47.1016 10.8203 45.1328 8.8984 41.8281 8.8984 L 14.1719 8.8984 C 10.8672 8.8984 8.8984 10.8203 8.8984 14.0781 Z"/></svg>
}

export default StopFill
