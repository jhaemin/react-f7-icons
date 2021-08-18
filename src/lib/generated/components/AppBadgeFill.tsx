import React from 'react'
import type { IconProps } from '../../types'

const AppBadgeFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 43.3749 20.7812 C 47.8048 20.7812 51.4844 17.1016 51.4844 12.6485 C 51.4844 8.1953 47.8283 4.5156 43.3749 4.5156 C 38.8984 4.5156 35.2421 8.1953 35.2421 12.6485 C 35.2421 17.1016 38.8984 20.7812 43.3749 20.7812 Z M 17.0312 51.4844 L 34.6796 51.4844 C 38.6640 51.4844 42.0390 51.1094 44.4296 48.7187 C 46.8203 46.3281 47.1716 43.0000 47.1716 38.9922 L 47.1716 23.2890 C 45.9765 23.7344 44.6874 23.9687 43.3749 23.9687 C 37.1405 23.9687 32.0312 18.8594 32.0312 12.6485 C 32.0312 11.3125 32.2656 10.0234 32.7109 8.8516 L 16.9609 8.8516 C 13.0234 8.8516 9.6484 9.2266 7.2578 11.6172 C 4.8671 14.0078 4.5156 17.3594 4.5156 21.2734 L 4.5156 38.9922 C 4.5156 43.0000 4.8671 46.3281 7.2578 48.7187 C 9.6484 51.1094 13.0234 51.4844 17.0312 51.4844 Z"/></svg>
}

export default AppBadgeFill