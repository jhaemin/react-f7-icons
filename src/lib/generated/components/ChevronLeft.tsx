import React from 'react'
import type { IconProps } from '../../types'

const ChevronLeft: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 35.8047 47.7226 C 36.2031 48.1211 36.7187 48.3555 37.3281 48.3555 C 38.5469 48.3555 39.4609 47.4414 39.4609 46.2226 C 39.4609 45.6367 39.2266 45.0976 38.8515 44.6992 L 21.7891 28.0117 L 38.8515 11.3242 C 39.2266 10.9258 39.4609 10.3633 39.4609 9.8007 C 39.4609 8.5820 38.5469 7.6445 37.3281 7.6445 C 36.7187 7.6445 36.2031 7.8789 35.8047 8.2773 L 17.2422 26.4414 C 16.7969 26.8164 16.5391 27.4023 16.5391 28.0117 C 16.5391 28.5976 16.7969 29.1367 17.2422 29.5820 Z"/></svg>
}

export default ChevronLeft
