import React from 'react'
import type { IconProps } from '../../types'

const ArrowtriangleLeftFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 44.3008 9.3672 C 43.3633 9.3672 42.6133 9.7656 41.6289 10.2578 L 11.5117 24.8828 C 9.5195 25.8672 8.8867 26.7578 8.8867 28.0000 C 8.8867 29.2422 9.5195 30.1562 11.5117 31.1406 L 41.6289 45.7422 C 42.6367 46.2344 43.3867 46.6328 44.3242 46.6328 C 46.0586 46.6328 47.1133 45.3203 47.1133 43.2812 L 47.1133 12.7187 C 47.1133 10.6797 46.0352 9.3672 44.3008 9.3672 Z"/></svg>
}

export default ArrowtriangleLeftFill
