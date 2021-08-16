import React from 'react'
import type { IconProps } from '../../types'

const PersonCropCircleBadgeXmark: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 33.7169 50.6051 C 45.9141 50.6051 56.0000 40.4968 56.0000 28.2994 C 56.0000 16.1245 45.8920 5.9937 33.6944 5.9937 C 22.4180 5.9937 12.9611 14.6419 11.5909 25.5365 C 12.1749 25.5365 12.7365 25.5814 13.2981 25.6712 C 13.9944 25.7611 14.6908 25.9183 15.3646 26.1205 C 16.4204 16.9332 24.1926 9.8124 33.6944 9.8124 C 43.9598 9.8124 52.1812 18.0563 52.2037 28.2994 C 52.2037 33.0840 50.4294 37.3969 47.5090 40.6765 C 44.1171 37.8461 39.0406 35.9593 33.6944 35.9593 C 31.1785 35.9593 28.3258 36.4984 25.6751 37.4418 C 25.8324 38.2954 25.9222 39.1715 25.9222 40.0475 C 25.9222 42.9902 25.0012 45.7531 23.4513 48.0668 C 26.5287 49.6616 30.0329 50.6051 33.7169 50.6051 Z M 33.6944 32.0956 C 38.0073 32.0956 41.2644 28.3668 41.2644 23.6720 C 41.2644 19.2469 37.9399 15.4057 33.6944 15.4057 C 29.4714 15.4057 26.1244 19.2469 26.1244 23.6720 C 26.1244 28.3668 29.4040 32.0956 33.6944 32.0956 Z M 11.4112 51.4587 C 17.6783 51.4587 22.8224 46.3372 22.8224 40.0475 C 22.8224 33.8028 17.6783 28.6363 11.4112 28.6363 C 5.1665 28.6363 0 33.8028 0 40.0475 C 0 46.3372 5.1665 51.4587 11.4112 51.4587 Z M 8.0866 45.3488 C 7.5251 45.9328 6.6940 45.8205 6.1548 45.3039 C 5.6382 44.7872 5.5483 43.9336 6.1099 43.3720 L 9.5018 39.9801 L 6.3795 36.8353 C 5.8853 36.3187 5.8853 35.4651 6.3795 34.9934 C 6.8737 34.5217 7.6823 34.4992 8.1990 34.9934 L 11.3662 38.1157 L 14.7357 34.7238 C 15.2973 34.1622 16.1508 34.2746 16.6675 34.7912 C 17.1841 35.3303 17.2965 36.1614 16.7349 36.7230 L 13.3430 40.1149 L 16.4653 43.2597 C 16.9595 43.7764 16.9595 44.6075 16.4653 45.0792 C 15.9711 45.5509 15.1400 45.5734 14.6234 45.0792 L 11.5010 41.9793 Z"/></svg>
}

export default PersonCropCircleBadgeXmark
