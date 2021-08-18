import React from 'react'
import type { IconProps } from '../../types'

const ArrowUpSquareFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 28.5976 14.8164 C 29.1601 14.8164 29.6288 15.0508 30.1210 15.5430 L 38.7460 24.1914 C 39.0507 24.5196 39.2851 24.9649 39.2851 25.5039 C 39.2851 26.5586 38.4648 27.3789 37.4101 27.3789 C 36.8476 27.3789 36.3788 27.1445 36.0507 26.8164 L 32.9101 23.6055 L 30.3085 20.5352 L 30.5195 25.9492 L 30.5195 39.2383 C 30.5195 40.3633 29.7226 41.1367 28.5976 41.1367 C 27.4726 41.1367 26.6757 40.3633 26.6757 39.2383 L 26.6757 25.9492 L 26.8632 20.5586 L 24.3085 23.6055 L 21.1444 26.8164 C 20.8398 27.1211 20.3241 27.3789 19.7851 27.3789 C 18.7304 27.3789 17.9335 26.5586 17.9335 25.5039 C 17.9335 24.9649 18.1210 24.5196 18.4492 24.1914 L 27.0976 15.5430 C 27.6132 15.0274 28.0351 14.8164 28.5976 14.8164 Z"/></svg>
}

export default ArrowUpSquareFill