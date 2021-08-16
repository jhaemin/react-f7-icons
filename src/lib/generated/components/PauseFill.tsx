import React from 'react'
import type { IconProps } from '../../types'

const PauseFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 16.8320 47.0898 L 22.1523 47.0898 C 24.2148 47.0898 25.2695 46.0117 25.2695 43.9492 L 25.2695 12.0273 C 25.2695 9.8945 24.2148 8.9102 22.1523 8.9102 L 16.8320 8.9102 C 14.7695 8.9102 13.6914 9.9883 13.6914 12.0273 L 13.6914 43.9492 C 13.6914 46.0117 14.7695 47.0898 16.8320 47.0898 Z M 33.8477 47.0898 L 39.1679 47.0898 C 41.2305 47.0898 42.3086 46.0117 42.3086 43.9492 L 42.3086 12.0273 C 42.3086 9.8945 41.2305 8.9102 39.1679 8.9102 L 33.8477 8.9102 C 31.7852 8.9102 30.7305 9.9883 30.7305 12.0273 L 30.7305 43.9492 C 30.7305 46.0117 31.7852 47.0898 33.8477 47.0898 Z"/></svg>
}

export default PauseFill
