import React from 'react'
import type { IconProps } from '../../types'

const Globe: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 28.0234 51.2734 C 40.7500 51.2734 51.2735 40.7266 51.2735 28 C 51.2735 15.2968 40.7265 4.7266 28.0000 4.7266 C 15.2734 4.7266 4.7265 15.2968 4.7265 28 C 4.7265 40.7266 15.2968 51.2734 28.0234 51.2734 Z M 21.2734 15.8594 C 22.6562 12.3672 24.5546 9.8594 26.6406 9.0859 L 26.6406 16.3984 C 24.7187 16.3516 22.9141 16.1641 21.2734 15.8594 Z M 29.3359 9.0859 C 31.4219 9.8594 33.3437 12.3672 34.7031 15.8594 C 33.0625 16.1641 31.2812 16.3516 29.3359 16.3984 Z M 34.2812 9.7422 C 36.7890 10.6094 39.0625 11.9453 40.9609 13.7031 C 39.9297 14.2890 38.7343 14.7812 37.3984 15.2031 C 36.5546 13.0234 35.4765 11.1719 34.2812 9.7422 Z M 15.0156 13.7031 C 16.9375 11.9688 19.2109 10.6094 21.7187 9.7422 C 20.5000 11.1719 19.4453 13.0234 18.5781 15.2031 C 17.2656 14.7812 16.0703 14.2890 15.0156 13.7031 Z M 39.6250 26.6406 C 39.5078 23.3828 39.0156 20.3594 38.2422 17.6875 C 40.0000 17.1484 41.5468 16.4688 42.8594 15.6719 C 45.3437 18.6719 46.9609 22.4688 47.2422 26.6406 Z M 8.7578 26.6406 C 9.0390 22.4688 10.6328 18.6719 13.1406 15.6719 C 14.4297 16.4688 16.0000 17.1484 17.7343 17.6875 C 16.9609 20.3594 16.4922 23.3828 16.3750 26.6406 Z M 29.3359 26.6406 L 29.3359 19.0937 C 31.5390 19.0234 33.6250 18.7656 35.5703 18.3672 C 36.2734 20.8750 36.7422 23.6875 36.8594 26.6406 Z M 19.1406 26.6406 C 19.2343 23.6875 19.7031 20.8750 20.4297 18.3672 C 22.3515 18.7656 24.4609 19.0234 26.6406 19.0937 L 26.6406 26.6406 Z M 8.7578 29.3359 L 16.3750 29.3359 C 16.4687 32.6406 16.9609 35.7344 17.7343 38.4297 C 16.0234 38.9688 14.4765 39.6250 13.1875 40.4219 C 10.6562 37.3750 9.0390 33.5547 8.7578 29.3359 Z M 19.1172 29.3359 L 26.6406 29.3359 L 26.6406 37.0234 C 24.4609 37.0937 22.3515 37.3281 20.4297 37.75 C 19.7031 35.2188 19.2343 32.3359 19.1172 29.3359 Z M 29.3359 37.0234 L 29.3359 29.3359 L 36.8594 29.3359 C 36.7656 32.3359 36.2968 35.2188 35.5703 37.75 C 33.6250 37.3281 31.5390 37.0937 29.3359 37.0234 Z M 38.2422 38.4297 C 39.0390 35.7344 39.5078 32.6406 39.6250 29.3359 L 47.2422 29.3359 C 46.9843 33.5547 45.3672 37.3984 42.8125 40.4219 C 41.5234 39.6484 39.9765 38.9688 38.2422 38.4297 Z M 21.2734 40.2578 C 22.9141 39.9531 24.7187 39.7656 26.6406 39.7188 L 26.6406 47.0312 C 24.5546 46.2578 22.6562 43.7500 21.2734 40.2578 Z M 29.3359 39.7188 C 31.2812 39.7656 33.0625 39.9531 34.7031 40.2578 C 33.3437 43.7500 31.4219 46.2578 29.3359 47.0312 Z M 15.0859 42.3672 C 16.1172 41.8047 17.2890 41.3125 18.5781 40.9141 C 19.4219 43.0234 20.4297 44.8047 21.6015 46.2344 C 19.1641 45.3906 16.9609 44.0547 15.0859 42.3672 Z M 37.3984 40.9141 C 38.7109 41.3125 39.8828 41.8047 40.9141 42.3906 C 39.0390 44.0781 36.8125 45.4141 34.3750 46.2578 C 35.5468 44.8281 36.5781 43.0234 37.3984 40.9141 Z"/></svg>
}

export default Globe
