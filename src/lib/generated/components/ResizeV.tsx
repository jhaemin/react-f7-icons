import React from 'react'
import type { IconProps } from '../../types'

const ResizeV: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg" width="auto" height={size ?? "1em"} viewBox="0 0 56 56">
  <path fill-rule="evenodd" d="M11.1994949,6.82842712 L11.1994949,43.1715729 L14.9568542,39.4142136 C15.7379028,38.633165 17.0042328,38.633165 17.7852814,39.4142136 C18.56633,40.1952621 18.56633,41.4615921 17.7852814,42.2426407 L10.7142136,49.3137085 C10.697338,49.330584 10.680236,49.3470949 10.6629172,49.3632412 C10.2978091,49.7550079 9.77726249,50 9.19949494,50 C8.70634232,50 8.25487776,49.8215122 7.90617766,49.5256131 C7.81882166,49.4628741 7.73538501,49.3922393 7.65685425,49.3137085 L0.585786438,42.2426407 C-0.195262146,41.4615921 -0.195262146,40.1952621 0.585786438,39.4142136 C1.36683502,38.633165 2.63316498,38.633165 3.41421356,39.4142136 L7.19949494,43.1994949 L7.19949494,6.80050506 L3.41421356,10.5857864 C2.63316498,11.366835 1.36683502,11.366835 0.585786438,10.5857864 C-0.195262146,9.80473785 -0.195262146,8.5384079 0.585786438,7.75735931 L7.65685425,0.686291501 C7.73538501,0.607760738 7.81882166,0.537125874 7.90617766,0.474386909 C8.25487776,0.178487773 8.70634232,0 9.19949494,0 C9.77726249,0 10.2978091,0.2449921 10.6629172,0.63675879 C10.680236,0.652905077 10.697338,0.669415981 10.7142136,0.686291501 L17.7852814,7.75735931 C18.56633,8.5384079 18.56633,9.80473785 17.7852814,10.5857864 C17.0042328,11.366835 15.7379028,11.366835 14.9568542,10.5857864 L11.1994949,6.82842712 Z" transform="translate(19 3)"/>
</svg>

}

export default ResizeV
