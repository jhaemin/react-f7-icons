import React from 'react'
import type { IconProps } from '../../types'

const Exclamationmark: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 28.0117 37.3633 C 29.2539 37.3633 30.1211 36.5430 30.1445 35.2773 L 30.3555 7.9727 C 30.3555 6.6367 29.2539 5.7227 27.9883 5.7227 C 26.7461 5.7227 25.6445 6.6367 25.6445 7.9727 L 25.9024 35.2773 C 25.9258 36.5430 26.7929 37.3633 28.0117 37.3633 Z M 27.9883 50.2773 C 29.8633 50.2773 31.3398 48.7773 31.3398 46.9492 C 31.3398 45.0977 29.8633 43.6211 27.9883 43.6211 C 26.1602 43.6211 24.6602 45.0977 24.6602 46.9492 C 24.6602 48.7773 26.1602 50.2773 27.9883 50.2773 Z"/></svg>
}

export default Exclamationmark
