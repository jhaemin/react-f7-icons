import React from 'react'
import type { IconProps } from '../../types'

const LocationNorthLine: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.6830 13.9315 C 28.7793 13.9315 29.5329 13.1550 29.5329 11.9445 L 29.5329 1.9641 C 29.5329 .7537 28.7793 0 27.6830 0 C 26.6096 0 25.8560 .7537 25.8560 1.9641 L 25.8560 11.9445 C 25.8560 13.1550 26.6096 13.9315 27.6830 13.9315 Z M 14.8250 56 C 15.9212 56 17.0175 55.3833 17.9082 54.5383 L 27.0664 45.8597 C 27.3405 45.6085 27.5003 45.4943 27.6830 45.4943 C 27.8658 45.4943 28.0485 45.6085 28.2997 45.8597 L 37.4579 54.5383 C 38.3715 55.3833 39.4677 56 40.5411 56 C 42.1170 56 43.2818 54.5612 43.2818 53.0310 C 43.2818 52.1174 42.9163 51.1125 42.4367 49.8336 L 30.8347 19.8923 C 30.0583 17.9054 29.0077 17.0603 27.6830 17.0603 C 26.3812 17.0603 25.3078 17.9054 24.5313 19.8923 L 12.9522 49.8336 C 12.4498 51.1125 12.0844 52.1174 12.0844 53.0310 C 12.0844 54.5612 13.2720 56 14.8250 56 Z M 16.2866 51.0212 C 16.2181 50.9298 16.1953 50.8385 16.2638 50.6786 L 27.3633 22.2219 C 27.4318 22.0391 27.5460 21.8793 27.6830 21.8793 C 27.8658 21.8793 27.9571 22.0620 28.0256 22.2219 L 39.1251 50.6786 C 39.1708 50.8385 39.1708 50.9527 39.0795 51.0212 C 39.0338 51.0440 38.9424 51.1125 38.8282 50.9755 L 29.4644 42.5024 C 28.8250 41.8858 28.2540 41.5432 27.6830 41.5432 C 27.1121 41.5432 26.5640 41.8858 25.9245 42.5024 L 16.5607 50.9755 C 16.4922 51.0440 16.3552 51.1125 16.2866 51.0212 Z"/></svg>
}

export default LocationNorthLine
