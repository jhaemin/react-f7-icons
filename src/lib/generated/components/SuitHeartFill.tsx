import React from 'react'
import type { IconProps } from '../../types'

const SuitHeartFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 28.0000 49.5156 C 28.4922 49.5156 29.1953 49.1875 29.6875 48.8828 C 42.9765 40.5156 51.2735 30.6250 51.2735 20.6406 C 51.2735 12.3438 45.5781 6.4844 37.9843 6.4844 C 33.6250 6.4844 30.1094 9.0625 28.0000 13.0234 C 25.8906 9.0860 22.3515 6.4844 18.0156 6.4844 C 10.4219 6.4844 4.7265 12.3438 4.7265 20.6406 C 4.7265 30.6250 12.9531 40.6328 26.2890 48.8828 C 26.8046 49.1875 27.5078 49.5156 28.0000 49.5156 Z"/></svg>
}

export default SuitHeartFill
