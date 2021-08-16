import React from 'react'
import type { IconProps } from '../../types'

const Today: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path fill-rule="evenodd" d="M32,0 C34.209139,0 36,1.790861 36,4 L36,40 C36,42.209139 34.209139,44 32,44 L4,44 C1.790861,44 0,42.209139 0,40 L0,4 C0,1.790861 1.790861,0 4,0 L32,0 Z M30,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,38 C4,39.1045695 4.8954305,40 6,40 L30,40 C31.1045695,40 32,39.1045695 32,38 L32,6 C32,4.8954305 31.1045695,4 30,4 Z M28,14 C29.1045695,14 30,14.8954305 30,16 L30,36 C30,37.1045695 29.1045695,38 28,38 L8,38 C6.8954305,38 6,37.1045695 6,36 L6,16 C6,14.8954305 6.8954305,14 8,14 L28,14 Z M16,6 C17.1045695,6 18,6.8954305 18,8 C18,9.1045695 17.1045695,10 16,10 L8,10 C6.8954305,10 6,9.1045695 6,8 C6,6.8954305 6.8954305,6 8,6 L16,6 Z" transform="translate(10 6)"/>
</svg>

}

export default Today
