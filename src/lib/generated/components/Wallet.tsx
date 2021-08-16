import React from 'react'
import type { IconProps } from '../../types'

const Wallet: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56">
  <path d="M43.8470887,4.44857489 C43.9827999,4.95505588 44.0515338,5.47714146 44.0515338,6.00148916 L44.051,12.002 L44.2249383,12.0056276 C47.4344251,12.1239174 50,14.7630922 50,18.0014892 L50,42.0014892 C50,45.3151977 47.3137085,48.0014892 44,48.0014892 L6,48.0014892 C2.6862915,48.0014892 0,45.3151977 0,42.0014892 L0,18.0014892 L0.00344810803,17.7961391 L0.0121563779,17.6164392 C-0.164496391,14.8233281 1.64167605,12.2006812 4.44857489,11.4485749 L36.4986195,0.205934205 C39.6994161,-0.651716665 42.9894379,1.24777827 43.8470887,4.44857489 Z M44,16.0014892 L6,16.0014892 C4.9456382,16.0014892 4.08183488,16.817367 4.00548574,17.8522268 L4,18.0014892 L4,42.0014892 C4,43.055851 4.81587779,43.9196543 5.85073766,43.9960034 L6,44.0014892 L44,44.0014892 C45.0543618,44.0014892 45.9181651,43.1856114 45.9945143,42.1507515 L46,42.0014892 L46,18.0014892 C46,16.9471274 45.1841222,16.083324 44.1492623,16.0069749 L44,16.0014892 Z M34,26.0014892 C36.209139,26.0014892 38,27.7923502 38,30.0014892 C38,32.2106282 36.209139,34.0014892 34,34.0014892 C31.790861,34.0014892 30,32.2106282 30,30.0014892 C30,27.7923502 31.790861,26.0014892 34,26.0014892 Z M37.6794918,4.03630439 L37.6323333,4.047 L14.9572644,12.0009928 L40.0512644,12.0009928 L40.0515338,6.00148916 C40.0515338,5.88496745 40.041351,5.76878087 40.0211589,5.65424719 L39.9833854,5.48385107 C39.7104965,4.46541578 38.6988503,3.84221055 37.6794918,4.03630439 Z" transform="translate(3 3.999)"/>
</svg>

}

export default Wallet
