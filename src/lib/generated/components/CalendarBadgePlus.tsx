import React from 'react'
import type { IconProps } from '../../types'

const CalendarBadgePlus: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 48.7597 4.7814 L 17.1631 4.7814 C 12.3288 4.7814 9.9000 7.1639 9.9000 11.9520 L 9.9000 25.1597 C 10.5245 25.0903 11.1491 25.0441 11.7505 25.0441 C 12.3750 25.0441 12.9995 25.0903 13.6241 25.1597 L 13.6241 18.5906 C 13.6241 16.4625 14.7806 15.3523 16.8162 15.3523 L 49.0605 15.3523 C 51.1193 15.3523 52.2756 16.4625 52.2756 18.5906 L 52.2756 40.4030 C 52.2756 42.5542 51.1193 43.6413 49.0605 43.6413 L 26.1610 43.6413 C 25.8603 44.9598 25.3514 46.2088 24.6806 47.3654 L 48.7597 47.3654 C 53.5940 47.3654 56 44.9598 56 40.1948 L 56 11.9520 C 56 7.1871 53.5940 4.7814 48.7597 4.7814 Z M 30.6715 23.6562 L 32.0363 23.6562 C 32.8458 23.6562 33.1003 23.4249 33.1003 22.6153 L 33.1003 21.2506 C 33.1003 20.4411 32.8458 20.1866 32.0363 20.1866 L 30.6715 20.1866 C 29.8619 20.1866 29.5844 20.4411 29.5844 21.2506 L 29.5844 22.6153 C 29.5844 23.4249 29.8619 23.6562 30.6715 23.6562 Z M 37.2407 23.6562 L 38.6054 23.6562 C 39.4150 23.6562 39.6694 23.4249 39.6694 22.6153 L 39.6694 21.2506 C 39.6694 20.4411 39.4150 20.1866 38.6054 20.1866 L 37.2407 20.1866 C 36.4311 20.1866 36.1535 20.4411 36.1535 21.2506 L 36.1535 22.6153 C 36.1535 23.4249 36.4311 23.6562 37.2407 23.6562 Z M 43.8099 23.6562 L 45.1746 23.6562 C 45.9841 23.6562 46.2385 23.4249 46.2385 22.6153 L 46.2385 21.2506 C 46.2385 20.4411 45.9841 20.1866 45.1746 20.1866 L 43.8099 20.1866 C 43.0003 20.1866 42.7227 20.4411 42.7227 21.2506 L 42.7227 22.6153 C 42.7227 23.4249 43.0003 23.6562 43.8099 23.6562 Z M 24.1024 31.2200 L 25.4671 31.2200 C 26.2767 31.2200 26.5311 30.9887 26.5311 30.1791 L 26.5311 28.8144 C 26.5311 28.0048 26.2767 27.7735 25.4671 27.7735 L 24.1024 27.7735 C 23.2928 27.7735 23.0152 28.0048 23.0152 28.8144 L 23.0152 30.1791 C 23.0152 30.9887 23.2928 31.2200 24.1024 31.2200 Z M 30.6715 31.2200 L 32.0363 31.2200 C 32.8458 31.2200 33.1003 30.9887 33.1003 30.1791 L 33.1003 28.8144 C 33.1003 28.0048 32.8458 27.7735 32.0363 27.7735 L 30.6715 27.7735 C 29.8619 27.7735 29.5844 28.0048 29.5844 28.8144 L 29.5844 30.1791 C 29.5844 30.9887 29.8619 31.2200 30.6715 31.2200 Z M 37.2407 31.2200 L 38.6054 31.2200 C 39.4150 31.2200 39.6694 30.9887 39.6694 30.1791 L 39.6694 28.8144 C 39.6694 28.0048 39.4150 27.7735 38.6054 27.7735 L 37.2407 27.7735 C 36.4311 27.7735 36.1535 28.0048 36.1535 28.8144 L 36.1535 30.1791 C 36.1535 30.9887 36.4311 31.2200 37.2407 31.2200 Z M 43.8099 31.2200 L 45.1746 31.2200 C 45.9841 31.2200 46.2385 30.9887 46.2385 30.1791 L 46.2385 28.8144 C 46.2385 28.0048 45.9841 27.7735 45.1746 27.7735 L 43.8099 27.7735 C 43.0003 27.7735 42.7227 28.0048 42.7227 28.8144 L 42.7227 30.1791 C 42.7227 30.9887 43.0003 31.2200 43.8099 31.2200 Z M 11.7505 51.7140 C 18.1346 51.7140 23.5010 46.3939 23.5010 39.9635 C 23.5010 33.5331 18.2040 28.2130 11.7505 28.2130 C 5.3201 28.2130 0 33.5331 0 39.9635 C 0 46.4401 5.3201 51.7140 11.7505 51.7140 Z M 11.7736 47.5967 C 10.9640 47.5967 10.2470 47.0415 10.2470 46.1857 L 10.2470 41.3745 L 5.8290 41.3745 C 5.0425 41.3745 4.3948 40.7268 4.3948 39.9635 C 4.3948 39.2002 5.0425 38.5525 5.8290 38.5525 L 10.2470 38.5525 L 10.2470 33.7644 C 10.2470 32.8854 10.9640 32.3303 11.7736 32.3303 C 12.5601 32.3303 13.2771 32.8854 13.2771 33.7644 L 13.2771 38.5525 L 17.6951 38.5525 C 18.4816 38.5525 19.1061 39.2002 19.1061 39.9635 C 19.1061 40.7268 18.4816 41.3745 17.6951 41.3745 L 13.2771 41.3745 L 13.2771 46.1857 C 13.2771 47.0415 12.5601 47.5967 11.7736 47.5967 Z M 30.6715 38.8070 L 32.0363 38.8070 C 32.8458 38.8070 33.1003 38.5525 33.1003 37.7429 L 33.1003 36.3782 C 33.1003 35.5686 32.8458 35.3373 32.0363 35.3373 L 30.6715 35.3373 C 29.8619 35.3373 29.5844 35.5686 29.5844 36.3782 L 29.5844 37.7429 C 29.5844 38.5525 29.8619 38.8070 30.6715 38.8070 Z M 37.2407 38.8070 L 38.6054 38.8070 C 39.4150 38.8070 39.6694 38.5525 39.6694 37.7429 L 39.6694 36.3782 C 39.6694 35.5686 39.4150 35.3373 38.6054 35.3373 L 37.2407 35.3373 C 36.4311 35.3373 36.1535 35.5686 36.1535 36.3782 L 36.1535 37.7429 C 36.1535 38.5525 36.4311 38.8070 37.2407 38.8070 Z"/></svg>
}

export default CalendarBadgePlus
