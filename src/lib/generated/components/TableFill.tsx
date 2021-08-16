import React from 'react'
import type { IconProps } from '../../types'

const TableFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 29.8398 18.6133 L 55.6446 18.6133 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 29.8398 6.4258 Z M 26.1601 18.6133 L 26.1601 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 18.6133 Z M 55.6446 22.2696 L 29.8398 22.2696 L 29.8398 33.7071 L 55.6446 33.7071 Z M 26.1601 33.7071 L 26.1601 22.2696 L .3554 22.2696 L .3554 33.7071 Z M 29.8398 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 37.3867 L 29.8398 37.3867 Z M 7.7148 49.5742 L 26.1601 49.5742 L 26.1601 37.3867 L .3554 37.3867 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z"/></svg>
}

export default TableFill
