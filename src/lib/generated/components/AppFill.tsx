import React from 'react'
import type { IconProps } from '../../types'

const AppFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 46.5860 9.4492 C 44.1954 7.0586 40.8204 6.6836 36.8360 6.6836 L 19.1173 6.6836 C 15.1798 6.6836 11.8048 7.0586 9.4142 9.4492 C 7.0235 11.8398 6.6720 15.1914 6.6720 19.1055 L 6.6720 36.8242 C 6.6720 40.8320 7.0235 44.1602 9.4142 46.5508 C 11.8048 48.9414 15.1798 49.3164 19.1876 49.3164 L 36.8360 49.3164 C 40.8204 49.3164 44.1954 48.9414 46.5860 46.5508 C 48.9767 44.1602 49.3280 40.8320 49.3280 36.8242 L 49.3280 19.1758 C 49.3280 15.1680 48.9767 11.8164 46.5860 9.4492 Z"/></svg>
}

export default AppFill
