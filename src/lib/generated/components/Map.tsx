import React from 'react'
import type { IconProps } from '../../types'

const Map: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 35.7343 51.5898 C 36.5780 51.5898 37.3984 51.3789 38.0780 50.9805 L 50.3591 44.0195 C 51.7420 43.2461 52.3751 42.1211 52.3751 40.5508 L 52.3751 8.0430 C 52.3751 6.3086 51.4141 5.3476 49.7264 5.3476 C 49.1404 5.3476 48.5312 5.5352 47.7810 5.9571 L 35.3358 12.8711 L 22.6093 5.0664 C 21.9062 4.6445 21.0858 4.4102 20.2655 4.4102 C 19.3984 4.4102 18.5546 4.6445 17.8280 5.0664 L 5.6640 12.0039 C 4.2577 12.8008 3.6249 13.9258 3.6249 15.4961 L 3.6249 47.9570 C 3.6249 49.6914 4.6093 50.6758 6.2734 50.6758 C 6.8827 50.6758 7.4687 50.4649 8.2421 50.0430 L 20.1484 43.6211 L 33.1093 50.8867 C 33.9765 51.3555 34.8671 51.5898 35.7343 51.5898 Z M 7.7265 45.8242 C 7.5155 45.8242 7.3984 45.6836 7.3984 45.4492 L 7.3984 16.4102 C 7.3984 15.8476 7.6327 15.4492 8.1718 15.1211 L 17.8046 9.4961 C 18.0858 9.3320 18.3436 9.1914 18.6249 9.0273 L 18.6249 39.8945 L 8.0546 45.7070 C 7.9374 45.7539 7.8202 45.8242 7.7265 45.8242 Z M 33.6015 46.5508 C 33.2734 46.3633 32.9218 46.1992 32.5702 46.0117 L 22.3984 40.2695 L 22.3984 9.5195 C 22.6562 9.6602 22.9140 9.8008 23.1484 9.9414 L 33.6015 16.3164 Z M 37.3749 46.9727 L 37.3749 16.0820 L 47.9452 10.3164 C 48.0858 10.2461 48.2029 10.1992 48.2970 10.1992 C 48.4842 10.1992 48.6013 10.3398 48.6013 10.5742 L 48.6013 39.6133 C 48.6013 40.1992 48.3906 40.5977 47.8516 40.9258 L 38.4531 46.3867 C 38.0780 46.5977 37.7265 46.8086 37.3749 46.9727 Z"/></svg>
}

export default Map
