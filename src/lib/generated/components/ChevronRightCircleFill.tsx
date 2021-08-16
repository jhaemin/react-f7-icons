import React from 'react'
import type { IconProps } from '../../types'

const ChevronRightCircleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 22.8671 40.1875 C 22.1171 39.4375 22.1171 38.2422 22.8436 37.5625 L 32.9687 28.0234 L 22.8436 18.5312 C 22.0702 17.8281 22.1640 16.6094 22.8905 15.8828 C 23.5936 15.1797 24.7187 15.2266 25.4921 15.9531 L 35.7577 25.6094 C 37.1405 26.8984 37.1171 29.1484 35.7577 30.4609 L 25.4921 40.1172 C 24.7890 40.7500 23.5234 40.8437 22.8671 40.1875 Z"/></svg>
}

export default ChevronRightCircleFill
