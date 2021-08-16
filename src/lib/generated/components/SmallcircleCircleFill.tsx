import React from 'react'
import type { IconProps } from '../../types'

const SmallcircleCircleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 28.0234 37.7968 C 22.6327 37.7968 18.2030 33.4141 18.2030 28 C 18.2030 22.6328 22.6327 18.25 28.0234 18.25 C 33.3905 18.25 37.7968 22.6328 37.7968 28 C 37.7968 33.4141 33.3905 37.7968 28.0234 37.7968 Z M 28.0234 33.9531 C 31.2577 33.9531 33.9296 31.2812 33.9296 28 C 33.9296 24.7656 31.2577 22.0937 28.0234 22.0937 C 24.7655 22.0937 22.0936 24.7656 22.0936 28 C 22.0936 31.2812 24.7655 33.9531 28.0234 33.9531 Z"/></svg>
}

export default SmallcircleCircleFill
