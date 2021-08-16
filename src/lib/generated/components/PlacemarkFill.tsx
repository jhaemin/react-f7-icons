import React from 'react'
import type { IconProps } from '../../types'

const PlacemarkFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56">
  <path d="M17,-1.42108547e-14 C26.3888407,-1.42108547e-14 34,7 34,19 C34,28.1303073 24.1585924,41.3129589 19.4516231,47.0958374 C18.0976291,48.6997621 15.8248694,48.6368741 14.5492719,47.0969369 C9.8426553,41.3146302 0,28.1308861 0,19 C0,7 7.61115925,-1.42108547e-14 17,-1.42108547e-14 Z M17,11 C13.6862915,11 11,13.6862915 11,17 C11,20.3137085 13.6862915,23 17,23 C20.3137085,23 23,20.3137085 23,17 C23,13.6862915 20.3137085,11 17,11 Z" transform="translate(11 4)"/>
</svg>

}

export default PlacemarkFill
