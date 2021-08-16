import React from 'react'
import type { IconProps } from '../../types'

const ChevronRight: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 18.6953 48.3672 C 19.2813 48.3672 19.7969 48.1328 20.2187 47.7344 L 38.7813 29.5703 C 39.2266 29.1250 39.4609 28.5859 39.4609 28.0000 C 39.4609 27.3906 39.2266 26.8281 38.7813 26.4297 L 20.2187 8.2890 C 19.8203 7.8672 19.2813 7.6328 18.6953 7.6328 C 17.4766 7.6328 16.5391 8.5703 16.5391 9.7890 C 16.5391 10.3515 16.7969 10.9141 17.1718 11.3125 L 34.2109 28.0000 L 17.1718 44.6875 C 16.7969 45.0859 16.5391 45.6250 16.5391 46.2109 C 16.5391 47.4297 17.4766 48.3672 18.6953 48.3672 Z"/></svg>
}

export default ChevronRight
