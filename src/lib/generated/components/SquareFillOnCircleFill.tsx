import React from 'react'
import type { IconProps } from '../../types'

const SquareFillOnCircleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 11.9687 37.9492 L 11.9687 22.4570 C 11.9687 15.8242 15.8124 12.0273 22.4921 12.0273 L 37.6327 12.0273 C 34.4687 5.7227 27.9062 1.3398 20.4062 1.3398 C 9.8124 1.3398 1.0937 10.0586 1.0937 20.6524 C 1.0937 28.1992 5.5468 34.8086 11.9687 37.9492 Z M 22.5155 54.6602 L 47.5700 54.6602 C 52.4454 54.6602 54.9063 52.2227 54.9063 47.3945 L 54.9063 22.4805 C 54.9063 17.6758 52.4454 15.2383 47.5700 15.2383 L 22.5155 15.2383 C 17.6171 15.2383 15.1796 17.6524 15.1796 22.4805 L 15.1796 47.3945 C 15.1796 52.2227 17.6171 54.6602 22.5155 54.6602 Z"/></svg>
}

export default SquareFillOnCircleFill
