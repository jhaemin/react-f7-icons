import React from 'react'
import type { IconProps } from '../../types'

const TextBadgeXmark: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 16.2929 29.7695 C 22.8320 29.7695 28.1992 24.4023 28.1992 17.8399 C 28.1992 11.3242 22.8320 5.9336 16.2929 5.9336 C 9.7773 5.9336 4.3867 11.3242 4.3867 17.8399 C 4.3867 24.4023 9.7773 29.7695 16.2929 29.7695 Z M 33.8008 13.2461 L 49.8085 13.2461 C 50.8165 13.2461 51.6133 12.4726 51.6133 11.4648 C 51.6133 10.4805 50.8165 9.7070 49.8085 9.7070 L 33.8008 9.7070 C 32.7929 9.7070 32.0195 10.4805 32.0195 11.4648 C 32.0195 12.4726 32.7929 13.2461 33.8008 13.2461 Z M 12.8476 23.3945 C 12.2382 23.9805 11.3711 23.8633 10.8320 23.3242 C 10.2695 22.7852 10.1757 21.8945 10.7617 21.3086 L 14.3008 17.7695 L 11.0429 14.4883 C 10.5273 13.9492 10.5273 13.0820 11.0429 12.5899 C 11.5586 12.0742 12.4257 12.0508 12.9648 12.5899 L 16.2460 15.8242 L 19.7617 12.3086 C 20.3476 11.7226 21.2382 11.8399 21.7773 12.3789 C 22.3164 12.9179 22.4335 13.7852 21.8476 14.3945 L 18.3086 17.9101 L 21.5664 21.1914 C 22.0820 21.7305 22.0820 22.6211 21.5664 23.1133 C 21.0508 23.6055 20.1835 23.6289 19.6445 23.1133 L 16.3867 19.8555 Z M 33.8008 25.5273 L 49.8085 25.5273 C 50.8165 25.5273 51.6133 24.7539 51.6133 23.7461 C 51.6133 22.7617 50.8165 21.9883 49.8085 21.9883 L 33.8008 21.9883 C 32.7929 21.9883 32.0195 22.7617 32.0195 23.7461 C 32.0195 24.7539 32.7929 25.5273 33.8008 25.5273 Z M 6.1679 37.8086 L 49.8085 37.8086 C 50.8165 37.8086 51.6133 37.0117 51.6133 36.0273 C 51.6133 35.0430 50.8165 34.2695 49.8085 34.2695 L 6.1679 34.2695 C 5.1601 34.2695 4.3867 35.0430 4.3867 36.0273 C 4.3867 37.0117 5.1601 37.8086 6.1679 37.8086 Z M 6.1679 50.0664 L 49.8085 50.0664 C 50.8165 50.0664 51.6133 49.2930 51.6133 48.3086 C 51.6133 47.3242 50.8165 46.5273 49.8085 46.5273 L 6.1679 46.5273 C 5.1601 46.5273 4.3867 47.3242 4.3867 48.3086 C 4.3867 49.2930 5.1601 50.0664 6.1679 50.0664 Z"/></svg>
}

export default TextBadgeXmark
