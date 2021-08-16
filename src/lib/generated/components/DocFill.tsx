import React from 'react'
import type { IconProps } from '../../types'

const DocFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 15.5547 53.125 L 40.4453 53.125 C 45.2969 53.125 47.7109 50.6640 47.7109 45.7890 L 47.7109 24.5078 L 30.7422 24.5078 C 27.7422 24.5078 26.3359 23.0781 26.3359 20.0781 L 26.3359 2.8750 L 15.5547 2.8750 C 10.7266 2.8750 8.2891 5.3594 8.2891 10.2344 L 8.2891 45.7890 C 8.2891 50.6875 10.7266 53.125 15.5547 53.125 Z M 30.8125 21.2969 L 47.4531 21.2969 C 47.2891 20.3359 46.6094 19.3984 45.5078 18.2500 L 32.5703 5.1015 C 31.4922 3.9766 30.5078 3.2969 29.5234 3.1328 L 29.5234 20.0313 C 29.5234 20.875 29.9687 21.2969 30.8125 21.2969 Z"/></svg>
}

export default DocFill
