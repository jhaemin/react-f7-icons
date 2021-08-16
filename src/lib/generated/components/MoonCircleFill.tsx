import React from 'react'
import type { IconProps } from '../../types'

const MoonCircleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9062 C 41.0546 51.9062 51.9063 41.0547 51.9063 28.0000 C 51.9063 14.9219 41.0312 4.0938 27.9765 4.0938 C 14.8983 4.0938 4.0937 14.9219 4.0937 28.0000 C 4.0937 41.0547 14.9218 51.9062 27.9999 51.9062 Z M 34.9374 32.9453 C 36.5546 32.9453 38.1952 32.5938 39.1796 32.2422 C 39.4374 32.1719 39.6014 32.1484 39.7421 32.1484 C 40.1171 32.1484 40.5155 32.4766 40.5155 32.9687 C 40.5155 33.0625 40.4921 33.3672 40.3749 33.6719 C 38.6874 37.9375 33.8358 41.3828 28.2109 41.3828 C 20.4999 41.3828 14.6171 35.875 14.6171 28.1640 C 14.6171 22.6562 17.8749 17.4062 22.7265 15.4844 C 23.0312 15.3672 23.3124 15.3438 23.4765 15.3438 C 23.9687 15.3438 24.2499 15.7422 24.2499 16.0938 C 24.2499 16.2109 24.2265 16.3984 24.1093 16.7031 C 23.6874 17.8047 23.2890 19.8906 23.2890 21.3672 C 23.2890 28.4687 27.8358 32.9453 34.9374 32.9453 Z"/></svg>
}

export default MoonCircleFill
