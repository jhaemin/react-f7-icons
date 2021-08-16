import React from 'react'
import type { IconProps } from '../../types'

const Heart: React.FC<IconProps> = ({ fill }) => {
  return <svg style={{ fill }} xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><path d="M 4.7265 20.6406 C 4.7265 30.6250 13.0937 40.4453 26.2890 48.8828 C 26.8046 49.1875 27.5078 49.5156 28.0000 49.5156 C 28.4922 49.5156 29.1953 49.1875 29.6875 48.8828 C 42.9062 40.4453 51.2735 30.6250 51.2735 20.6406 C 51.2735 12.3438 45.5781 6.4844 37.9843 6.4844 C 33.6250 6.4844 30.1094 8.5469 28.0000 11.7109 C 25.8906 8.5703 22.3515 6.4844 18.0156 6.4844 C 10.4219 6.4844 4.7265 12.3438 4.7265 20.6406 Z M 8.5000 20.6406 C 8.5000 14.4063 12.5312 10.2578 17.9687 10.2578 C 22.3750 10.2578 24.8828 13.0000 26.4062 15.3438 C 27.0390 16.2813 27.4375 16.5391 28.0000 16.5391 C 28.5625 16.5391 28.9141 16.2578 29.5937 15.3438 C 31.1875 13.0469 33.6484 10.2578 38.0312 10.2578 C 43.4687 10.2578 47.5000 14.4063 47.5000 20.6406 C 47.5000 29.3594 38.2890 38.7578 28.4687 45.2734 C 28.2343 45.4375 28.0937 45.5547 28.0000 45.5547 C 27.9062 45.5547 27.7422 45.4375 27.5078 45.2734 C 17.7109 38.7578 8.5000 29.3594 8.5000 20.6406 Z"/></svg>
}

export default Heart
