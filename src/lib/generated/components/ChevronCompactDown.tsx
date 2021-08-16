import React from 'react'
import type { IconProps } from '../../types'

const ChevronCompactDown: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 8.6055 26.6172 L 24.5899 32.8750 C 25.6679 33.2968 26.9570 33.8125 28.0117 33.8125 C 29.0430 33.8125 30.3555 33.2968 31.4336 32.8750 L 47.4179 26.6172 C 48.3320 26.2656 48.8945 25.4688 48.8945 24.6016 C 48.8945 23.2188 47.8867 22.1875 46.5274 22.1875 C 45.8477 22.1875 44.8867 22.5859 44.3008 22.7968 L 28.0117 29.1953 L 11.7226 22.7968 C 11.1133 22.5859 10.1992 22.1875 9.4961 22.1875 C 8.1133 22.1875 7.1055 23.2188 7.1055 24.6016 C 7.1055 25.4688 7.6914 26.2656 8.6055 26.6172 Z"/></svg>
}

export default ChevronCompactDown
