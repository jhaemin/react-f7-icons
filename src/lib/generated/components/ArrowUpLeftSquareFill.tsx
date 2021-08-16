import React from 'react'
import type { IconProps } from '../../types'

const ArrowUpLeftSquareFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 13.7851 49.5742 L 42.2382 49.5742 C 47.1366 49.5742 49.5743 47.1367 49.5743 42.3086 L 49.5743 13.6914 C 49.5743 8.8633 47.1366 6.4258 42.2382 6.4258 L 13.7851 6.4258 C 8.9101 6.4258 6.4257 8.8398 6.4257 13.6914 L 6.4257 42.3086 C 6.4257 47.1602 8.9101 49.5742 13.7851 49.5742 Z M 20.4882 34.3633 C 19.3632 34.3633 18.6132 33.5196 18.6132 32.3008 L 18.6132 20.1367 C 18.6132 18.5898 19.4335 18.0039 20.7695 18.0039 L 33.0273 18.0039 C 34.2226 18.0039 34.9960 18.7305 34.9960 19.8789 C 34.9960 21.0274 34.1992 21.7774 32.9804 21.7774 L 28.2695 21.7774 L 24.4492 21.3555 L 28.4804 25.1289 L 37.9960 34.6445 C 38.3710 35.0196 38.6054 35.4883 38.6054 36.0274 C 38.6054 37.1992 37.8554 37.9492 36.7304 37.9492 C 36.0742 37.9492 35.6288 37.7383 35.2539 37.3398 L 25.7382 27.8477 L 22.0117 23.8633 L 22.3866 27.8945 L 22.3866 32.3711 C 22.3866 33.5898 21.6366 34.3633 20.4882 34.3633 Z"/></svg>
}

export default ArrowUpLeftSquareFill
