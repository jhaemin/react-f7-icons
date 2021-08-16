import React from 'react'
import type { IconProps } from '../../types'

const ChevronCompactRight: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 26.6055 47.3945 L 32.8867 31.4101 C 33.3086 30.3320 33.8242 29.0195 33.8242 27.9883 C 33.8242 26.9570 33.3086 25.6445 32.8867 24.5664 L 26.6055 8.5820 C 26.2539 7.6679 25.4570 7.1055 24.5898 7.1055 C 23.2070 7.1055 22.1758 8.1133 22.1758 9.4726 C 22.1758 10.1523 22.5742 11.0898 22.7851 11.6992 L 29.2070 27.9883 L 22.7851 44.2773 C 22.5742 44.8867 22.1758 45.8008 22.1758 46.5039 C 22.1758 47.8867 23.2070 48.8945 24.5898 48.8945 C 25.4570 48.8945 26.2539 48.3086 26.6055 47.3945 Z"/></svg>
}

export default ChevronCompactRight
