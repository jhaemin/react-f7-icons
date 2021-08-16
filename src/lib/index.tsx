import React from 'react'
import { F7IconProps } from './types'
import iconsMap from './generated/icons-map'

const F7Icon: React.FC<F7IconProps> = ({ name, fill }) => {
  const Icon = iconsMap[name]

  return <Icon fill={fill} />
}

export default F7Icon
