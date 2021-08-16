import React from 'react'
import type { IconProps } from '../../types'

const LocationFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 5.1367 28.2227 C 5.9569 29.0430 6.7773 29.3008 8.3945 29.3008 L 26.1367 29.3945 C 26.3007 29.3945 26.4413 29.3945 26.5116 29.4883 C 26.5820 29.5586 26.6054 29.6992 26.6054 29.8398 L 26.6757 47.6055 C 26.6991 49.2227 26.9569 50.0430 27.7773 50.8633 C 28.8789 51.9883 30.4257 51.8008 31.5741 50.6758 C 32.1835 50.0664 32.6757 49.0586 33.1210 48.1211 L 51.0509 9.4492 C 51.9884 7.4805 51.8712 6.0274 50.9103 5.0664 C 49.9724 4.1289 48.5194 4.0117 46.5507 4.9492 L 7.8789 22.8789 C 6.9413 23.3242 5.9335 23.8164 5.3241 24.4258 C 4.1991 25.5742 4.0116 27.0976 5.1367 28.2227 Z"/></svg>
}

export default LocationFill
