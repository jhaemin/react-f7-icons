import React from 'react'
import type { IconProps } from '../../types'

const CreditcardFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 2.2656 17.7344 L 53.7344 17.7344 L 53.7344 15.5547 C 53.7344 10.7266 51.2735 8.2891 46.3751 8.2891 L 9.6249 8.2891 C 4.7265 8.2891 2.2656 10.7266 2.2656 15.5547 Z M 2.2656 40.4687 C 2.2656 45.2969 4.7265 47.7109 9.6249 47.7109 L 46.3751 47.7109 C 51.2735 47.7109 53.7344 45.2969 53.7344 40.4687 L 53.7344 23.0547 L 2.2656 23.0547 Z M 10.0937 34.7500 L 10.0937 30.4140 C 10.0937 29.1015 11.0078 28.1640 12.3905 28.1640 L 18.1327 28.1640 C 19.5156 28.1640 20.4296 29.1015 20.4296 30.4140 L 20.4296 34.7500 C 20.4296 36.0859 19.5156 37.0000 18.1327 37.0000 L 12.3905 37.0000 C 11.0078 37.0000 10.0937 36.0859 10.0937 34.7500 Z"/></svg>
}

export default CreditcardFill
