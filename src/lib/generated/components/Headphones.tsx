import React from 'react'
import type { IconProps } from '../../types'

const Headphones: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 5.5234 41.2422 L 6.7890 41.2422 C 7.1640 41.2422 7.3749 41.0078 7.3749 40.6562 L 7.3749 27.4375 C 7.3749 16.3281 15.7656 9.1094 28.0000 9.1094 C 40.2578 9.1094 48.6248 16.3281 48.6248 27.4375 L 48.6248 40.6562 C 48.6248 41.0078 48.8360 41.2422 49.2109 41.2422 L 50.4767 41.2422 C 51.5077 41.2422 52.2344 40.5859 52.2344 39.625 L 52.2344 26.5703 C 52.2344 14.125 42.4140 5.4766 28.7968 5.4766 L 27.2031 5.4766 C 13.5859 5.4766 3.7656 14.125 3.7656 26.5703 L 3.7656 39.625 C 3.7656 40.5859 4.5156 41.2422 5.5234 41.2422 Z M 12.2734 50.5234 L 14.4765 50.5234 C 17.3593 50.5234 18.9765 49.0000 18.9765 46.3047 L 18.9765 36.1797 C 18.9765 33.4844 17.3593 31.9609 14.4765 31.9609 L 12.2734 31.9609 C 10.7031 31.9609 9.8359 32.8047 9.8359 34.3516 L 9.8359 48.1328 C 9.8359 49.7031 10.7031 50.5234 12.2734 50.5234 Z M 41.5468 50.5234 L 43.7500 50.5234 C 45.3437 50.5234 46.2344 49.7031 46.2344 48.1328 L 46.2344 34.3516 C 46.2344 32.8047 45.3437 31.9609 43.7500 31.9609 L 41.5468 31.9609 C 38.6874 31.9609 37.0702 33.4844 37.0702 36.1797 L 37.0702 46.3047 C 37.0702 49.0000 38.6874 50.5234 41.5468 50.5234 Z"/></svg>
}

export default Headphones