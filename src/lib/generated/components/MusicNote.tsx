import React from 'react'
import type { IconProps } from '../../types'

const MusicNote: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 42.6484 15.1797 L 42.6484 6.3437 C 42.6484 5.0312 41.5703 4.1641 40.3047 4.4453 L 27.8594 7.1406 C 26.2656 7.4922 25.3984 8.3359 25.3984 9.7422 L 25.5391 35.8047 C 25.5391 36.8828 25.0469 37.5859 24.0860 37.7734 L 20.3594 38.5703 C 15.5781 39.5547 13.3516 42.0156 13.3516 45.6015 C 13.3516 49.2578 16.1875 51.8359 20.1484 51.8359 C 23.6172 51.8359 28.8672 49.2344 28.8672 42.3437 L 28.8672 20.8984 C 28.8672 19.7265 29.0547 19.5156 30.1094 19.3047 L 41.2656 16.8437 C 42.1094 16.6563 42.6484 16 42.6484 15.1797 Z"/></svg>
}

export default MusicNote
