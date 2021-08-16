import React from 'react'
import type { IconProps } from '../../types'

const ArrowUpDownCircleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9062 44.1953 C 27.3202 44.1953 26.8749 43.9375 26.3827 43.4453 L 17.8280 34.9141 C 17.4999 34.5859 17.2890 34.1172 17.2890 33.5781 C 17.2890 32.5234 18.1562 31.7266 19.1640 31.7266 C 19.7265 31.7266 20.1952 31.9375 20.5468 32.3125 L 23.6171 35.4297 L 26.1952 38.5 L 25.9843 33.0859 L 25.9843 22.9375 L 26.1952 17.5234 L 23.6171 20.5937 L 20.5468 23.7109 C 20.1952 24.0859 19.7265 24.2968 19.1640 24.2968 C 18.1562 24.2968 17.2890 23.5 17.2890 22.4453 C 17.2890 21.9063 17.4999 21.4375 17.8280 21.1094 L 26.3827 12.5781 C 26.8749 12.0859 27.3202 11.8281 27.9062 11.8281 C 28.4452 11.8281 28.8671 12.0625 29.4062 12.5781 L 37.9609 21.1094 C 38.2890 21.4375 38.4765 21.9063 38.4765 22.4453 C 38.4765 23.5 37.6796 24.2968 36.6249 24.2968 C 36.0624 24.2968 35.5936 24.0625 35.2655 23.7109 L 32.1483 20.5937 L 29.6171 17.5469 L 29.8280 22.9375 L 29.8280 33.0859 L 29.6171 38.4766 L 32.1483 35.4297 L 35.2655 32.3125 C 35.5936 31.9609 36.0624 31.7266 36.6249 31.7266 C 37.6796 31.7266 38.4765 32.5234 38.4765 33.5781 C 38.4765 34.1172 38.2890 34.5859 37.9609 34.9141 L 29.4062 43.4453 C 28.8671 43.9609 28.4452 44.1953 27.9062 44.1953 Z"/></svg>
}

export default ArrowUpDownCircleFill
