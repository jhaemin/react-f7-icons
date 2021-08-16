import React from 'react'
import type { IconProps } from '../../types'

const RectangleBadgeXmark: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 49.6885 9.4282 L 14.9146 9.4282 C 10.7136 9.4282 8.6030 11.4986 8.6030 15.6594 L 8.6030 27.1368 C 9.1457 27.0764 9.6884 27.0363 10.2110 27.0363 C 10.7538 27.0363 11.2965 27.0764 11.8392 27.1368 L 11.8392 15.8202 C 11.8392 13.7298 12.9648 12.6644 14.9547 12.6644 L 49.6481 12.6644 C 51.6381 12.6644 52.7640 13.7298 52.7640 15.8202 L 52.7640 40.0413 C 52.7640 42.1317 51.6381 43.1970 49.6481 43.1970 L 22.7336 43.1970 C 22.4723 44.3428 22.0301 45.4282 21.4472 46.4332 L 49.6885 46.4332 C 53.9096 46.4332 56 44.3428 56 40.2021 L 56 15.6594 C 56 11.5187 53.9096 9.4282 49.6885 9.4282 Z M 10.2110 50.2121 C 15.8191 50.2121 20.4221 45.6292 20.4221 40.0011 C 20.4221 34.4131 15.8191 29.7900 10.2110 29.7900 C 4.6231 29.7900 0 34.4131 0 40.0011 C 0 45.6292 4.6231 50.2121 10.2110 50.2121 Z M 7.2362 44.7649 C 6.7337 45.2674 5.9900 45.1669 5.5075 44.7046 C 5.0452 44.2423 4.9648 43.4785 5.4674 42.9759 L 8.5025 39.9408 L 5.7085 37.1267 C 5.2663 36.6644 5.2663 35.9207 5.7085 35.4986 C 6.1507 35.0563 6.8744 35.0363 7.3367 35.4986 L 10.1708 38.2724 L 13.1859 35.2574 C 13.6884 34.7549 14.4522 34.8553 14.9146 35.3177 C 15.3769 35.7800 15.4774 36.5237 14.9749 37.0463 L 11.9397 40.0614 L 14.7336 42.8754 C 15.1758 43.3377 15.1758 44.1016 14.7336 44.5237 C 14.2914 44.9458 13.5477 44.9659 13.0854 44.5237 L 10.2914 41.7297 Z"/></svg>
}

export default RectangleBadgeXmark
