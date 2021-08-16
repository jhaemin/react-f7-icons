import React from 'react'
import type { IconProps } from '../../types'

const Status: React.FC<IconProps> = ({ fill }) => {
  return <svg style={{ fill }} xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
  <path d="M46.9225512,17.001639 L46.969047,17.1334936 L47.1403776,17.6994973 L47.2833573,18.2069233 L47.3442156,18.4386697 L47.3442156,18.4386697 L47.444669,18.8582292 L47.444669,18.8582292 C48.7202388,24.6281569 47.8435644,30.7385714 44.790946,36.0258616 C41.7335087,41.3214984 36.8693579,45.1402073 31.221473,46.9168819 L30.8173475,47.0351039 L30.8173475,47.0351039 L30.3211755,47.1644709 L29.6042676,47.3344227 C28.5859737,47.565822 27.5728938,46.9279233 27.3414891,45.9096307 C27.3314595,45.8654959 27.3230179,45.8210151 27.3161805,45.7762745 C27.1491634,44.6833917 27.8473718,43.6448108 28.9224583,43.3869799 L29.4992507,43.2422616 C29.8587646,43.1475319 30.1682497,43.0563006 30.4277059,42.9685675 C34.9613381,41.4355563 38.8519661,38.3124765 41.3268444,34.0258616 C43.8042018,29.7349528 44.5622828,24.7987166 43.619402,20.1029821 L43.5503722,19.7902635 L43.4583281,19.4250566 L43.3432698,19.0073614 L43.2051973,18.5371779 C42.884855,17.4740935 43.4328162,16.3429246 44.4655835,15.9352981 C45.4385183,15.5512871 46.5385402,16.0287042 46.9225512,17.001639 Z M3.38523887,15.9196449 C3.42847553,15.9330265 3.47121778,15.9479562 3.51338302,15.9644051 C4.54335583,16.3662055 5.09368907,17.4901622 4.77943392,18.5501297 C4.59987883,19.1558124 4.46978947,19.6600753 4.38916587,20.0629186 C3.44997649,24.7556649 4.20932885,29.6865875 6.68420711,33.9732024 C9.16156449,38.2641113 13.0574299,41.3887468 17.5954957,42.9200553 L17.9008328,43.016633 L18.0748627,43.0672894 L18.0748627,43.0672894 L18.4656448,43.1733369 L19.1586243,43.3442456 C20.2394535,43.5983633 20.9450939,44.6384961 20.7817251,45.736712 C20.627821,46.7713037 19.6643547,47.4852421 18.629763,47.331338 L18.4923257,47.3056772 L17.9164868,47.171052 L17.4055531,47.0411631 L16.9595246,46.9160104 L16.7608498,46.8552102 L16.7608498,46.8552102 C11.1261609,45.0749222 6.27272391,41.2604926 3.2201055,35.9732024 C0.162668166,30.6775656 -0.71235534,24.555733 0.572941761,18.7761839 L0.649775665,18.4557318 L0.649775665,18.4557318 L0.749887267,18.0806958 L0.943700353,17.4157973 L1.01994356,17.1668726 L1.01994356,17.1668726 C1.32869278,16.1693045 2.38766919,15.6109009 3.38523887,15.9196449 Z M24.05113,8 C32.887686,8 40.05113,15.163444 40.05113,24 C40.05113,32.836556 32.887686,40 24.05113,40 C15.214574,40 8.05112996,32.836556 8.05112996,24 C8.05112996,15.163444 15.214574,8 24.05113,8 Z M24.05113,12 C17.423713,12 12.05113,17.372583 12.05113,24 C12.05113,30.627417 17.423713,36 24.05113,36 C30.678547,36 36.05113,30.627417 36.05113,24 C36.05113,17.372583 30.678547,12 24.05113,12 Z M24.05113,0 C30.1660046,0 35.9051789,2.30312372 40.2677667,6.30599821 L40.5068695,6.5327644 L40.7816043,6.80698156 L41.0919713,7.12864969 L41.4379703,7.4977688 C42.147515,8.26393748 42.1016185,9.46023976 41.3354535,10.1697885 C41.3022464,10.2005417 41.2679458,10.2300927 41.2326179,10.2583844 C40.3696622,10.9494669 39.1211206,10.8640911 38.3602893,10.0619544 C38.1429098,9.83278407 37.9413051,9.62700088 37.7554752,9.4446048 L37.4048483,9.11099545 L37.2453097,8.96757788 L37.2453097,8.96757788 C33.6508669,5.80784288 29.0008865,4 24.05113,4 C19.0964152,4 14.4424688,5.81160069 10.8472838,8.97602665 L10.7333738,9.0783252 L10.4800919,9.31755361 L10.1928609,9.60295709 L9.6983599,10.1176406 L9.6983599,10.1176406 C8.93787296,10.9266073 7.68427135,11.0176434 6.81487282,10.3270539 C5.99584215,9.67647319 5.85928651,8.48511774 6.50986726,7.66608708 L6.60080881,7.55989327 L7.00531709,7.12851472 L7.37327106,6.75097761 C7.54810946,6.57566942 7.70924,6.42055177 7.85666267,6.28562466 C12.2157817,2.29598497 17.9458931,0 24.05113,0 Z" transform="translate(4 4)"/>
</svg>

}

export default Status
