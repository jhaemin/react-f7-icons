import React from 'react'
import type { IconProps } from '../../types'

const Gear: React.FC<IconProps> = ({ fill }) => {
  return <svg style={{ fill }} xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><path d="M 28.0000 50.8281 C 28.6094 50.8281 29.1719 50.7578 29.8047 50.7110 L 31.1641 53.2891 C 31.4219 53.8047 31.9375 54.0859 32.5704 53.9922 C 33.1563 53.8750 33.5782 53.4532 33.6485 52.8203 L 34.0704 49.9844 C 35.2188 49.6797 36.3672 49.2344 37.4922 48.7422 L 39.6016 50.6406 C 40.0469 51.0625 40.6094 51.1563 41.1953 50.8281 C 41.7110 50.5469 41.9219 49.9844 41.8047 49.3750 L 41.2188 46.5625 C 42.1797 45.8828 43.1407 45.1094 44.0078 44.2422 L 46.6328 45.3438 C 47.2189 45.5781 47.7579 45.4610 48.2034 44.9219 C 48.6018 44.5000 48.6483 43.8906 48.3205 43.3750 L 46.7970 40.9375 C 47.5002 39.9532 48.0627 38.8984 48.6018 37.7735 L 51.4611 37.9141 C 52.0703 37.9375 52.5858 37.6094 52.7970 37.0235 C 52.9842 36.4375 52.7970 35.8750 52.3045 35.5 L 50.0783 33.7188 C 50.3831 32.5937 50.6173 31.3750 50.7109 30.1094 L 53.4296 29.2657 C 54.0157 29.0547 54.3906 28.6094 54.3906 27.9766 C 54.3906 27.3672 54.0157 26.9219 53.4296 26.7110 L 50.7109 25.8437 C 50.6173 24.5781 50.3831 23.4063 50.0783 22.2578 L 52.3045 20.4532 C 52.7970 20.1016 52.9842 19.5625 52.7970 18.9766 C 52.5858 18.3906 52.0703 18.0625 51.4611 18.0859 L 48.6018 18.2032 C 48.0627 17.0781 47.5002 16.0235 46.7970 15.0391 L 48.3205 12.6016 C 48.6483 12.1094 48.6018 11.5000 48.2034 11.0781 C 47.7579 10.5391 47.2189 10.3984 46.6328 10.6563 L 44.0078 11.7110 C 43.1407 10.8906 42.1797 10.0937 41.2188 9.4141 L 41.8047 6.6250 C 41.9219 5.9922 41.7110 5.4297 41.1953 5.1484 C 40.6094 4.8437 40.0469 4.8906 39.6016 5.3594 L 37.4922 7.2110 C 36.3672 6.7188 35.2188 6.3203 34.0704 5.9922 L 33.6485 3.1563 C 33.5782 2.5469 33.1563 2.1016 32.5704 2.0078 C 31.9375 1.9141 31.4219 2.1719 31.1641 2.6875 L 29.8047 5.2657 C 29.1719 5.2188 28.6094 5.1719 28.0000 5.1719 C 27.3672 5.1719 26.8047 5.2188 26.1485 5.2657 L 24.8126 2.6875 C 24.5547 2.1719 24.0391 1.9141 23.3829 2.0078 C 22.7969 2.1016 22.3985 2.5469 22.3047 3.1563 L 21.9063 5.9688 C 20.7344 6.3203 19.5860 6.7188 18.4844 7.2110 L 16.3751 5.3594 C 15.9063 4.8906 15.3438 4.8437 14.7813 5.1484 C 14.2657 5.4297 14.0547 5.9922 14.1719 6.6250 L 14.7578 9.4141 C 13.7735 10.0937 12.8126 10.8906 11.9453 11.7110 L 9.3438 10.6563 C 8.7578 10.3984 8.1953 10.5391 7.7500 11.0781 C 7.3751 11.5000 7.3282 12.1094 7.6329 12.5781 L 9.1797 15.0391 C 8.4766 16.0235 7.9141 17.0781 7.3751 18.2032 L 4.4922 18.0859 C 3.8829 18.0625 3.3672 18.3906 3.1797 18.9766 C 2.9922 19.5625 3.1563 20.1016 3.6485 20.4532 L 5.8985 22.2578 C 5.5938 23.4063 5.3360 24.5781 5.2657 25.8437 L 2.5469 26.7110 C 1.9375 26.8984 1.6094 27.3437 1.6094 27.9766 C 1.6094 28.6094 1.9375 29.0547 2.5469 29.2657 L 5.2657 30.1328 C 5.3360 31.3750 5.5938 32.5937 5.8985 33.7188 L 3.6485 35.5 C 3.1563 35.8750 2.9922 36.4375 3.1797 37.0235 C 3.3672 37.6094 3.8829 37.9375 4.4922 37.9141 L 7.3751 37.7735 C 7.9141 38.8984 8.4766 39.9532 9.1563 40.9375 L 7.6563 43.3750 C 7.3047 43.8906 7.3516 44.5000 7.7500 44.9219 C 8.1953 45.4610 8.7578 45.5781 9.3438 45.3438 L 11.9453 44.2422 C 12.8126 45.1094 13.7735 45.8828 14.7578 46.5625 L 14.1719 49.3750 C 14.0547 49.9844 14.2657 50.5469 14.7813 50.8281 C 15.3672 51.1563 15.9297 51.0625 16.3751 50.6406 L 18.4610 48.7422 C 19.5860 49.2344 20.7344 49.6797 21.9063 49.9844 L 22.3047 52.8203 C 22.3985 53.4532 22.7969 53.8750 23.3829 53.9922 C 24.0391 54.0859 24.5547 53.8047 24.8126 53.2891 L 26.1485 50.7110 C 26.7813 50.7578 27.3672 50.8281 28.0000 50.8281 Z M 33.8829 26.5000 C 32.7813 23.5469 30.6251 21.9297 27.9297 21.9297 C 27.5313 21.9297 27.0626 21.9766 26.3126 22.1406 L 19.5860 10.6563 C 22.0938 9.4141 24.9531 8.7344 28.0000 8.7344 C 38.2188 8.7344 46.2344 16.4922 46.9611 26.5000 Z M 8.9688 28.0000 C 8.9688 21.4844 12.0391 15.7422 16.8907 12.2735 L 23.6641 23.8281 C 22.3985 25.1406 21.8126 26.5703 21.8126 28.0937 C 21.8126 29.5703 22.3751 30.9297 23.6641 32.2891 L 16.7266 43.6328 C 11.9922 40.1406 8.9688 34.4688 8.9688 28.0000 Z M 25.1172 28.0703 C 25.1172 26.4766 26.4766 25.2344 27.9766 25.2344 C 29.5704 25.2344 30.8829 26.4766 30.8829 28.0703 C 30.8829 29.6406 29.5704 30.9297 27.9766 30.9297 C 26.4766 30.9297 25.1172 29.6406 25.1172 28.0703 Z M 28.0000 47.2656 C 24.8829 47.2656 21.9766 46.5391 19.4219 45.2735 L 26.3126 34 C 27.0391 34.1875 27.5313 34.2344 27.9297 34.2344 C 30.6485 34.2344 32.8047 32.5703 33.8829 29.5469 L 46.9611 29.5469 C 46.2109 39.5078 38.1953 47.2656 28.0000 47.2656 Z"/></svg>
}

export default Gear
