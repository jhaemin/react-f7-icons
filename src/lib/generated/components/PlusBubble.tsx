import React from 'react'
import type { IconProps } from '../../types'

const PlusBubble: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 16.5860 52.2461 C 17.7579 52.2461 18.5548 51.6367 19.9610 50.3711 L 28.0704 43.1758 L 43.0938 43.1758 C 50.0783 43.1758 53.8280 39.3086 53.8280 32.4414 L 53.8280 14.4883 C 53.8280 7.6211 50.0783 3.7539 43.0938 3.7539 L 12.9064 3.7539 C 5.9454 3.7539 2.1720 7.5976 2.1720 14.4883 L 2.1720 32.4414 C 2.1720 39.3320 5.9454 43.1758 12.9064 43.1758 L 14.0313 43.1758 L 14.0313 49.2695 C 14.0313 51.0742 14.9688 52.2461 16.5860 52.2461 Z M 17.5469 47.9570 L 17.5469 41.1602 C 17.5469 39.8945 17.0782 39.4023 15.7891 39.4023 L 12.9298 39.4023 C 8.1720 39.4023 5.9454 36.9883 5.9454 32.4180 L 5.9454 14.4883 C 5.9454 9.9180 8.1720 7.5273 12.9298 7.5273 L 43.0938 7.5273 C 47.8280 7.5273 50.0548 9.9180 50.0548 14.4883 L 50.0548 32.4180 C 50.0548 36.9883 47.8280 39.4023 43.0938 39.4023 L 27.9064 39.4023 C 26.6173 39.4023 25.9376 39.5898 25.0469 40.5039 Z M 28.1407 34.9492 C 29.4064 34.9492 30.1564 34.0820 30.1564 32.6992 L 30.1564 25.9024 L 37.2579 25.9024 C 38.5704 25.9024 39.5079 25.2227 39.5079 23.9571 C 39.5079 22.6680 38.6407 21.9649 37.2579 21.9649 L 30.1564 21.9649 L 30.1564 14.7227 C 30.1564 13.3398 29.4064 12.4727 28.1407 12.4727 C 26.8751 12.4727 26.1954 13.3867 26.1954 14.7227 L 26.1954 21.9649 L 19.0938 21.9649 C 17.7344 21.9649 16.8438 22.6680 16.8438 23.9571 C 16.8438 25.2227 17.7813 25.9024 19.0938 25.9024 L 26.1954 25.9024 L 26.1954 32.6992 C 26.1954 34.0352 26.8751 34.9492 28.1407 34.9492 Z"/></svg>
}

export default PlusBubble
