import React from 'react'
import type { IconProps } from '../../types'

const TriangleLefthalfFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 9.9647 50.2070 L 46.0351 50.2070 C 50.0195 50.2070 52.5040 47.3476 52.5040 43.7383 C 52.5040 42.6601 52.2227 41.5586 51.6367 40.5508 L 33.5663 9.0742 C 32.3476 6.9414 30.2147 5.7930 28.0116 5.7930 C 25.8319 5.7930 23.6757 6.9414 22.4335 9.0742 L 4.3632 40.5742 C 3.7772 41.5820 3.4960 42.6601 3.4960 43.7383 C 3.4960 47.3476 6.0038 50.2070 9.9647 50.2070 Z M 10.0116 46.5273 C 8.3710 46.5273 7.2929 45.1914 7.2929 43.7383 C 7.2929 43.3164 7.3632 42.8242 7.5976 42.3320 L 25.6444 10.8554 C 26.1600 9.9648 27.0976 9.5430 28.0116 9.5430 L 28.0116 46.5273 Z"/></svg>
}

export default TriangleLefthalfFill
