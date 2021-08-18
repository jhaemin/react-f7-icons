import React from 'react'
import type { IconProps } from '../../types'

const ArrowtriangleRightFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 11.7109 46.6328 C 12.6484 46.6328 13.3984 46.2344 14.3828 45.7422 L 44.5000 31.1406 C 46.4922 30.1562 47.125 29.2422 47.125 28.0000 C 47.125 26.7578 46.4922 25.8672 44.5000 24.8828 L 14.3828 10.2578 C 13.375 9.7656 12.625 9.3672 11.6875 9.3672 C 9.9531 9.3672 8.875 10.6797 8.875 12.7187 L 8.8984 43.2812 C 8.8984 45.3203 9.9766 46.6328 11.7109 46.6328 Z"/></svg>
}

export default ArrowtriangleRightFill