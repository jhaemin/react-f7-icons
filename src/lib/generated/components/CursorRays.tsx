import React from 'react'
import type { IconProps } from '../../types'

const CursorRays: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 30.0391 4.7969 C 30.0391 3.6953 29.1016 2.7578 28.0001 2.7578 C 26.8985 2.7578 25.9610 3.6953 25.9610 4.7969 L 25.9610 11.6406 C 25.9610 12.7422 26.8985 13.6797 28.0001 13.6797 C 29.1016 13.6797 30.0391 12.7422 30.0391 11.6406 Z M 14.6641 17.7578 C 15.4376 18.5547 16.7500 18.5547 17.5469 17.7578 C 18.3204 16.9844 18.3204 15.6719 17.5469 14.875 L 12.7422 10.0469 C 11.9688 9.2734 10.6563 9.2500 9.8594 10.0234 C 9.0860 10.7969 9.0860 12.1094 9.8594 12.9062 Z M 38.1954 15.1094 C 37.4220 15.9062 37.4220 17.2187 38.1954 17.9922 C 38.9922 18.7891 40.3047 18.7891 41.1016 17.9922 L 45.9298 13.1641 C 46.7264 12.3672 46.7264 11.0547 45.9298 10.2578 C 45.1563 9.4844 43.8438 9.4844 43.0469 10.2578 Z M 40.0001 50.8516 L 35.3594 40.0234 L 41.3126 40.3516 C 42.2735 40.3984 42.7422 39.3672 42.0626 38.6641 L 27.7657 24.0625 C 27.1329 23.4062 26.1954 23.7578 26.1485 24.6953 L 25.8907 44.9922 C 25.8673 46.0000 26.9922 46.4219 27.6485 45.6719 L 31.4688 41.4531 L 35.9454 52.5391 C 36.1798 53.0313 36.6485 53.2422 37.0938 53.0781 L 39.6016 52.0469 C 40.0469 51.8828 40.2344 51.3438 40.0001 50.8516 Z M 4.6094 26.1484 C 3.5079 26.1484 2.5704 27.0860 2.5704 28.1875 C 2.5704 29.2891 3.5079 30.2266 4.6094 30.2266 L 11.4766 30.2266 C 12.5782 30.2266 13.5157 29.2891 13.5157 28.1875 C 13.5157 27.0860 12.5782 26.1484 11.4766 26.1484 Z M 51.3906 30.2266 C 52.4922 30.2266 53.4296 29.2891 53.4296 28.1875 C 53.4296 27.0860 52.4922 26.1484 51.3906 26.1484 L 44.5469 26.1484 C 43.4454 26.1484 42.5079 27.0860 42.5079 28.1875 C 42.5079 29.2891 43.4454 30.2266 44.5469 30.2266 Z M 10.0704 43.2109 C 9.2735 43.9844 9.2735 45.3203 10.0469 46.0938 C 10.8204 46.8672 12.1563 46.8906 12.9532 46.1172 L 17.7813 41.2891 C 18.5547 40.5156 18.5547 39.2031 17.7813 38.4062 C 17.0313 37.6328 15.6954 37.6328 14.8985 38.4062 Z"/></svg>
}

export default CursorRays
