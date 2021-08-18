import React from 'react'
import type { IconProps } from '../../types'

const ArrowLeftCircleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 14.3358 27.9766 C 14.3358 27.4141 14.5234 26.9453 15.0624 26.4063 L 24.0390 17.4297 C 24.4140 17.0781 24.8827 16.8906 25.4452 16.8906 C 26.5468 16.8906 27.4140 17.7344 27.4140 18.8359 C 27.4140 19.3984 27.1327 19.9141 26.8046 20.2422 L 23.4999 23.5234 L 20.3124 26.1953 L 25.9609 25.9609 L 39.6952 25.9609 C 40.8671 25.9609 41.6640 26.8047 41.6874 27.9766 C 41.6874 29.1484 40.8671 29.9922 39.6952 29.9922 L 25.9609 29.9922 L 20.3124 29.7812 L 23.4999 32.4766 L 26.8046 35.7109 C 27.1562 36.0625 27.4140 36.5547 27.4140 37.1406 C 27.4140 38.2422 26.5468 39.0859 25.4452 39.0859 C 24.8827 39.0859 24.4140 38.8516 24.0390 38.5234 L 15.0624 29.5703 C 14.5468 29.0547 14.3358 28.5859 14.3358 27.9766 Z"/></svg>
}

export default ArrowLeftCircleFill