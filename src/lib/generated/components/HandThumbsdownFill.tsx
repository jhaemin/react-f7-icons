import React from 'react'
import type { IconProps } from '../../types'

const HandThumbsdownFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 12.0389 4.2344 C 10.2108 4.6797 8.3827 5.8516 8.3827 8.1016 C 8.3827 9.0156 8.6171 9.6719 8.9452 10.1875 C 9.1093 10.4922 9.0858 10.7266 8.8280 10.8437 C 7.3514 11.5 6.1093 12.8359 6.1093 14.7110 C 6.1093 15.7890 6.3905 16.7266 6.9296 17.4063 C 7.2108 17.7578 7.1405 18.0625 6.7186 18.2969 C 5.6405 18.9063 4.9139 20.2656 4.9139 21.8125 C 4.9139 22.9141 5.2655 24.0859 5.9218 24.6719 C 6.2733 25 6.2264 25.2344 5.8046 25.5625 C 5.0546 26.1484 4.6327 27.2734 4.6327 28.6094 C 4.6327 30.9063 6.3905 32.7812 8.7343 32.7812 L 17.1014 32.7812 C 19.2108 32.7812 20.6405 33.8594 20.6405 35.6172 C 20.6405 38.8281 16.6562 44.6406 16.6562 48.8594 C 16.6562 51.0390 18.0858 52.3281 19.9374 52.3281 C 21.6249 52.3281 22.4686 51.1563 23.3827 49.3750 C 26.8749 42.4844 31.6093 36.9531 35.2186 32.1719 C 38.2655 28.1172 39.7421 24.6719 39.8124 19.0703 C 39.9296 10.3984 32.9452 3.8125 21.9062 3.7422 L 18.6718 3.6953 C 15.5780 3.6719 13.3514 3.9063 12.0389 4.2344 Z M 51.3673 18.8828 C 51.3673 11.8516 46.9843 5.9688 41.1014 5.9688 L 36.9296 5.9688 C 41.1483 9.0859 43.1171 13.7734 43.0233 19.1172 C 42.9296 25.0703 40.6093 29.3125 38.5467 31.8906 L 41.9921 31.8906 C 47.2889 31.8906 51.3673 26.1953 51.3673 18.8828 Z"/></svg>
}

export default HandThumbsdownFill
