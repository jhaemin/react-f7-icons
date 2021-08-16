import React from 'react'
import type { IconProps } from '../../types'

const Equal: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.7969 22.6914 L 42.2266 22.6914 C 43.3516 22.6914 44.3125 21.7305 44.3125 20.5820 C 44.3125 19.4336 43.3516 18.4961 42.2266 18.4961 L 13.7969 18.4961 C 12.6719 18.4961 11.6875 19.4336 11.6875 20.5820 C 11.6875 21.7305 12.6719 22.6914 13.7969 22.6914 Z M 13.7969 37.5039 L 42.2266 37.5039 C 43.3516 37.5039 44.3125 36.5664 44.3125 35.4180 C 44.3125 34.2696 43.3516 33.3086 42.2266 33.3086 L 13.7969 33.3086 C 12.6719 33.3086 11.6875 34.2696 11.6875 35.4180 C 11.6875 36.5664 12.6719 37.5039 13.7969 37.5039 Z"/></svg>
}

export default Equal
