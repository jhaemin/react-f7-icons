import React from 'react'
import type { IconProps } from '../../types'

const TriangleRighthalfFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 9.9647 50.2070 L 46.0351 50.2070 C 50.0195 50.2070 52.5040 47.3476 52.5040 43.7383 C 52.5040 42.6601 52.2227 41.5586 51.6367 40.5508 L 33.5663 9.0742 C 32.3476 6.9414 30.2147 5.7930 28.0116 5.7930 C 25.8319 5.7930 23.6757 6.9414 22.4335 9.0742 L 4.3632 40.5742 C 3.7772 41.5820 3.4960 42.6601 3.4960 43.7383 C 3.4960 47.3476 6.0038 50.2070 9.9647 50.2070 Z M 28.0116 9.5430 C 28.9257 9.5430 29.8163 9.9414 30.3319 10.8554 L 48.3789 42.3555 C 48.6131 42.8242 48.7303 43.3164 48.7303 43.7383 C 48.7303 45.1914 47.6051 46.5273 45.9882 46.5273 L 28.0116 46.5273 Z"/></svg>
}

export default TriangleRighthalfFill
