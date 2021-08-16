import React from 'react'
import type { IconProps } from '../../types'

const AtCircleFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path fill-rule="evenodd" d="M24,0 C37.254834,0 48,10.745166 48,24 C48,37.254834 37.254834,48 24,48 C10.745166,48 0,37.254834 0,24 C0,10.745166 10.745166,0 24,0 Z M24.390904,11.1428571 C16.5820312,11.1428571 11.1428571,16.4866071 11.1428571,24.406808 C11.1428571,32.8359375 16.7887835,37.6707589 24.6453683,37.6707589 C26.5856585,37.6707589 28.3828125,37.4162946 29.734654,36.9709821 L29.734654,36.9709821 L29.734654,34.7762277 C28.7486049,35.1897321 26.7287946,35.4601004 24.7566964,35.4601004 C18.2996652,35.4601004 13.6238839,31.515904 13.6238839,24.5022321 C13.6238839,17.9497768 18.0452009,13.3376116 24.2159598,13.3376116 C30.4344308,13.3376116 34.6808036,17.1704799 34.6808036,22.9595424 C34.6808036,26.8083147 33.3925781,29.0030692 31.6272321,29.0030692 C30.4821429,29.0030692 29.9255022,28.2873884 29.9255022,27.2377232 L29.9255022,27.2377232 L29.9255022,18.2042411 L27.2377232,18.2042411 L27.2377232,20.1286272 L27.062779,20.1286272 C26.4584263,18.7608817 24.9475446,17.8861607 23.2458147,17.8861607 C20.0172991,17.8861607 17.7748326,20.5580357 17.7748326,24.4227121 C17.7748326,28.4623326 20.0013951,31.1660156 23.3094308,31.1660156 C25.1702009,31.1660156 26.6015625,30.2753906 27.2695312,28.6690848 L27.2695312,28.6690848 L27.4285714,28.6690848 C27.6830357,30.2435826 29.2257254,31.2773437 31.0864955,31.2773437 C34.8716518,31.2773437 37.1618304,27.953404 37.1618304,22.8800223 C37.1618304,15.8504464 31.8339844,11.1428571 24.390904,11.1428571 Z M23.8342634,20.3194754 C25.8381696,20.3194754 27.1104911,21.9416853 27.1104911,24.5022321 C27.1104911,27.062779 25.8222656,28.6849888 23.8183594,28.6849888 C21.8780692,28.6849888 20.7011719,27.0945871 20.7011719,24.5022321 C20.7011719,21.8780692 21.8780692,20.3194754 23.8342634,20.3194754 Z" transform="translate(4 4)"/>
</svg>

}

export default AtCircleFill
