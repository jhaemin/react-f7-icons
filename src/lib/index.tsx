import React from 'react'
import { F7IconProps } from './types'
import iconsMap from './generated/icons-map'

const F7Icon: React.FC<F7IconProps> = (props) => {
  const { name, ...iconProps } = props
  const Icon = iconsMap[name]

  return <Icon {...iconProps} />
}

export default F7Icon
