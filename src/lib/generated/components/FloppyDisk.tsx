import React from 'react'
import type { IconProps } from '../../types'

const FloppyDisk: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path fillRule="evenodd" d="M7.04,0 L7.04,10.56 C7.04,12.0180317 8.22196826,13.2 9.68,13.2 L30.8,13.2 C32.2580317,13.2 33.44,12.0180317 33.44,10.56 L33.44,0 L33.7419683,0 C34.6755303,0 35.5708561,0.370856078 36.2309841,1.03098413 L42.9690159,7.76901587 C43.6291439,8.42914392 44,9.3244697 44,10.2580317 L44,40.48 C44,42.4240423 42.4240423,44 40.48,44 L3.52,44 C1.57595768,44 0,42.4240423 0,40.48 L0,3.52 C0,1.57595768 1.57595768,0 3.52,0 L7.04,0 Z M9.68,22.88 C8.22196826,22.88 7.04,24.0619683 7.04,25.52 L7.04,36.08 C7.04,37.5380317 8.22196826,38.72 9.68,38.72 L30.8,38.72 C32.2580317,38.72 33.44,37.5380317 33.44,36.08 L33.44,25.52 C33.44,24.0619683 32.2580317,22.88 30.8,22.88 L9.68,22.88 Z M26.4,0 L28.16,0 C28.6460106,0 29.04,0.39398942 29.04,0.88 L29.04,7.92 C29.04,8.40601058 28.6460106,8.8 28.16,8.8 L26.4,8.8 C25.9139894,8.8 25.52,8.40601058 25.52,7.92 L25.52,0.88 C25.52,0.39398942 25.9139894,0 26.4,0 Z" transform="translate(6 6)"/>
</svg>

}

export default FloppyDisk