import React from 'react'
import type { IconProps } from '../../types'

const CompassFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path fillRule="evenodd" d="M24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 Z M27.6365492,27.6365492 L34.9096475,13.0903525 L20.3634508,20.3634508 L13.0903525,34.9096475 L27.6365492,27.6365492 L27.6365492,27.6365492 Z M16.9236119,31.0763881 L21.6902248,21.5431623 L26.4568377,26.3097752 L16.9236119,31.0763881 Z" transform="translate(4 4)"/>
</svg>

}

export default CompassFill
