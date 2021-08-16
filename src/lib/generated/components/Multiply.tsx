import React from 'react'
import type { IconProps } from '../../types'

const Multiply: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.0117 40.0117 C 12.2148 40.8086 12.1914 42.1680 13.0117 42.9883 C 13.8086 43.8086 15.1680 43.7851 15.9883 42.9883 L 27.9883 30.9648 L 40.0117 42.9883 C 40.8086 43.7851 42.1680 43.8086 42.9648 42.9883 C 43.8086 42.1680 43.7851 40.8086 42.9648 40.0117 L 30.9648 27.9883 L 42.9648 15.9883 C 43.7851 15.1914 43.8086 13.8086 42.9648 13.0117 C 42.1680 12.1914 40.8086 12.2148 40.0117 13.0117 L 27.9883 25.0352 L 15.9883 13.0117 C 15.1680 12.2148 13.8086 12.1914 13.0117 13.0117 C 12.1914 13.8086 12.2148 15.1914 13.0117 15.9883 L 25.0117 27.9883 Z"/></svg>
}

export default Multiply
