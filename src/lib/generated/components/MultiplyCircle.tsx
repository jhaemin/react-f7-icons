import React from 'react'
import type { IconProps } from '../../types'

const MultiplyCircle: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 19.9843 37.9375 C 20.4999 37.9375 20.9687 37.7266 21.3202 37.3516 L 27.9765 30.6719 L 34.6327 37.3516 C 34.9843 37.7031 35.4530 37.9375 35.9921 37.9375 C 37.0234 37.9375 37.8671 37.0703 37.8671 36.0390 C 37.8671 35.5 37.6562 35.0547 37.3046 34.7031 L 30.6483 28.0469 L 37.3280 21.3437 C 37.7030 20.9453 37.8905 20.5469 37.8905 20.0312 C 37.8905 18.9766 37.0468 18.1563 36.0155 18.1563 C 35.5234 18.1563 35.1014 18.3203 34.7030 18.7188 L 27.9765 25.4219 L 21.2733 18.7422 C 20.9218 18.3672 20.4999 18.2031 19.9843 18.2031 C 18.9296 18.2031 18.1093 19 18.1093 20.0547 C 18.1093 20.5703 18.2968 21.0156 18.6718 21.3672 L 25.3280 28.0469 L 18.6718 34.7266 C 18.2968 35.0547 18.1093 35.5234 18.1093 36.0390 C 18.1093 37.0703 18.9296 37.9375 19.9843 37.9375 Z"/></svg>
}

export default MultiplyCircle
