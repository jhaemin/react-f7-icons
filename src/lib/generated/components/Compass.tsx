import React from 'react'
import type { IconProps } from '../../types'

const Compass: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56">
  <path d="M24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 Z M24,4 C12.954305,4 4,12.954305 4,24 C4,35.045695 12.954305,44 24,44 C35.045695,44 44,35.045695 44,24 C44,12.954305 35.045695,4 24,4 Z M34.6764378,12.8571429 L27.4033395,27.4033395 L12.8571429,34.6764378 L20.1302412,20.1302412 L34.6764378,12.8571429 Z M22.314158,22.1670955 L17.5475451,29.9860356 L25.3664852,25.2194227 L22.314158,22.1670955 Z" transform="translate(4 4)"/>
</svg>

}

export default Compass
