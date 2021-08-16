import React from 'react'
import type { IconProps } from '../../types'

const BackwardFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 25.1218 44.5009 C 26.7084 44.5009 28.0509 43.2804 28.0509 41.0225 L 28.0509 29.3058 C 28.2747 30.1601 28.9053 30.8924 30.0037 31.5434 L 50.7318 43.7483 C 51.5454 44.2365 52.2369 44.5009 53.0709 44.5009 C 54.6577 44.5009 56 43.2804 56 41.0225 L 56 16.0228 C 56 13.7649 54.6577 12.5444 53.0709 12.5444 C 52.2369 12.5444 51.5658 12.8088 50.7318 13.2970 L 30.0037 25.5020 C 28.8849 26.1529 28.2747 26.8852 28.0509 27.7395 L 28.0509 16.0228 C 28.0509 13.7649 26.7084 12.5444 25.1218 12.5444 C 24.2877 12.5444 23.6165 12.8088 22.7825 13.2970 L 2.0545 25.5020 C .6102 26.3563 0 27.3530 0 28.5125 C 0 29.6923 .6102 30.6890 2.0545 31.5434 L 22.7825 43.7483 C 23.5962 44.2365 24.2877 44.5009 25.1218 44.5009 Z"/></svg>
}

export default BackwardFill
