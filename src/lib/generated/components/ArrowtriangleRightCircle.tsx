import React from 'react'
import type { IconProps } from '../../types'

const ArrowtriangleRightCircle: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 23.8749 36.6250 L 36.4140 29.2188 C 37.3280 28.6563 37.3046 27.3672 36.4140 26.8516 L 23.8749 19.3984 C 22.9140 18.8359 21.6483 19.2812 21.6483 20.3359 L 21.6483 35.6875 C 21.6483 36.7656 22.8436 37.2344 23.8749 36.6250 Z"/></svg>
}

export default ArrowtriangleRightCircle
