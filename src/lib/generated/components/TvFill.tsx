import React from 'react'
import type { IconProps } from '../../types'

const TvFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 5.4536 43.0962 L 50.5464 43.0962 C 54.1747 43.0962 56 41.3561 56 37.6426 L 56 13.3243 C 56 9.6108 54.1747 7.8708 50.5464 7.8708 L 5.4536 7.8708 C 1.8249 7.8708 0 9.6108 0 13.3243 L 0 37.6426 C 0 41.3561 1.8249 43.0962 5.4536 43.0962 Z M 43.4374 48.9953 C 43.4374 47.8919 42.5465 47.0007 41.4639 47.0007 L 14.4933 47.0007 C 13.4111 47.0007 12.5411 47.8919 12.5411 48.9953 C 12.5411 50.0988 13.4111 50.9901 14.4933 50.9901 L 41.4639 50.9901 C 42.5465 50.9901 43.4374 50.0988 43.4374 48.9953 Z"/></svg>
}

export default TvFill
