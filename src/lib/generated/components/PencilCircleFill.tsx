import React from 'react'
import type { IconProps } from '../../types'

const PencilCircleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 36.9765 21.5781 L 34.2812 18.8828 L 35.9452 17.2422 C 36.6952 16.5156 37.5390 16.4453 38.2187 17.125 L 38.7343 17.6406 C 39.4140 18.3203 39.3436 19.1406 38.6171 19.9140 Z M 20.6874 37.7969 L 17.5702 38.9687 C 17.0546 39.1562 16.5155 38.6875 16.7499 38.125 L 18.0390 35.1016 L 32.9218 20.2422 L 35.6171 22.9140 Z"/></svg>
}

export default PencilCircleFill
