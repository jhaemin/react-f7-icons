import React from 'react'
import type { IconProps } from '../../types'

const ArrowUpDoc: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 15.5547 53.125 L 40.4453 53.125 C 45.2969 53.125 47.7109 50.6640 47.7109 45.7890 L 47.7109 24.5078 C 47.7109 21.4844 47.3828 20.1718 45.5078 18.2500 L 32.5703 5.1015 C 30.7891 3.2734 29.3359 2.8750 26.6875 2.8750 L 15.5547 2.8750 C 10.7266 2.8750 8.2891 5.3594 8.2891 10.2344 L 8.2891 45.7890 C 8.2891 50.6875 10.7266 53.125 15.5547 53.125 Z M 15.7422 49.3515 C 13.3281 49.3515 12.0625 48.0625 12.0625 45.7187 L 12.0625 10.3047 C 12.0625 7.9844 13.3281 6.6484 15.7656 6.6484 L 26.1718 6.6484 L 26.1718 20.2656 C 26.1718 23.2187 27.6718 24.6718 30.5781 24.6718 L 43.9375 24.6718 L 43.9375 45.7187 C 43.9375 48.0625 42.6953 49.3515 40.2578 49.3515 Z M 31.0000 21.1328 C 30.0859 21.1328 29.7109 20.7578 29.7109 19.8203 L 29.7109 7.3750 L 43.2109 21.1328 Z M 29.8047 44.6172 L 29.8047 36.1094 L 29.6406 32.2891 L 31.6328 34.3515 L 33.7656 36.5078 C 34.0937 36.8594 34.5391 37.0469 35.0078 37.0469 C 35.9453 37.0469 36.6484 36.3672 36.6484 35.4297 C 36.6484 34.8906 36.4375 34.4922 36.0625 34.1640 L 29.3125 27.9531 C 28.8203 27.5078 28.4687 27.3437 28.0000 27.3437 C 27.5547 27.3437 27.1797 27.5078 26.6875 27.9531 L 19.9375 34.1640 C 19.5625 34.4922 19.3515 34.8906 19.3515 35.4297 C 19.3515 36.3672 20.0547 37.0469 21.0156 37.0469 C 21.4375 37.0469 21.9297 36.8594 22.2578 36.5078 L 24.3672 34.3515 L 26.3594 32.2891 L 26.2187 36.1094 L 26.2187 44.6172 C 26.2187 45.5781 27.0391 46.3515 28.0000 46.3515 C 28.9609 46.3515 29.8047 45.5781 29.8047 44.6172 Z"/></svg>
}

export default ArrowUpDoc
