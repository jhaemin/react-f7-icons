import React from 'react'
import type { IconProps } from '../../types'

const ChartBarAltFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path fillRule="evenodd" d="M16 0L22 0C23.1045695 0 24 .8954305 24 2L24 36C24 37.1045695 23.1045695 38 22 38L16 38C14.8954305 38 14 37.1045695 14 36L14 2C14 .8954305 14.8954305 0 16 0zM2 10L8 10C9.1045695 10 10 10.8954305 10 12L10 36C10 37.1045695 9.1045695 38 8 38L2 38C.8954305 38 0 37.1045695 0 36L0 12C0 10.8954305.8954305 10 2 10zM30 21L36 21C37.1045695 21 38 21.8954305 38 23L38 36C38 37.1045695 37.1045695 38 36 38L30 38C28.8954305 38 28 37.1045695 28 36L28 23C28 21.8954305 28.8954305 21 30 21z" transform="translate(9 12)"/>
</svg>

}

export default ChartBarAltFill
