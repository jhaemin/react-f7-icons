import React from 'react'
import type { IconProps } from '../../types'

const Stop: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 8.8984 41.9219 C 8.8984 45.1797 10.8672 47.1016 14.1719 47.1016 L 41.8281 47.1016 C 45.1328 47.1016 47.1016 45.1797 47.1016 41.9219 L 47.1016 14.0781 C 47.1016 10.8203 45.1328 8.8984 41.8281 8.8984 L 14.1719 8.8984 C 10.8672 8.8984 8.8984 10.8203 8.8984 14.0781 Z M 12.6719 41.0312 L 12.6719 14.9688 C 12.6719 13.5390 13.5156 12.6719 14.9219 12.6719 L 41.0781 12.6719 C 42.4844 12.6719 43.3281 13.5390 43.3281 14.9688 L 43.3281 41.0312 C 43.3281 42.4609 42.4844 43.3281 41.0781 43.3281 L 14.9219 43.3281 C 13.5156 43.3281 12.6719 42.4609 12.6719 41.0312 Z"/></svg>
}

export default Stop
