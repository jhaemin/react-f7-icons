import React from 'react'
import type { IconProps } from '../../types'

const LocationNorthFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 11.9922 52.375 C 13.1641 52.375 13.9141 51.9531 15.0625 50.8281 L 27.6719 38.3359 C 27.7891 38.2187 27.8828 38.125 28.0000 38.125 C 28.1172 38.125 28.2110 38.2187 28.3281 38.3359 L 40.9375 50.8281 C 42.0859 51.9531 42.8359 52.375 44.0078 52.375 C 45.5781 52.375 46.5625 51.1562 46.5625 49.5625 C 46.5625 48.6719 46.1875 47.6172 45.8359 46.6562 L 31.1875 6.6250 C 30.4375 4.5625 29.3359 3.6250 28.0000 3.6250 C 26.6641 3.6250 25.5625 4.5625 24.8125 6.6250 L 10.1641 46.6562 C 9.8125 47.6172 9.4375 48.6719 9.4375 49.5625 C 9.4375 51.1562 10.4219 52.375 11.9922 52.375 Z"/></svg>
}

export default LocationNorthFill
