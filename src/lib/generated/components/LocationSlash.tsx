import React from 'react'
import type { IconProps } from '../../types'

const LocationSlash: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 41.7460 29.5117 L 51.0509 9.4258 C 51.9884 7.4570 51.8712 6.0039 50.9333 5.0664 C 49.9724 4.1055 48.5194 4.0352 46.5507 4.9258 L 26.4179 14.2774 L 28.9960 16.8555 L 47.1835 8.4883 C 47.3241 8.4180 47.4413 8.4414 47.5116 8.4883 C 47.5820 8.5586 47.5585 8.6523 47.4882 8.8164 L 39.1445 26.9570 Z M 47.7696 44.6523 C 48.4724 45.3555 49.6210 45.3555 50.3242 44.6523 C 51.0274 43.9492 51.0274 42.8008 50.3242 42.0977 L 14.2304 6.0039 C 13.5273 5.3008 12.3789 5.3008 11.6523 6.0039 C 10.9726 6.6836 10.9726 7.8789 11.6523 8.5586 Z M 27.7538 50.8399 C 28.9023 51.9648 30.4491 51.7774 31.5741 50.6523 C 32.2070 50.0195 32.6991 49.0352 33.1210 48.0977 L 37.5741 38.4414 L 35.0663 35.9101 L 30.4491 45.9414 C 30.3789 46.0820 30.3320 46.1055 30.2382 46.0820 C 30.1679 46.0586 30.1445 46.0117 30.1445 45.9180 L 30.1913 30.9883 L 24.9882 25.8086 L 10.0585 25.8555 C 9.9648 25.8555 9.9179 25.8086 9.8945 25.7383 C 9.8710 25.6914 9.9413 25.5977 10.0585 25.5274 L 20.0898 20.9336 L 17.5585 18.3789 L 7.8789 22.8555 C 6.9648 23.2774 5.9569 23.7930 5.3241 24.4023 C 4.1757 25.5274 4.0116 27.0977 5.1367 28.2226 C 5.9804 29.0430 6.7773 29.3008 8.3945 29.3008 L 26.0898 29.4180 C 26.2538 29.4180 26.3710 29.4414 26.4648 29.5117 C 26.5351 29.6055 26.5820 29.7461 26.5820 29.9101 L 26.6757 47.5820 C 26.6757 49.1992 26.9335 50.0430 27.7538 50.8399 Z"/></svg>
}

export default LocationSlash
