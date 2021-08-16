import React from 'react'
import type { IconProps } from '../../types'

const StopCircle: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 19.7265 34.0469 C 19.7265 35.4531 20.5702 36.2968 21.9999 36.2968 L 33.9999 36.2968 C 35.4062 36.2968 36.2733 35.4531 36.2733 34.0469 L 36.2733 21.9531 C 36.2733 20.5703 35.4062 19.7266 33.9999 19.7266 L 21.9999 19.7266 C 20.5702 19.7266 19.7265 20.5703 19.7265 21.9531 Z"/></svg>
}

export default StopCircle
