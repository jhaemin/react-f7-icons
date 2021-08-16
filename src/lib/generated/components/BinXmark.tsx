import React from 'react'
import type { IconProps } from '../../types'

const BinXmark: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 15.7566 49.5476 L 40.2434 49.5476 C 44.8420 49.5476 46.8962 47.4001 47.5731 42.8248 L 51.0511 19.4118 L 51.5645 19.4118 C 54.4358 19.4118 56 17.6144 56 14.7665 L 56 11.2183 C 56 8.3705 54.4358 6.5731 51.5645 6.5731 L 4.4352 6.5731 C 1.7040 6.5731 0 8.3705 0 11.2183 L 0 14.7665 C 0 17.6144 1.5640 19.4118 4.4352 19.4118 L 4.9721 19.4118 L 8.4268 42.8248 C 9.1271 47.4234 11.1579 49.5476 15.7566 49.5476 Z M 5.3922 15.8870 C 4.2251 15.8870 3.7582 15.3968 3.7582 14.2296 L 3.7582 11.7553 C 3.7582 10.5881 4.2251 10.0979 5.3922 10.0979 L 50.6308 10.0979 C 51.7983 10.0979 52.2419 10.5881 52.2419 11.7553 L 52.2419 14.2296 C 52.2419 15.3968 51.7983 15.8870 50.6308 15.8870 Z M 15.8032 46.0228 C 13.7024 46.0228 12.5118 45.0891 12.1617 42.7782 L 8.6836 19.4118 L 47.3164 19.4118 L 43.8380 42.7782 C 43.5115 45.0891 42.2743 46.0228 40.1967 46.0228 Z M 21.2188 41.1441 C 21.7090 41.1441 22.1292 40.9107 22.4560 40.5839 L 27.9883 35.0516 L 33.5206 40.5839 C 33.8474 40.8874 34.2676 41.1441 34.7811 41.1441 C 35.7615 41.1441 36.5552 40.3038 36.5552 39.3234 C 36.5552 38.7865 36.3451 38.4130 36.0183 38.0629 L 30.5093 32.5539 L 36.0416 26.9749 C 36.3918 26.6014 36.5785 26.2513 36.5785 25.7611 C 36.5785 24.7573 35.7849 23.9637 34.7811 23.9637 C 34.3376 23.9637 33.9408 24.1504 33.5673 24.5239 L 27.9883 30.0562 L 22.4326 24.5472 C 22.0825 24.1971 21.7090 24.0104 21.2188 24.0104 C 20.2384 24.0104 19.4214 24.7807 19.4214 25.7611 C 19.4214 26.2746 19.6315 26.6715 19.9583 26.9983 L 25.4673 32.5539 L 19.9583 38.0862 C 19.6315 38.4130 19.4214 38.8098 19.4214 39.3234 C 19.4214 40.3038 20.2150 41.1441 21.2188 41.1441 Z"/></svg>
}

export default BinXmark
