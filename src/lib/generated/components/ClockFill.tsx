import React from 'react'
import type { IconProps } from '../../types'

const ClockFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 15.7187 30.5312 C 14.8046 30.5312 14.1014 29.8281 14.1014 28.8906 C 14.1014 27.9766 14.8046 27.2734 15.7187 27.2734 L 26.3593 27.2734 L 26.3593 13.0937 C 26.3593 12.1797 27.0624 11.4766 27.9765 11.4766 C 28.8905 11.4766 29.6171 12.1797 29.6171 13.0937 L 29.6171 28.8906 C 29.6171 29.8281 28.8905 30.5312 27.9765 30.5312 Z"/></svg>
}

export default ClockFill
