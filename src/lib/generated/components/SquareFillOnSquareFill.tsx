import React from 'react'
import type { IconProps } from '../../types'

const SquareFillOnSquareFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 10.7851 20.7110 C 10.7851 14.0781 14.3008 10.6094 20.9804 10.6094 L 42.0273 10.6094 L 42.0273 10.0234 C 42.0273 5.1953 39.5664 2.7578 34.6679 2.7578 L 9.6367 2.7578 C 4.7382 2.7578 2.2773 5.1953 2.2773 10.0234 L 2.2773 34.7031 C 2.2773 39.5312 4.7382 41.9453 9.6367 41.9453 L 10.7851 41.9453 Z M 21.3555 53.2422 L 46.3868 53.2422 C 51.2617 53.2422 53.7227 50.8047 53.7227 45.9766 L 53.7227 21.0625 C 53.7227 16.2578 51.2617 13.8203 46.3868 13.8203 L 21.3555 13.8203 C 16.4336 13.8203 13.9960 16.2344 13.9960 21.0625 L 13.9960 45.9766 C 13.9960 50.8047 16.4336 53.2422 21.3555 53.2422 Z"/></svg>
}

export default SquareFillOnSquareFill
