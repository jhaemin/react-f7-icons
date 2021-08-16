import React from 'react'
import type { IconProps } from '../../types'

const ChevronLeftSquareFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 33.4726 40.1524 C 32.8163 40.8086 31.5507 40.7149 30.8476 40.0820 L 20.6054 30.4258 C 19.2226 29.1367 19.2226 26.8633 20.6054 25.5742 L 30.8476 15.9180 C 31.6210 15.1914 32.7460 15.1445 33.4492 15.8477 C 34.1757 16.5742 34.2695 17.7930 33.4960 18.4961 L 23.3710 27.9883 L 33.4960 37.5274 C 34.2226 38.1836 34.2226 39.4023 33.4726 40.1524 Z"/></svg>
}

export default ChevronLeftSquareFill
