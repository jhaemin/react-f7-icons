import React from 'react'
import type { IconProps } from '../../types'

const SuitClubFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 5.9102 32.4531 C 5.9102 38.0547 10.3165 42.3906 15.9180 42.3906 C 19.0352 42.3906 22.2227 41.3594 23.6055 38.6172 L 23.8399 38.6172 C 23.8399 41.7344 20.4180 44.3125 19.0352 45.7656 C 17.3477 47.5234 18.3790 49.9609 20.5586 49.9609 L 35.4415 49.9609 C 37.5977 49.9609 38.6290 47.5234 36.9415 45.7656 C 35.5586 44.3125 32.1368 41.7344 32.1368 38.6172 L 32.3946 38.6172 C 33.7539 41.3594 36.9649 42.3906 40.0586 42.3906 C 45.6602 42.3906 50.0898 38.0547 50.0898 32.4531 C 50.0898 26.8281 45.8243 22.0703 40.2227 22.0703 C 38.0899 22.0703 35.8868 22.7969 34.1524 24.1562 C 37.0586 21.7891 38.0899 18.8125 38.0899 16.1406 C 38.0899 10.5391 33.5665 6.0391 27.9883 6.0391 C 22.4337 6.0391 17.9102 10.5391 17.9102 16.1406 C 17.9102 18.8125 18.9180 21.7891 21.8243 24.1562 C 20.1134 22.7969 17.8868 22.0703 15.7539 22.0703 C 10.1524 22.0703 5.9102 26.8281 5.9102 32.4531 Z"/></svg>
}

export default SuitClubFill
