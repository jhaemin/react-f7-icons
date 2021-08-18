import React from 'react'
import type { IconProps } from '../../types'

const BoltBadgeA: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 6.0157 31.6797 C 6.0157 32.5938 6.7189 33.2734 7.7033 33.2734 L 20.9455 33.2734 L 13.9611 51.4844 C 13.0235 53.8984 15.6017 55.2109 17.1486 53.2187 L 23.1955 45.4375 C 23.0314 44.5703 22.9611 43.6797 22.9611 42.7656 C 22.9611 41.5703 23.1251 40.3750 23.4298 39.2734 L 19.8908 43.8906 L 26.3595 29.7813 L 11.8751 29.7813 L 25.0939 12.2266 L 18.6955 26.2422 L 33.3908 26.2422 L 30.7657 29.6641 C 32.5939 28.5625 34.7033 27.8594 36.9533 27.7187 L 38.4298 25.8203 C 38.8282 25.3282 39.0392 24.8594 39.0392 24.3203 C 39.0392 23.4297 38.3595 22.7500 37.3751 22.7500 L 24.1095 22.7500 L 31.1173 4.5156 C 32.0314 2.1016 29.4767 .7891 27.9298 2.8047 L 6.6486 30.1797 C 6.2267 30.6953 6.0157 31.1641 6.0157 31.6797 Z M 38.0548 54.6719 C 44.5235 54.6719 49.9843 49.2813 49.9843 42.7656 C 49.9843 36.2500 44.5939 30.8594 38.0548 30.8594 C 31.5392 30.8594 26.1486 36.2500 26.1486 42.7656 C 26.1486 49.3281 31.5392 54.6719 38.0548 54.6719 Z M 33.2501 49.4453 C 32.5001 49.4453 31.9845 48.9531 31.9845 48.2500 C 31.9845 47.9688 32.0314 47.7344 32.1486 47.4297 L 36.2735 36.2969 C 36.6017 35.4766 37.2111 35.0547 38.0782 35.0547 C 38.9220 35.0547 39.5782 35.4766 39.8829 36.2969 L 44.0314 47.4297 C 44.1251 47.7344 44.1720 47.9688 44.1720 48.2500 C 44.1720 48.9297 43.6564 49.4453 42.9064 49.4453 C 42.2735 49.4453 41.8517 49.1172 41.6173 48.3672 L 40.6095 45.3672 L 35.5704 45.3672 L 34.5392 48.3672 C 34.2814 49.1172 33.8829 49.4453 33.2501 49.4453 Z M 36.2501 43.2578 L 39.9064 43.2578 L 38.0782 38.0078 L 38.1017 37.8906 L 38.0314 37.8906 L 38.0782 38.0078 Z"/></svg>
}

export default BoltBadgeA