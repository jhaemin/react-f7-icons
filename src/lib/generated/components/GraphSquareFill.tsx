import React from 'react'
import type { IconProps } from '../../types'

const GraphSquareFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path d="M0.4257,28.7260341 L3.20947047,30.0966732 C4.97561537,30.9662661 7.33562575,30.5598706 8.71081527,29.1496265 L10.0634684,27.7624932 L13.0178552,32.2718443 C14.416228,34.4062141 17.1696207,34.3931494 18.5538975,32.25277 L25.0244883,22.2478936 L32.4331412,34.9186639 C33.8806092,37.3942198 36.8616289,37.0248392 37.6295683,34.2495209 L43.5743,12.7653717 L43.5743,36.3086 C43.5743,41.1367 41.1366,43.5742 36.2382,43.5742 L7.7851,43.5742 C2.9101,43.5742 0.4257,41.1602 0.4257,36.3086 L0.4257,28.7260341 Z M0.4257,24.2400159 L0.4257,7.6914 C0.4257,2.8398 2.9101,0.4258 7.7851,0.4258 L36.2382,0.4258 C39.063128,0.4258 41.0696572,1.23648267 42.2621993,2.84885235 L40.8901717,7.46663558 L34.5059557,30.5390725 L27.8475031,19.1513446 C26.536307,16.9088499 23.7530669,16.8481707 22.343162,19.0281764 L15.775887,29.1825467 L13.1398817,25.1591488 C11.833505,23.1651949 9.20772172,22.9106469 7.54389358,24.6168873 L5.84701925,26.3570162 C5.68016118,26.5281276 5.18891393,26.6127207 4.97638026,26.508076 L1.8834549,24.985219 L0.4257,24.2400159 Z" transform="translate(6 6)"/>
</svg>

}

export default GraphSquareFill
