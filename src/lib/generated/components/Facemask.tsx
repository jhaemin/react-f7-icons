import React from 'react'
import type { IconProps } from '../../types'

const Facemask: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path d="M25.0081347,0 C28.584638,0 31.6050042,0.291679398 34.0692334,0.875038195 C36.533485,1.45839699 38.4062938,2.31435315 39.68766,3.44290666 C40.2842443,3.9684354 40.7419242,4.54893756 41.0606997,5.18441316 L44.6515581,5.18480982 C45.7855381,5.18480982 46.7505823,5.40834546 47.5466908,5.85541675 C48.3425759,6.3024657 48.9504321,6.9403462 49.3702592,7.76905825 C49.7900864,8.59774797 50,9.59000281 50,10.7458228 C50,12.501348 49.6019458,14.0524307 48.8058373,15.3990711 C48.0099522,16.7456891 46.8950654,17.7979144 45.4611769,18.5557472 C44.1297091,19.259449 42.5937532,19.6364321 40.8533093,19.6866965 L40.4480384,19.6924962 L40.293,19.692 L40.1973294,19.8229808 C39.3996049,20.8569876 38.3137996,21.7539514 36.9399134,22.5138722 C35.4515367,23.3371176 33.6959669,23.9722708 31.6732038,24.4193318 C29.6505077,24.8663932 27.428818,25.089924 25.0081347,25.089924 C22.5765761,25.089924 20.3494487,24.8663932 18.3267527,24.4193318 C16.3040789,23.9722708 14.5485537,23.3371176 13.060177,22.5138722 C11.6292649,21.7224093 10.5107725,20.7822909 9.70469976,19.6935169 L9.56819747,19.6924962 C7.64909598,19.6924962 5.97261217,19.3135799 4.53874604,18.5557472 C3.10487991,17.7979144 1.98995961,16.7456891 1.19398514,15.3990711 C0.397995048,14.0524307 0,12.501348 0,10.7458228 C0,9.59000281 0.209899074,8.59774797 0.629697221,7.76905825 C1.04950207,6.9403462 1.65740289,6.3024657 2.45339969,5.85541675 C3.1697767,5.45305259 4.02305501,5.23175231 5.01323461,5.19151589 L5.34836489,5.18480982 L8.93928548,5.18441316 C9.25807759,4.54893756 9.71578142,3.9684354 10.312397,3.44290666 C11.5936068,2.31435315 13.4690731,1.45839699 15.9387958,0.875038195 C18.4085408,0.291679398 21.4316538,0 25.0081347,0 Z M25.0081347,2.63328782 C21.9986661,2.63328782 19.4553285,2.8241082 17.3781219,3.20574897 C15.3009376,3.58738974 13.725324,4.14621768 12.651281,4.88223278 C11.6443657,5.57224694 11.1094419,6.40840419 11.0465097,7.39070453 L11.0402165,7.58911318 L11.0402165,15.7670675 C11.0402165,16.7157206 11.3836932,17.5989432 12.0706466,18.4167352 C12.7576,19.2345273 13.7280484,19.9460004 14.9819918,20.5511545 C16.2359351,21.1563287 17.7134142,21.6252008 19.4144288,21.9577709 C21.1154435,22.290341 22.9800121,22.4566261 25.0081347,22.4566261 C27.0253596,22.4566261 28.8845018,22.290341 30.5855611,21.9577709 C32.2865311,21.6252008 33.7639655,21.1563287 35.0178642,20.5511545 C36.2717629,19.9460004 37.2449581,19.2345273 37.9374496,18.4167352 C38.5722335,17.6670925 38.9160748,16.86247 38.9689734,16.0028676 L38.9761869,15.7670675 L38.9761869,7.58911318 C38.9761869,6.52054135 38.436441,5.61824789 37.3569492,4.88223278 C36.2774574,4.14621768 34.6990859,3.58738974 32.6218346,3.20574897 C30.544628,2.8241082 28.006728,2.63328782 25.0081347,2.63328782 Z M41.6093742,15.7670675 C41.6093742,16.1974221 41.5701439,16.616192 41.4916834,17.0233772 C42.495126,16.9368761 43.3927153,16.6783973 44.1852819,16.2495561 C45.1830414,15.7098102 45.9627364,14.9628974 46.5243669,14.0088178 C47.0857741,13.0547159 47.3664777,11.9670509 47.3664777,10.7458228 C47.3664777,9.84078255 47.1321114,9.1265739 46.6633788,8.60319679 C46.2335026,8.12341398 45.6341835,7.86353162 44.8654215,7.82354972 L44.6515581,7.81809764 L41.609,7.818 L41.6093742,15.7670675 Z M8.39,7.818 L5.34836489,7.81809764 C4.47606227,7.81809764 3.80547768,8.07979736 3.33661111,8.60319679 C2.86774455,9.1265739 2.63331126,9.84078255 2.63331126,10.7458228 C2.63331126,11.9670509 2.91408185,13.0547159 3.47562304,14.0088178 C4.03718655,14.9628974 4.81953896,15.7098102 5.82268027,16.2495561 C6.61823732,16.6776006 7.5132307,16.9359151 8.50766039,17.0244997 C8.44922862,16.7169804 8.41240495,16.4040241 8.39779239,16.0845084 L8.39058224,15.7670675 L8.39,7.818 Z M32.3029446,13.9188453 C32.6627007,13.9188453 32.9707601,14.0496952 33.2271226,14.3113949 C33.4832619,14.5730946 33.6113315,14.883856 33.6113315,15.2436792 C33.6113315,15.6035024 33.4832619,15.9115394 33.2271226,16.1677903 C33.0073833,16.3874339 32.7496627,16.5129445 32.4539607,16.5443222 L32.3029446,16.5521666 L17.7297718,16.5521666 C17.3699486,16.5521666 17.0619116,16.4240412 16.8056607,16.1677903 C16.5494322,15.9115394 16.4213179,15.6035024 16.4213179,15.2436792 C16.4213179,14.883856 16.5494322,14.5730946 16.8056607,14.3113949 C17.0253044,14.0870808 17.2829949,13.9589014 17.5787325,13.9268565 L17.7297718,13.9188453 L32.3029446,13.9188453 Z M32.3029446,7.81809764 C32.6627007,7.81809764 32.9707601,7.9489475 33.2271226,8.21064721 C33.4832619,8.47234693 33.6113315,8.77765955 33.6113315,9.12658506 C33.6113315,9.48640822 33.4832619,9.79716965 33.2271226,10.0588694 C33.0073833,10.2831834 32.7496627,10.4113629 32.4539607,10.4434077 L32.3029446,10.4514189 L17.7297718,10.4514189 C17.3699486,10.4514189 17.0619116,10.3205691 16.8056607,10.0588694 C16.5494322,9.79716965 16.4213179,9.48640822 16.4213179,9.12658506 C16.4213179,8.77765955 16.5494322,8.47234693 16.8056607,8.21064721 C17.0253044,7.98633317 17.2829949,7.85815372 17.5787325,7.82610885 L17.7297718,7.81809764 L32.3029446,7.81809764 Z" transform="translate(3 15)"/>
</svg>

}

export default Facemask
