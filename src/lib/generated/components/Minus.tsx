import React from 'react'
import type { IconProps } from '../../types'

const Minus: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 10.7617 30.0977 L 45.2383 30.0977 C 46.3633 30.0977 47.3476 29.1367 47.3476 27.9883 C 47.3476 26.8398 46.3633 25.9023 45.2383 25.9023 L 10.7617 25.9023 C 9.6367 25.9023 8.6524 26.8398 8.6524 27.9883 C 8.6524 29.1367 9.6367 30.0977 10.7617 30.0977 Z"/></svg>
}

export default Minus
