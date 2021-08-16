import React from 'react'
import type { IconProps } from '../../types'

const ChartPie: React.FC<IconProps> = ({ fill }) => {
  return <svg style={{ fill }} xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 17.3828 16.2343 8.7812 26.6640 8.1250 L 26.6640 28.3281 C 26.6640 28.8437 26.8046 29.2656 27.2265 29.6875 L 40.9843 43.1406 C 37.5155 46.1406 32.9687 47.9219 27.9999 47.9219 Z M 29.8046 25.9609 L 29.8046 8.1719 C 36.1562 8.7344 41.6171 12.25 44.8280 17.3594 Z M 31.1405 28.8437 L 46.3046 20.1250 C 47.3358 22.5390 47.9219 25.2109 47.9219 28 C 47.9219 32.9219 46.1874 37.3750 43.2812 40.8437 Z"/></svg>
}

export default ChartPie