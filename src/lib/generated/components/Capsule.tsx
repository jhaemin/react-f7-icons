import React from 'react'
import type { IconProps } from '../../types'

const Capsule: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 0 29.1449 C 0 41.5941 8.6930 49.9436 21.9149 49.9436 L 34.0636 49.9436 C 47.2857 49.9436 56 41.5941 56 29.1449 C 56 16.6957 47.2857 8.3461 34.0636 8.3461 L 21.9149 8.3461 C 8.6930 8.3461 0 16.6957 0 29.1449 Z M 3.4557 29.1449 C 3.4557 18.7777 10.5174 11.8448 21.2710 11.8448 L 34.7075 11.8448 C 45.4609 11.8448 52.5229 18.7777 52.5229 29.1449 C 52.5229 39.4906 45.4609 46.4450 34.7075 46.4450 L 21.2710 46.4450 C 10.5174 46.4450 3.4557 39.4906 3.4557 29.1449 Z"/></svg>
}

export default Capsule
