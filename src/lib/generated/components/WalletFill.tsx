import React from 'react'
import type { IconProps } from '../../types'

const WalletFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56">
  <path d="M3.08099795,12.001 L44.051,12.001 L44.2249383,12.0056276 C47.4344251,12.1239174 50,14.7630922 50,18.0014892 L50,42.0014892 C50,45.3151977 47.3137085,48.0014892 44,48.0014892 L6,48.0014892 C2.6862915,48.0014892 0,45.3151977 0,42.0014892 L0,18.0014892 L0.00344810803,17.7961391 L0.0121563779,17.6164392 C-0.133796541,15.3087329 1.07378434,13.1173903 3.08099795,12.001 Z M34,26.0014892 C31.790861,26.0014892 30,27.7923502 30,30.0014892 C30,32.2106282 31.790861,34.0014892 34,34.0014892 C36.209139,34.0014892 38,32.2106282 38,30.0014892 C38,27.7923502 36.209139,26.0014892 34,26.0014892 Z M43.8470887,4.44857489 C43.9827999,4.95505588 44.0515338,5.47714146 44.0515338,6.00148916 L44.051,9.001 L11.424,9.001 L36.4986195,0.205934205 C39.6994161,-0.651716665 42.9894379,1.24777827 43.8470887,4.44857489 Z" transform="translate(3 4)"/>
</svg>

}

export default WalletFill
