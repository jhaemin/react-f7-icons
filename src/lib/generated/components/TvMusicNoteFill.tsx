import React from 'react'
import type { IconProps } from '../../types'

const TvMusicNoteFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 5.4536 43.0962 L 50.5464 43.0962 C 54.1747 43.0962 56 41.3561 56 37.6426 L 56 13.3243 C 56 9.6108 54.1747 7.8708 50.5464 7.8708 L 5.4536 7.8708 C 1.8249 7.8708 0 9.6108 0 13.3243 L 0 37.6426 C 0 41.3561 1.8249 43.0962 5.4536 43.0962 Z M 34.3341 20.7726 L 29.1352 22.0246 C 28.6047 22.1519 28.4349 22.3641 28.4349 23.1917 L 28.4349 30.8097 C 28.4349 34.0352 26.2705 36.3057 23.0875 36.3057 C 20.8381 36.3057 19.4376 34.9476 19.4376 33.0591 C 19.4376 30.8734 21.1352 29.6638 23.1511 29.1333 L 25.2095 28.6028 C 26.3129 28.3058 26.3978 28.1148 26.3978 27.1174 L 26.3978 17.1016 C 26.3978 15.7859 26.6524 15.5737 27.7346 15.2979 L 34.2704 13.6639 C 35.4588 13.3668 35.7346 13.7488 35.7346 14.5976 L 35.7346 18.9689 C 35.7346 20.2633 35.4163 20.4967 34.3341 20.7726 Z M 43.4374 48.9953 C 43.4374 47.8919 42.5465 47.0007 41.4639 47.0007 L 14.4933 47.0007 C 13.4111 47.0007 12.5411 47.8919 12.5411 48.9953 C 12.5411 50.0988 13.4111 50.9901 14.4933 50.9901 L 41.4639 50.9901 C 42.5465 50.9901 43.4374 50.0988 43.4374 48.9953 Z"/></svg>
}

export default TvMusicNoteFill
