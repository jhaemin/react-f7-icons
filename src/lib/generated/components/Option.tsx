import React from 'react'
import type { IconProps } from '../../types'

const Option: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 17.5703 6.5195 L 6.2969 6.5195 C 5.0547 6.5195 4.0703 7.4336 4.0703 8.6289 C 4.0703 9.8242 5.0547 10.7617 6.2969 10.7617 L 16.5860 10.7617 C 17.4297 10.7617 18.0391 11.1367 18.4141 11.9102 L 33.8360 46.5977 C 34.7031 48.5664 36.1328 49.4805 38.3125 49.4805 L 49.7265 49.4805 C 50.9452 49.4805 51.9297 48.5430 51.9297 47.3711 C 51.9297 46.1992 50.9452 45.2383 49.7265 45.2383 L 39.3672 45.2383 C 38.4062 45.2383 37.8203 44.8867 37.4453 44.1133 L 22.0703 9.4492 C 21.2734 7.6211 19.6094 6.5195 17.5703 6.5195 Z M 49.7265 6.5195 L 34.5625 6.5195 C 33.3203 6.5195 32.3594 7.4102 32.3594 8.6055 C 32.3594 9.8008 33.3203 10.7149 34.5625 10.7149 L 49.7265 10.7149 C 50.9687 10.7149 51.9062 9.8008 51.9062 8.6055 C 51.9062 7.4102 50.9687 6.5195 49.7265 6.5195 Z"/></svg>
}

export default Option