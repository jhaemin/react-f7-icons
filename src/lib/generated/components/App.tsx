import React from 'react'
import type { IconProps } from '../../types'

const App: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 46.8672 9.2617 C 44.4766 6.8711 41.1016 6.4961 37.1172 6.4961 L 18.8360 6.4961 C 14.8985 6.4961 11.5235 6.8711 9.1329 9.2617 C 6.7422 11.6523 6.3907 15.0039 6.3907 18.9180 L 6.3907 37.0118 C 6.3907 41.0195 6.7422 44.3477 9.1329 46.7383 C 11.5235 49.1289 14.8985 49.5039 18.9063 49.5039 L 37.1172 49.5039 C 41.1016 49.5039 44.4766 49.1289 46.8672 46.7383 C 49.2580 44.3477 49.6093 41.0195 49.6093 37.0118 L 49.6093 18.9883 C 49.6093 14.9805 49.2580 11.6289 46.8672 9.2617 Z M 45.8360 18.3320 L 45.8360 37.6445 C 45.8360 40.0820 45.5313 42.5664 44.1251 43.9961 C 42.6953 45.4024 40.1641 45.7305 37.7500 45.7305 L 18.2500 45.7305 C 15.8360 45.7305 13.3048 45.4024 11.8985 43.9961 C 10.4688 42.5664 10.1641 40.0820 10.1641 37.6445 L 10.1641 18.4023 C 10.1641 15.9414 10.4688 13.4102 11.8751 12.0039 C 13.3048 10.5742 15.8594 10.2696 18.3204 10.2696 L 37.7500 10.2696 C 40.1641 10.2696 42.6953 10.5977 44.1251 12.0039 C 45.5313 13.4336 45.8360 15.9180 45.8360 18.3320 Z"/></svg>
}

export default App
