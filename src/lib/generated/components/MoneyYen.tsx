import React from 'react'
import type { IconProps } from '../../types'

const MoneyYen: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56">
  <polygon fill-rule="evenodd" points="26.47 0 16.874 16.937 23.06 16.937 23.06 19.512 15.606 19.512 15.606 23.137 23.06 23.137 23.06 25.713 15.606 25.713 15.606 32.255 10.841 32.255 10.841 25.713 3.388 25.713 3.388 23.137 10.841 23.137 10.841 19.512 3.388 19.512 3.388 16.937 9.574 16.937 0 0 5.333 0 13.18 14.634 13.311 14.634 21.158 0" transform="translate(15 12)"/>
</svg>

}

export default MoneyYen
