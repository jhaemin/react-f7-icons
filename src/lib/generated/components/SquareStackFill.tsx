import React from 'react'
import type { IconProps } from '../../types'

const SquareStackFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 16.8437 3.6367 L 38.6406 3.6367 C 38.5 1.6445 37.3750 .6133 35.2188 .6133 L 20.2890 .6133 C 18.1328 .6133 16.9844 1.6445 16.8437 3.6367 Z M 12.6953 10.1289 L 42.6250 10.1289 C 42.2734 7.9961 41.2656 6.8242 38.9219 6.8242 L 16.3984 6.8242 C 14.0547 6.8242 13.0468 7.9961 12.6953 10.1289 Z M 14.5937 55.3867 L 42.1094 55.3867 C 46.3281 55.3867 48.7656 52.9492 48.7656 48.1211 L 48.7656 21.1211 C 48.7656 16.2930 46.3047 13.8555 41.4063 13.8555 L 14.5937 13.8555 C 9.7188 13.8555 7.2344 16.2930 7.2344 21.1211 L 7.2344 48.1211 C 7.2344 52.9727 9.7188 55.3867 14.5937 55.3867 Z"/></svg>
}

export default SquareStackFill
