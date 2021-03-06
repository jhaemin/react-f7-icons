import React from 'react'
import type { IconProps } from '../../types'

const ArrowtriangleUpFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 46.6445 44.2891 C 46.6445 43.3516 46.2227 42.6016 45.7305 41.6172 L 31.1289 11.5235 C 30.1445 9.5078 29.2305 8.8750 28.0117 8.8750 C 26.7695 8.8750 25.8554 9.5078 24.8711 11.5235 L 10.2695 41.6172 C 9.7773 42.6250 9.3555 43.3750 9.3555 44.3125 C 9.3555 46.0469 10.6914 47.1250 12.7305 47.1250 L 43.2695 47.1016 C 45.3320 47.1016 46.6445 46.0234 46.6445 44.2891 Z"/></svg>
}

export default ArrowtriangleUpFill
