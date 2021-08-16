import React from 'react'
import type { IconProps } from '../../types'

const ChevronCompactLeft: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 29.3945 47.3945 C 29.7461 48.3086 30.5429 48.8945 31.4102 48.8945 C 32.7929 48.8945 33.8242 47.8867 33.8242 46.5039 C 33.8242 45.8008 33.4258 44.8867 33.2148 44.2773 L 26.7929 27.9883 L 33.2148 11.6992 C 33.4258 11.0898 33.8242 10.1523 33.8242 9.4726 C 33.8242 8.1133 32.7929 7.1055 31.4102 7.1055 C 30.5429 7.1055 29.7461 7.6679 29.3945 8.5820 L 23.1133 24.5664 C 22.6914 25.6445 22.1758 26.9570 22.1758 27.9883 C 22.1758 29.0195 22.6914 30.3320 23.1133 31.4101 Z"/></svg>
}

export default ChevronCompactLeft
