import React from 'react'
import type { IconProps } from '../../types'

const DeviceLaptop: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path d="M44,32 L51.5,32 C51.7761424,32 52,32.2238576 52,32.5 L52,34 C52,35.1045695 49.1045695,36 48,36 L4,36 C2.8954305,36 0,35.1045695 0,34 L0,32.5 C0,32.2238576 0.223857625,32 0.5,32 L8,32 C5.790861,32 4,30.209139 4,28 L4,4 C4,1.790861 5.790861,0 8,0 L44,0 C46.209139,0 48,1.790861 48,4 L48,28 C48,30.209139 46.209139,32 44,32 Z M8,5 L8,27 C8,27.5522847 8.44771525,28 9,28 L43,28 C43.5522847,28 44,27.5522847 44,27 L44,5 C44,4.44771525 43.5522847,4 43,4 L9,4 C8.44771525,4 8,4.44771525 8,5 Z M22,31 C21.4477153,31 21,31.4477153 21,32 C21,32.5522847 21.4477153,33 22,33 L30,33 C30.5522847,33 31,32.5522847 31,32 C31,31.4477153 30.5522847,31 30,31 L22,31 Z" transform="translate(2 10)"/>
</svg>

}

export default DeviceLaptop
