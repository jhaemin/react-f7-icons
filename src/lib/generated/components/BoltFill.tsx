import React from 'react'
import type { IconProps } from '../../types'

const BoltFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.1758 32.5000 L 26.4180 32.5000 L 19.4336 51.4844 C 18.5195 53.8984 21.0273 55.1875 22.6211 53.2187 L 43.9023 26.5938 C 44.3008 26.1016 44.5117 25.6328 44.5117 25.0938 C 44.5117 24.2031 43.8320 23.5000 42.8477 23.5000 L 29.5820 23.5000 L 36.5899 4.5156 C 37.4804 2.1016 34.9961 .8125 33.4023 2.8047 L 12.1211 29.4063 C 11.7226 29.9219 11.4883 30.3906 11.4883 30.9063 C 11.4883 31.8203 12.1914 32.5000 13.1758 32.5000 Z"/></svg>
}

export default BoltFill
