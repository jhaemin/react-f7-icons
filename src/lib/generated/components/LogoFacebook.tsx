import React from 'react'
import type { IconProps } from '../../types'

const LogoFacebook: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path fillRule="evenodd" d="M0,4.00718972 C0,1.79407995 1.79426827,0 4.00718972,0 L45.9928103,0 C48.2059201,0 50,1.79426827 50,4.00718972 L50,45.9928103 C50,48.2059201 48.2057317,50 45.9928103,50 L4.00718972,50 C1.79407995,50 0,48.2057317 0,45.9928103 L0,4.00718972 Z M34.2798358,48 L34.2798358,28.8419394 L40.7660301,28.8419394 L41.737127,21.3755693 L34.2798358,21.3755693 L34.2798358,16.608622 C34.2798358,14.4469336 34.8852289,12.973864 38.0120338,12.973864 L42,12.9720104 L42,6.29416905 C41.3099117,6.20334181 38.9429331,6 36.1889368,6 C30.4391981,6 26.5028342,9.47942485 26.5028342,15.8693994 L26.5028342,21.3755693 L20,21.3755693 L20,28.8419394 L26.5028342,28.8419394 L26.5028342,48 L34.2798358,48 Z" transform="translate(3 3)"/>
</svg>

}

export default LogoFacebook