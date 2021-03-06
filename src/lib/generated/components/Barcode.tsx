import React from 'react'
import type { IconProps } from '../../types'

const Barcode: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 5.2423 46.0000 L 9.0626 46.0000 L 9.0626 10.0000 L 5.2423 10.0000 Z M 12.7657 46.0000 L 14.9688 46.0000 L 14.9688 10.0000 L 12.7657 10.0000 Z M 18.6016 46.0000 L 24.8360 46.0000 L 24.8360 10.0000 L 18.6016 10.0000 Z M 27.1329 46.0000 L 31.0938 46.0000 L 31.0938 10.0000 L 27.1329 10.0000 Z M 33.4610 46.0000 L 39.6485 46.0000 L 39.6485 10.0000 L 33.4610 10.0000 Z M 41.5469 46.0000 L 46.3985 46.0000 L 46.3985 10.0000 L 41.5469 10.0000 Z M 47.6171 46.0000 L 50.7577 46.0000 L 50.7577 10.0000 L 47.6171 10.0000 Z"/></svg>
}

export default Barcode
