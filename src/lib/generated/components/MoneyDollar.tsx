import React from 'react'
import type { IconProps } from '../../types'

const MoneyDollar: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path fillRule="evenodd" d="M13,22 L13,32 C16.5185185,31.6836983 18,29.7128954 18,27.1094891 C18,24.6034063 16.8477366,23.1192214 13,22 Z M10,17 L10,8 C6.72727273,8.41538462 5,10.3307692 5,12.4307692 C5,14.5307692 6.36363636,16.0769231 10,17 Z M12.8398058,17.7367206 L13.9116505,18.0138568 C19.784466,19.4226328 23,21.9168591 23,26.8360277 C23,32.4942263 18.5339806,35.704388 12.8398058,36.1200924 L12.8398058,40 L10.3165049,40 L10.3165049,36.1200924 C4.64466019,35.6812933 0.15631068,32.3787529 0,26.8360277 L4.6223301,26.8360277 C5.02427184,29.5381062 6.72135922,31.5242494 10.3165049,31.9168591 L10.3165049,21.8475751 L9.40097087,21.6166282 C3.72912621,20.2540416 0.669902913,17.6212471 0.669902913,12.9330254 C0.669902913,7.75981524 4.68932039,4.34180139 10.3165049,3.90300231 L10.3165049,0 L12.8398058,0 L12.8398058,3.90300231 C18.4223301,4.36489607 22.4640777,7.82909931 22.6427184,13.0715935 L17.9980583,13.0715935 C17.707767,10.1616628 15.6980583,8.47575058 12.8398058,8.10623557 L12.8398058,17.7367206 Z" transform="translate(16 8)"/>
</svg>

}

export default MoneyDollar
