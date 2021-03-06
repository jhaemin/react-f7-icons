import React from 'react'
import type { IconProps } from '../../types'

const EllipsisVertical: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path d="M5,10.3203 C2.3984,10.3203 0.3125,8.2344 0.3125,5.586 C0.3125,2.9844 2.3984,0.8985 5,0.8985 C7.6016,0.8985 9.6875,2.9844 9.6875,5.586 C9.6875,8.2344 7.6016,10.3203 5,10.3203 Z M5,27.6641 C2.3984,27.6641 0.3125,25.6016 0.3125,23 C0.3125,20.3984 2.3984,18.336 5,18.336 C7.6016,18.336 9.6875,20.3984 9.6875,23 C9.6875,25.6016 7.6016,27.6641 5,27.6641 Z M5,45.1015 C2.3984,45.1015 0.3125,42.9922 0.3125,40.4141 C0.3125,37.7657 2.3984,35.6797 5,35.6797 C7.6016,35.6797 9.6875,37.7657 9.6875,40.4141 C9.6875,42.9922 7.6016,45.1015 5,45.1015 Z" transform="translate(23 5)"/>
</svg>

}

export default EllipsisVertical
