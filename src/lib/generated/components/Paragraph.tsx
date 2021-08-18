import React from 'react'
import type { IconProps } from '../../types'

const Paragraph: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 9.8945 17.8399 C 9.8945 24.8945 14.8633 29.5586 22.4102 29.5586 L 26.2070 29.5586 L 26.2070 47.6992 C 26.2070 49.0117 27.0273 49.8555 28.3633 49.8555 C 29.6758 49.8555 30.5430 49.0117 30.5430 47.6992 L 30.5430 10.4805 L 35.6289 10.4805 L 35.6289 47.6992 C 35.6289 49.0117 36.4492 49.8555 37.7617 49.8555 C 39.0977 49.8555 39.9648 49.0117 39.9648 47.6992 L 39.9648 10.4805 L 43.9258 10.4805 C 45.2617 10.4805 46.1055 9.5899 46.1055 8.2774 C 46.1055 6.9648 45.2617 6.1445 43.9258 6.1445 L 22.2930 6.1445 C 14.8164 6.1445 9.8945 10.7852 9.8945 17.8399 Z"/></svg>
}

export default Paragraph