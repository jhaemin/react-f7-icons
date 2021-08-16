import React from 'react'
import type { IconProps } from '../../types'

const BagFillBadgeMinus: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 47.3945 10.9610 L 43.6680 10.9610 C 43.5274 6.0391 39.2618 1.8437 33.9649 1.8437 C 28.6446 1.8437 24.3790 6.0391 24.2384 10.9610 L 20.5118 10.9610 C 15.6368 10.9610 13.1524 13.3750 13.1524 18.2266 L 13.1524 27.1328 C 21.4727 27.1328 28.2931 33.9532 28.2931 42.2500 C 28.2931 44.9688 27.5431 47.5234 26.2540 49.7500 L 48.0977 49.7500 C 52.2929 49.7500 54.7538 47.3125 54.7538 42.4844 L 54.7538 18.2266 C 54.7538 13.3984 52.2698 10.9610 47.3945 10.9610 Z M 33.9649 5.4063 C 37.2696 5.4063 39.7774 7.8906 39.8946 10.9610 L 28.0352 10.9610 C 28.1290 7.8906 30.6368 5.4063 33.9649 5.4063 Z M 13.1524 54.1563 C 19.6915 54.1563 25.0587 48.8125 25.0587 42.2500 C 25.0587 35.7344 19.6915 30.3437 13.1524 30.3437 C 6.6368 30.3437 1.2462 35.7344 1.2462 42.2500 C 1.2462 48.8125 6.6368 54.1563 13.1524 54.1563 Z M 7.1290 43.7031 C 6.3555 43.7031 5.6993 43.0234 5.6993 42.2500 C 5.6993 41.5000 6.3555 40.8203 7.1290 40.8203 L 19.1758 40.8203 C 19.9727 40.8203 20.6290 41.5000 20.6290 42.2500 C 20.6290 43.0234 19.9727 43.7031 19.1758 43.7031 Z"/></svg>
}

export default BagFillBadgeMinus
