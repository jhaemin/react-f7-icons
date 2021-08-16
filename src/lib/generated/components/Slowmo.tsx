import React from 'react'
import type { IconProps } from '../../types'

const Slowmo: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 27.9882 1.5742 C 27.0507 1.5742 26.3241 2.3242 26.3241 3.2617 L 26.3241 11.5820 C 26.3241 12.5196 27.0507 13.2696 27.9882 13.2696 C 28.9491 13.2696 29.6757 12.5196 29.6757 11.5820 L 29.6757 3.2617 C 29.6757 2.3242 28.9491 1.5742 27.9882 1.5742 Z M 14.7929 5.0898 C 13.9491 5.5820 13.7148 6.5898 14.1601 7.4102 L 18.3319 14.6289 C 18.8241 15.4492 19.8085 15.7305 20.6288 15.2383 C 21.4491 14.7696 21.7070 13.7617 21.2382 12.9649 L 17.0898 5.7227 C 16.5976 4.9258 15.6132 4.6445 14.7929 5.0898 Z M 41.2304 5.1133 C 40.3866 4.6445 39.4022 4.9258 38.9101 5.7227 L 34.7382 12.9649 C 34.2929 13.7617 34.5273 14.7696 35.3710 15.2617 C 36.1913 15.7071 37.1757 15.4492 37.6679 14.6289 L 41.8163 7.4102 C 42.2851 6.5898 42.0507 5.5820 41.2304 5.1133 Z M 5.1132 14.7696 C 4.6444 15.6133 4.9257 16.5977 5.7226 17.0898 L 12.9413 21.2617 C 13.7617 21.7071 14.7695 21.4727 15.2382 20.6524 C 15.7070 19.8086 15.4491 18.8242 14.6288 18.3320 L 7.4101 14.1602 C 6.5898 13.7149 5.5819 13.9492 5.1132 14.7696 Z M 50.9099 14.7930 C 50.4179 13.9492 49.4099 13.7149 48.5895 14.1602 L 41.3710 18.3320 C 40.5507 18.8242 40.2695 19.8086 40.7617 20.6524 C 41.2304 21.4492 42.2148 21.7071 43.0351 21.2617 L 50.2537 17.0898 C 51.0740 16.5977 51.3553 15.6133 50.9099 14.7930 Z M 54.4259 27.9883 C 54.4259 27.0508 53.6756 26.3242 52.7382 26.3242 L 44.3944 26.3242 C 43.4570 26.3242 42.7304 27.0508 42.7304 27.9883 C 42.7304 28.9492 43.4570 29.6758 44.3944 29.6758 L 52.7382 29.6758 C 53.6756 29.6758 54.4259 28.9492 54.4259 27.9883 Z M 1.5741 27.9883 C 1.5741 28.9492 2.3007 29.6758 3.2382 29.6758 L 11.5819 29.6758 C 12.5195 29.6758 13.2695 28.9492 13.2695 27.9883 C 13.2695 27.0508 12.5195 26.3242 11.5819 26.3242 L 3.2382 26.3242 C 2.3007 26.3242 1.5741 27.0508 1.5741 27.9883 Z M 50.8868 41.2070 C 51.3553 40.3867 51.0740 39.4024 50.2537 38.9102 L 43.0351 34.7383 C 42.2148 34.2930 41.2304 34.5274 40.7382 35.3477 C 40.2929 36.1914 40.5507 37.1758 41.3710 37.6680 L 48.5895 41.8399 C 49.4099 42.2852 50.4179 42.0508 50.8868 41.2070 Z M 5.1132 41.2070 C 5.5819 42.0508 6.5898 42.2852 7.4101 41.8399 L 14.6288 37.6680 C 15.4491 37.1758 15.7304 36.1914 15.2382 35.3711 C 14.7695 34.5274 13.7617 34.2930 12.9413 34.7383 L 5.7226 38.9102 C 4.9257 39.4024 4.6444 40.3867 5.1132 41.2070 Z M 41.2070 50.8867 C 42.0507 50.4180 42.2851 49.4102 41.8163 48.5899 L 37.6679 41.3711 C 37.1757 40.5508 36.1913 40.2695 35.3710 40.7383 C 34.5273 41.2305 34.2929 42.2149 34.7382 43.0352 L 38.9101 50.2539 C 39.4022 51.0742 40.3866 51.3555 41.2070 50.8867 Z M 14.7929 50.8867 C 15.6132 51.3555 16.5976 51.0742 17.0898 50.2539 L 21.2382 43.0352 C 21.7070 42.2149 21.4726 41.2305 20.6522 40.7617 C 19.7851 40.2930 18.8241 40.5508 18.3319 41.3711 L 14.1601 48.5899 C 13.7148 49.4102 13.9491 50.4180 14.7929 50.8867 Z M 27.9882 54.4258 C 28.9491 54.4258 29.6757 53.6758 29.6757 52.7383 L 29.6757 44.4180 C 29.6757 43.4805 28.9491 42.7305 27.9882 42.7305 C 27.0507 42.7305 26.3241 43.4805 26.3241 44.4180 L 26.3241 52.7383 C 26.3241 53.6758 27.0507 54.4258 27.9882 54.4258 Z"/></svg>
}

export default Slowmo
