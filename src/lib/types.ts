import React from 'react'
import type { F7IconName } from './generated/types'

export type IconProps = {
  /**
   * @default ```1em```
   */
  size?: string
  /**
   * @default Black
   */
  fill?: string
  style?: React.CSSProperties
  className?: string
}

export type F7IconProps = IconProps & {
  name: F7IconName
}
