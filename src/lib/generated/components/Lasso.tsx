import React from 'react'
import type { IconProps } from '../../types'

const Lasso: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 3.8594 25.2344 C 3.8594 35.9922 13.0938 42.0391 24.6251 42.0391 C 25.5157 42.0391 26.4297 41.9922 27.3438 41.9453 C 28.3047 42.3438 29.4531 42.5781 30.7422 42.5781 C 34.2578 42.5781 37.8204 41.5938 40.9844 39.9063 C 41.0547 40.2578 41.0782 40.6328 41.0782 41.0078 C 41.0782 43.8203 39.4844 46.5625 36.8594 48.2266 C 36.1797 48.7188 35.6875 49.2110 35.6875 50.0547 C 35.6875 50.9219 36.3907 51.6719 37.4922 51.6719 C 38.0078 51.6719 38.3126 51.5312 38.7578 51.25 C 42.3672 48.9063 44.5938 44.9922 44.5938 40.9375 C 44.5938 39.8594 44.4531 38.8516 44.1719 37.8906 C 48.8828 34.3047 52.1406 29.0312 52.1406 23.2422 C 52.1406 12.0859 42.2031 4.3281 30.3204 4.3281 C 17.3126 4.3281 3.8594 12.8594 3.8594 25.2344 Z M 7.3985 25.2578 C 7.3985 15.0391 19.1172 7.8672 30.3438 7.8672 C 40.1641 7.8672 48.6251 13.9610 48.6251 23.2188 C 48.6251 27.6484 46.1407 31.7500 42.5313 34.6797 C 40.5626 32.0781 37.3751 30.4375 33.6953 30.4375 C 28.3282 30.4375 24.2735 33.25 24.2735 37.3984 C 24.2735 37.7969 24.3204 38.1719 24.4141 38.5234 C 15.0626 38.4063 7.3985 34 7.3985 25.2578 Z M 27.8360 37.2813 C 27.8360 35.3125 30.5782 34 33.9766 34 C 36.3204 34 38.3360 35.0078 39.6251 36.6484 C 36.8829 38.1719 33.7657 39.0625 30.7422 39.0625 C 29.0547 39.0625 27.8360 38.4063 27.8360 37.2813 Z"/></svg>
}

export default Lasso
