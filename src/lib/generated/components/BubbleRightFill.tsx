import React from 'react'
import type { IconProps } from '../../types'

const BubbleRightFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 39.0391 51.9297 C 40.3750 51.9297 41.1250 50.9687 41.1250 49.5156 L 41.1250 42.6953 L 43.7500 42.6953 C 49.1641 42.6953 52.8203 38.9922 52.8203 33.3672 L 52.8203 13.0469 C 52.8203 7.3984 49.1641 4.0703 43.7500 4.0703 L 12.2500 4.0703 C 6.6250 4.0703 3.1797 7.4219 3.1797 13.0469 L 3.1797 33.3672 C 3.1797 38.9688 6.6250 42.6953 12.2500 42.6953 L 27.8828 42.6953 L 36.3438 50.4297 C 37.4453 51.4609 38.1016 51.9297 39.0391 51.9297 Z"/></svg>
}

export default BubbleRightFill
