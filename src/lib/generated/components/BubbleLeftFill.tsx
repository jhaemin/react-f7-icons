import React from 'react'
import type { IconProps } from '../../types'

const BubbleLeftFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 16.0938 52.3164 C 17.0313 52.3164 17.6876 51.8476 18.7891 50.8164 L 27.2735 43.0820 L 43.0938 43.1055 C 50.0783 43.1289 53.8280 39.2383 53.8280 32.3711 L 53.8280 14.4180 C 53.8280 7.5508 50.0783 3.6836 43.0938 3.6836 L 12.9064 3.6836 C 5.9454 3.6836 2.1720 7.5273 2.1720 14.4180 L 2.1720 32.3711 C 2.1720 39.2617 5.9454 43.1055 12.9064 43.0820 L 14.0079 43.0820 L 14.0079 49.9024 C 14.0079 51.3555 14.7813 52.3164 16.0938 52.3164 Z"/></svg>
}

export default BubbleLeftFill
