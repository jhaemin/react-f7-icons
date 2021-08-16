import React from 'react'
import type { IconProps } from '../../types'

const Dog: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path fill-rule="evenodd" d="M40.8820675,19.6657635 C42.3904003,19.0061392 43.5343765,17.8882704 44.6073402,16.7662376 C45.8303094,15.4873393 45.8457389,13.883544 45.8457389,13.0446032 C45.8457389,11.7105148 44.5928602,10.6589642 42.5563651,10.6099666 C41.477141,10.5840007 40.817834,10.853105 39.9187486,11.5076259 C39.2752845,11.9760582 37.765735,13.5070729 38.4389165,14.7606947 C38.4737196,14.8255062 38.5314127,14.9046811 38.6119959,14.9982195 C38.7766602,15.189345 38.779879,15.4712421 38.6196273,15.6660823 C38.4580725,15.8625071 38.1695056,15.8946186 37.9687216,15.7385145 C37.9283945,15.7071232 37.8932776,15.6800257 37.8633896,15.6571983 C36.5324607,14.6406841 35.8086083,14.2630638 35.8086083,12.7580069 C35.8086083,9.92625348 39.5463852,7.20520739 43.1554038,7.29203947 C46.7600442,7.37876621 49.566892,9.9818614 49.566892,13.0167491 C49.566892,14.6767116 48.5093957,17.0324463 46.7785261,18.8424725 C45.6875075,19.9833858 44.375634,20.8934847 42.8576696,21.5258129 C42.9524686,21.6807394 43.0492356,21.8481242 43.1485035,22.0291402 C44.1276469,23.8146174 43.9998789,24.0318938 44.1245118,26.2632884 C44.2491446,28.494683 43.5890197,32.485497 43.8422898,34.4505151 C44.0955598,36.4155332 45.3646045,36.6350081 45.6438449,38.0511687 C45.820775,38.9484652 46.259842,42.8420277 46.961046,49.7318562 C47.0170353,50.2820562 46.6164042,50.7734745 46.0662049,50.8294704 C46.0325171,50.8328989 45.9986771,50.8346165 45.9648154,50.8346165 L43.9075922,50.8346165 C43.3566659,50.8346165 42.9100519,50.3880025 42.9100519,49.8370762 L42.9100519,49.340273 C42.9100519,49.0250549 43.0584758,48.728236 43.310665,48.5391247 L43.6278449,48.3012687 C43.9330598,48.0723948 44.0817117,47.689979 44.011204,47.3150549 C43.4635953,44.4031495 42.9829286,42.650223 42.5692039,42.0562753 C42.2626103,41.6161263 40.8808208,40.8986663 39.0996702,39.5090173 C38.7799627,39.2595823 38.2061629,38.7290589 37.3782707,37.917447 L37.3782353,37.9174831 C37.1807924,37.7239229 36.8638217,37.7270704 36.6702614,37.9245133 C36.5935548,38.0027586 36.5446367,38.1040086 36.5310113,38.2127311 C36.3801923,39.4161817 36.1931415,40.4301453 35.9698591,41.254622 C35.700454,42.2494079 34.8709116,44.8418943 33.481232,49.032081 L33.4812087,49.0320733 C33.3453544,49.4417037 32.9623348,49.7182097 32.5307639,49.7182097 L29.9134303,49.7182097 C29.4193092,49.7182097 29.0187449,49.3176454 29.0187449,48.8235243 L29.0187449,48.7636893 C29.0187449,48.2801269 29.3643017,47.8656424 29.8399748,47.7786499 L30.9634203,47.5731909 C31.7687757,44.6285846 32.1204364,42.4723261 32.0184026,41.1044154 C31.9462045,40.1364951 31.2924866,39.0095124 30.6331098,37.049792 C30.4959737,36.6422126 30.3031433,35.8091482 30.0546186,34.5505989 L30.0546528,34.5505921 C30.0010788,34.2792893 29.7377142,34.1027852 29.4664114,34.1563591 C29.4568195,34.1582533 29.4472851,34.1604279 29.4378205,34.1628803 L22.7754421,35.8891733 C22.5077595,35.9585328 22.3469867,36.2317593 22.4163461,36.499442 C22.4262048,36.53749 22.4405093,36.5742449 22.4589642,36.6089474 L22.6163943,36.9049773 C22.9154969,37.4674069 23.0719178,38.0946779 23.0719178,38.7316939 L23.0719178,48.0919072 C23.0719178,48.4033936 22.9269695,48.6971423 22.6797599,48.8866448 L21.2828652,49.957457 C21.1080466,50.0914669 20.8939193,50.1640962 20.6736463,50.1640962 L19.6694932,50.1640962 C19.1164481,50.1640962 18.6681164,49.7157645 18.6681164,49.1627194 L18.6681164,48.6527571 C18.6681164,48.2898313 18.8644835,47.9553118 19.1813725,47.7784038 L19.9014945,47.376347 C20.2448727,47.1846511 20.4442515,46.8097067 20.4111884,46.4178359 C20.297215,45.067001 20.1565663,44.0393777 19.9892423,43.3349658 C19.8167088,42.6086231 19.3990685,41.3134648 18.7363213,39.4494909 L18.736263,39.4495116 C18.6436366,39.1890002 18.3573619,39.0529026 18.0968505,39.145529 C18.03829,39.1663505 17.9841186,39.1978945 17.9371062,39.2385481 L17.7419098,39.4073427 C17.2531377,39.8300044 16.6561551,40.1079454 16.0180778,40.2099181 L9.76598698,41.2090799 C9.49292938,41.2527178 9.30694804,41.5094504 9.35058603,41.782508 C9.36596621,41.8787469 9.40909948,41.9684049 9.4746956,42.0404856 L10.1399525,42.7715074 C10.3077369,42.9558782 10.4007194,43.1962025 10.4007194,43.4454899 L10.4007194,44.0989923 C10.4007194,44.6520374 9.95238775,45.1003691 9.39934262,45.1003691 C9.38927951,45.1003691 9.37921696,45.1002174 9.36915841,45.0999141 L8.54921505,45.0751875 C8.24753438,45.0660899 7.96604937,44.9214088 7.78306039,44.68139 L6.75047505,43.3269921 C6.6174731,43.1525392 6.54543713,42.9392382 6.54543713,42.7198679 L6.545433,40.7323143 C6.545433,40.3852529 6.7251385,40.0629378 7.02036919,39.8804811 C11.2914967,37.2408649 13.6074174,35.7809833 13.968131,35.5008364 C14.3419952,35.2104762 14.4979705,34.7254179 14.4360567,34.0456616 C13.7402961,31.9790796 12.6246302,31.2473957 12.1240623,30.0234937 C11.6234943,28.7995916 10.6934328,24.9937279 10.2334111,23.5312054 C9.30869089,20.5912916 8.49720883,19.0363203 8.27824404,18.5712761 C7.78640384,17.5266906 6.91854872,17.3791833 6.00148224,17.0186014 C5.08441577,16.6580196 3.34075757,16.7132183 2.20749065,15.7176356 C1.07422374,14.7220528 1.17804998,13.6820587 0.914354875,12.5495251 L0.914354875,11.1651751 C0.914354875,10.61213 1.36268653,10.1637983 1.91573166,10.1637983 L4.63244928,10.1638008 C4.99908986,10.1638008 5.33641681,9.96343059 5.51181158,9.64146478 C5.82194055,9.07217229 6.31726402,8.52830576 6.99778199,8.00986519 C7.8836603,7.33497449 8.89669545,6.84538586 10.0368874,6.54109929 C9.78739563,3.4273953 9.78739563,1.66844609 10.0368874,1.26425166 C10.2863792,0.860057232 10.9821042,1.49188266 12.1240623,3.15972794 C12.2869502,1.19596323 12.6052356,0.476129813 13.0789186,1.0002277 C13.5213703,1.48977029 14.2841553,3.2694124 15.3672738,6.33915402 C15.5090419,6.7409468 15.7140076,7.11754758 15.9744427,7.45475545 C16.4289221,8.04320901 16.8394827,8.74682825 17.2061247,9.56561319 C17.9027697,11.1213612 18.717426,15.1843843 20.1577396,17.1836542 C21.5980532,19.1829242 22.4390872,19.3472052 24.5194967,19.7171558 C25.9012919,19.9628747 30.6662579,19.1776561 34.5694506,19.0250098 C37.5745148,18.9074876 39.9929857,19.4131717 40.429664,19.5256982 C40.5863467,19.5660734 40.7364998,19.6113352 40.8820675,19.6657635 L40.8820675,19.6657635 Z" transform="translate(3 3)"/>
</svg>

}

export default Dog
