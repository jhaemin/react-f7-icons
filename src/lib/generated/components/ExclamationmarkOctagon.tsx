import React from 'react'
import type { IconProps } from '../../types'

const ExclamationmarkOctagon: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 20.8867 50.7109 L 35.1132 50.7109 C 38.0898 50.7109 39.5195 49.7500 41.0429 48.0859 L 49.6679 38.5234 C 51.2149 36.8125 51.6133 35.6875 51.6133 33.3671 L 51.6133 22.6562 C 51.6133 20.3125 51.2149 19.2109 49.6679 17.5000 L 41.0429 7.9375 C 39.5195 6.2734 38.0898 5.2891 35.1132 5.2891 L 20.8867 5.2891 C 17.9101 5.2891 16.5039 6.2734 14.9570 7.9375 L 6.3320 17.5000 C 4.7851 19.2109 4.3867 20.3125 4.3867 22.6562 L 4.3867 33.3671 C 4.3867 35.6875 4.7851 36.8125 6.3320 38.5234 L 14.9570 48.0859 C 16.5039 49.7500 17.9101 50.7109 20.8867 50.7109 Z M 22.1523 46.9609 C 19.8086 46.9609 19.1523 46.4453 17.8398 45.0390 L 9.8711 36.2500 C 8.9335 35.2187 8.7226 34.6328 8.7226 32.9218 L 8.7226 23.1015 C 8.7226 21.3906 8.9335 20.8047 9.8711 19.7734 L 17.8398 10.9844 C 19.1523 9.5547 19.8086 9.0625 22.1523 9.0625 L 33.8476 9.0625 C 36.1913 9.0625 36.8476 9.5547 38.1601 10.9844 L 46.1523 19.7734 C 47.0663 20.8047 47.2775 21.3906 47.2775 23.1015 L 47.2775 32.9218 C 47.2775 34.6328 47.0663 35.2187 46.1523 36.2500 L 38.1601 45.0390 C 36.8476 46.4453 36.1913 46.9609 33.8476 46.9609 Z M 28.0117 32.125 C 29.1132 32.125 29.7695 31.4922 29.7929 30.2734 L 30.1445 17.8984 C 30.1679 16.7031 29.2304 15.8125 27.9882 15.8125 C 26.7226 15.8125 25.8320 16.6797 25.8554 17.8750 L 26.1601 30.2734 C 26.1835 31.4687 26.8398 32.125 28.0117 32.125 Z M 28.0117 39.7422 C 29.3476 39.7422 30.5195 38.6640 30.5195 37.3047 C 30.5195 35.9453 29.3711 34.8671 28.0117 34.8671 C 26.6289 34.8671 25.4804 35.9687 25.4804 37.3047 C 25.4804 38.6406 26.6523 39.7422 28.0117 39.7422 Z"/></svg>
}

export default ExclamationmarkOctagon