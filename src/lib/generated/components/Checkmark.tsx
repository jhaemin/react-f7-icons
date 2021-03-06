import React from 'react'
import type { IconProps } from '../../types'

const Checkmark: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 23.0781 48.0273 C 24.0859 48.0273 24.8828 47.5820 25.4453 46.7148 L 47.5937 11.8398 C 48.0156 11.1602 48.2031 10.6445 48.2031 10.1054 C 48.2031 8.8164 47.3359 7.9727 46.0469 7.9727 C 45.1328 7.9727 44.5937 8.2773 44.0313 9.1680 L 22.9844 42.7070 L 12.0625 28.4102 C 11.4766 27.5898 10.9140 27.2617 10.0469 27.2617 C 8.7344 27.2617 7.7969 28.1758 7.7969 29.4649 C 7.7969 30.0039 8.0313 30.6133 8.4766 31.1758 L 20.6406 46.6680 C 21.3672 47.5820 22.0703 48.0273 23.0781 48.0273 Z"/></svg>
}

export default Checkmark
