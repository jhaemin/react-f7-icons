import React from 'react'
import type { IconProps } from '../../types'

const RectangleFill: React.FC<IconProps> = ({ fill }) => {
  return <svg style={{ fill }} xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56"><path d="M 7.7148 49.5742 L 48.2852 49.5742 C 53.1836 49.5742 55.6446 47.1367 55.6446 42.3086 L 55.6446 13.6914 C 55.6446 8.8633 53.1836 6.4258 48.2852 6.4258 L 7.7148 6.4258 C 2.8398 6.4258 .3554 8.8398 .3554 13.6914 L .3554 42.3086 C .3554 47.1602 2.8398 49.5742 7.7148 49.5742 Z"/></svg>
}

export default RectangleFill
