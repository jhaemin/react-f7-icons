import React from 'react'
import type { IconProps } from '../../types'

const PanoFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 3.7112 47.4863 C 7.8201 47.4863 14.0498 42.6263 27.9891 42.6263 C 41.9284 42.6263 48.2021 47.4642 52.2888 47.4642 C 54.6970 47.4642 56 45.9841 56 43.5320 L 56 13.5990 C 56 11.1248 54.6970 9.6447 52.2888 9.6447 C 48.2021 9.6447 41.9284 14.5047 27.9891 14.5047 C 14.0718 14.5047 7.7980 9.6447 3.7112 9.6447 C 1.3033 9.6447 0 11.1248 0 13.5769 L 0 43.5541 C 0 46.0062 1.3033 47.4863 3.7112 47.4863 Z"/></svg>
}

export default PanoFill
