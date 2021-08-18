import React from 'react'
import type { IconProps } from '../../types'

const Resize: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path fillRule="evenodd" d="M33.8409327,7.12050097 L7.12050097,33.8409327 L12.6455187,33.8409327 C13.7940135,33.8409327 14.7250524,34.7719717 14.7250524,35.9204664 C14.7250524,37.0689611 13.7940135,38 12.6455187,38 L2.24785057,38 C2.22303592,38 2.19832279,37.9995654 2.17371837,37.9987033 C1.61724422,38.0183034 1.05440015,37.8157085 0.62961033,37.3909187 C0.267031623,37.02834 0.0663319441,36.5651826 0.0275112943,36.0912563 C0.0094122049,35.9809026 4.97735186e-12,35.8676252 4.97735186e-12,35.7521494 L4.97735186e-12,25.3544813 C4.97735186e-12,24.2059865 0.931038921,23.2749476 2.07953363,23.2749476 C3.22802835,23.2749476 4.15906727,24.2059865 4.15906727,25.3544813 L4.15906727,30.9205571 L30.9205571,4.15906727 L25.3544813,4.15906727 C24.2059865,4.15906727 23.2749476,3.22802835 23.2749476,2.07953363 C23.2749476,0.931038921 24.2059865,0 25.3544813,0 L35.7521494,0 C35.8676252,0 35.9809026,0.00941220489 36.0912563,0.0275112943 C36.5651826,0.0663319441 37.02834,0.267031623 37.3909187,0.62961033 C37.8157085,1.05440015 38.0183034,1.61724422 37.9987033,2.17371837 C37.9995654,2.19832279 38,2.22303592 38,2.24785057 L38,12.6455187 C38,13.7940135 37.0689611,14.7250524 35.9204664,14.7250524 C34.7719717,14.7250524 33.8409327,13.7940135 33.8409327,12.6455187 L33.8409327,7.12050097 Z" transform="translate(9 9)"/>
</svg>

}

export default Resize