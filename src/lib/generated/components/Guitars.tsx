import React from 'react'
import type { IconProps } from '../../types'

const Guitars: React.FC<IconProps> = ({ fill }) => {
  return <svg style={{ fill }} xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><path d="M 12.3498 15.9850 C 12.3498 14.6223 12.5840 13.7918 12.7118 12.8124 L 13.4996 7.0420 C 13.5635 6.4884 13.6061 6.1903 13.6061 5.9987 C 13.6061 5.6793 13.3932 5.4238 13.0099 5.4238 C 12.6905 5.4238 12.4137 5.7432 11.9666 6.2755 L 7.1756 12.2162 L 7.1756 12.5569 C 9.3475 13.5364 9.8798 13.9409 9.8798 15.9850 L 9.6031 29.4634 C 5.8981 35.9364 0 48.8185 0 52.0337 C 0 53.5242 1.0008 54.4185 2.1293 54.4185 C 3.1726 54.4185 3.7901 53.7798 4.6631 52.8429 C 5.4722 51.9699 7.7932 49.6915 8.9004 48.6056 C 9.3901 48.0946 10.1567 47.3067 10.9871 47.3067 C 11.8175 47.3067 12.5628 48.0946 13.0738 48.6056 C 14.1597 49.6915 16.5019 51.9699 17.3110 52.8429 C 18.1414 53.7798 18.7803 54.4185 19.8449 54.4185 C 20.9734 54.4185 21.9529 53.5242 21.9529 52.0337 C 21.9529 48.8611 16.1612 36.1919 12.5202 29.7402 Z M 40.0091 43.2824 C 40.9462 41.8558 41.9043 40.4292 41.9043 37.8953 C 41.9043 35.6596 41.3295 34.1904 41.3295 33.1257 C 41.3295 32.1037 42.6922 31.2094 45.9497 31.2094 C 49.2077 31.2094 50.5704 32.1037 50.5704 33.1257 C 50.5704 34.1904 49.9957 35.6596 49.9957 37.8953 C 49.9957 42.6436 53.4873 43.6018 53.4873 47.6900 C 53.4873 50.5219 50.3790 51.8847 45.9497 51.8847 C 43.7140 51.8847 41.8615 51.5866 40.3710 50.7775 C 40.0091 51.6292 39.5835 52.3318 39.0937 52.9706 C 41.0949 54.0565 43.4584 54.3759 45.9497 54.3759 C 51.1879 54.3759 56 52.7577 56 47.4771 C 56 42.1539 52.5293 41.5577 52.5293 38.0657 C 52.5293 35.8512 53.2318 34.1052 53.2318 32.5721 C 53.2318 30.6132 51.0174 29.1866 47.3980 28.9310 L 47.1633 15.8147 C 47.1424 14.5158 48.9949 13.9196 48.9308 13.1956 C 48.6539 9.7462 48.4197 8.0854 48.3133 7.2976 C 48.1855 6.4458 47.4403 6.0626 45.9497 6.0626 C 44.4592 6.0626 43.7140 6.4458 43.5862 7.2976 C 43.4798 8.0854 43.2456 9.7462 42.9687 13.1956 C 42.9264 13.9196 44.7575 14.5158 44.7361 15.8147 L 44.5020 28.9310 C 40.8607 29.2079 38.6677 30.6132 38.6677 32.5721 C 38.6677 34.1052 39.3916 35.8512 39.3916 38.0657 C 39.3916 39.1090 39.0510 39.9394 38.6040 40.6421 C 39.2001 41.4725 39.6685 42.3668 40.0091 43.2824 Z M 21.8038 44.7090 C 22.8685 42.7501 24.8700 40.8763 24.8700 37.7888 C 24.8700 34.4246 23.2091 32.9554 23.2091 32.4230 L 23.4433 32.3379 C 24.0183 33.0619 24.9126 34.2117 26.2753 34.2117 C 27.4038 34.2117 28.1917 33.6155 28.6388 32.4869 C 29.0860 33.6155 29.8525 34.2117 31.0023 34.2117 C 32.3650 34.2117 33.2593 33.0619 33.8343 32.3379 L 34.0472 32.4230 C 34.0472 32.9554 32.4076 34.4246 32.4076 37.7888 C 32.4076 42.1965 36.1552 43.6018 36.1552 47.4771 C 36.1552 50.2877 33.0677 51.8847 28.6388 51.8847 C 26.8076 51.8847 25.2532 51.6079 24.0396 51.1394 C 24.0609 51.9060 23.9544 53.1622 23.7415 53.7159 C 25.3171 54.2056 26.9567 54.3759 28.6388 54.3759 C 33.8768 54.3759 38.6891 52.5235 38.6891 47.4771 C 38.6891 42.3668 34.9415 41.1531 34.9415 37.5333 C 34.9415 34.5310 36.9643 32.6573 36.9643 31.0816 C 36.9643 30.0383 35.9848 29.0375 34.8563 29.0375 C 34.0046 29.0375 33.5362 29.6976 33.2167 30.1234 C 32.5993 30.9326 32.3438 31.6352 31.1088 31.6352 C 30.5339 31.6352 30.2784 31.4862 30.1293 31.2094 L 29.8951 15.8147 C 29.8951 14.2390 30.4061 13.9835 30.7042 13.8132 C 30.9384 13.6428 31.1301 13.4725 31.1301 13.0892 C 31.1301 9.5972 32.1095 8.7668 32.1095 7.8512 C 32.1095 7.5105 31.7902 7.4253 31.4069 7.1698 C 30.7894 6.7227 29.6396 6.0626 28.6601 6.0626 C 27.6806 6.0626 26.5308 6.7227 25.9133 7.1698 C 25.5513 7.4253 25.2107 7.5105 25.2107 7.8512 C 25.2107 8.7668 26.1902 9.5972 26.1902 13.0892 C 26.1902 13.4725 26.3818 13.6428 26.6373 13.8132 C 26.9141 13.9835 27.4464 14.2177 27.4464 15.8147 L 27.1696 31.1668 C 27.0419 31.4649 26.7864 31.6352 26.1688 31.6352 C 24.9339 31.6352 24.6784 30.9326 24.0609 30.1447 C 23.7415 29.6976 23.2517 29.0375 22.4213 29.0375 C 21.2928 29.0375 20.3133 30.0383 20.3133 31.0816 C 20.3133 32.6573 22.3361 34.5310 22.3361 37.5333 C 22.3361 39.2581 21.3992 40.5356 20.5688 41.7706 C 21.0160 42.7501 21.4418 43.7296 21.8038 44.7090 Z M 10.9871 44.7942 C 9.7308 44.7942 8.6662 45.6885 7.5163 46.7318 C 6.1962 47.9029 4.5992 49.5638 2.8319 51.6505 C 2.7468 51.7569 2.5551 51.7356 2.5764 51.5227 C 3.1087 48.0307 7.4737 38.4702 10.9871 32.1463 C 14.5004 38.4489 18.8654 48.0094 19.3977 51.5227 C 19.4190 51.6931 19.2061 51.7569 19.0996 51.6079 C 17.3749 49.5638 15.7567 47.9029 14.4365 46.7318 C 13.3080 45.6885 12.2433 44.7942 10.9871 44.7942 Z M 45.9497 39.9181 C 47.1847 39.9181 48.2069 38.8961 48.2069 37.6611 C 48.2069 36.4261 47.1847 35.4041 45.9497 35.4041 C 44.7148 35.4041 43.6926 36.4261 43.6926 37.6611 C 43.6926 38.8961 44.7148 39.9181 45.9497 39.9181 Z"/></svg>
}

export default Guitars
