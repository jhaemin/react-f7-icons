import React from 'react'
import type { IconProps } from '../../types'

const Drop: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path d="M18.621994,1.22076721 L19.4761582,2.41311987 C19.6164851,2.61040975 19.7557952,2.80698184 19.8940885,3.00283614 L20.7116456,4.16934854 C20.8458714,4.3623317 20.9790804,4.55459708 21.1112725,4.74614467 L21.8922226,5.88681681 L21.8922226,5.88681681 L22.648768,7.01026211 L22.648768,7.01026211 L23.3809087,8.11648056 L23.3809087,8.11648056 L24.0886448,9.20547218 C24.2045671,9.38553521 24.3194725,9.56488046 24.4333611,9.74350792 L25.1044901,10.8066593 L25.1044901,10.8066593 L25.7512144,11.8525838 L25.7512144,11.8525838 L26.373534,12.8812815 L26.373534,12.8812815 L26.9714489,13.8927523 C27.5571615,14.8956097 28.1062671,15.8726269 28.6187656,16.8238037 L29.1190618,17.7663672 C29.2004107,17.9220256 29.2807428,18.0769661 29.3600581,18.2311889 L29.8237472,19.1479121 C32.6079157,24.7479224 34,29.3652851 34,33 C34,42.3888407 26.3888407,50 17,50 C7.61115925,50 -3.63797881e-12,42.3888407 -3.63797881e-12,33 C-3.63797881e-12,29.3652854 1.39208401,24.7479233 4.17625204,19.1479136 L4.6399411,18.2311905 C4.71925633,18.0769677 4.79958842,17.9220272 4.88093738,17.7663689 L5.38123346,16.8238055 C5.89373188,15.8726287 6.44283734,14.8956117 7.02854982,13.8927544 L7.62646465,12.8812837 L7.62646465,12.8812837 L8.24878417,11.8525862 L8.24878417,11.8525862 L8.89550837,10.8066618 L8.89550837,10.8066618 L9.56663726,9.74351056 C9.6805258,9.56488312 9.7954312,9.3855379 9.91135346,9.20547489 L10.6190894,8.11648341 L10.6190894,8.11648341 L11.35123,7.0102651 L11.35123,7.0102651 L12.1077753,5.88681995 L12.1077753,5.88681995 L12.8887253,4.74614796 L12.8887253,4.74614796 L13.6940799,3.58824913 C13.8303394,3.39383043 13.9676158,3.19869393 14.105909,3.00283966 L14.9478707,1.81910057 C15.0902314,1.62037516 15.2336089,1.42093195 15.3780033,1.22077097 C15.5034407,1.0468884 15.656022,0.8943071 15.8299046,0.768869723 C16.7257064,0.122646022 17.9757651,0.324969086 18.621994,1.22076721 Z M17,5.84116737 L16.209333,6.97775114 L16.209333,6.97775114 L15.4436531,8.09601009 L15.4436531,8.09601009 L14.7029423,9.19586733 C14.5815703,9.37763913 14.4612379,9.55864098 14.3419448,9.73887129 L13.638654,10.8109818 L13.638654,10.8109818 L12.9602874,11.8644984 L12.9602874,11.8644984 L12.306827,12.8993442 C12.1999915,13.0702583 12.0941929,13.2403913 11.989431,13.4097415 L11.3732962,14.416437 C11.2726793,14.5826497 11.1730983,14.7480766 11.0745528,14.9127158 L10.495703,15.8910879 L10.495703,15.8910879 L9.94168751,16.8504816 C9.6708853,17.325421 9.40938919,17.7932147 9.15718905,18.2538195 L8.6651804,19.1654309 L8.6651804,19.1654309 L8.19794303,20.0577949 C8.04632379,20.3520331 7.89883009,20.6430506 7.75545895,20.9308345 L7.33771017,21.7844729 L7.33771017,21.7844729 L6.94467871,22.6186332 C6.69089285,23.1682302 6.4535732,23.7047906 6.23269578,24.2282118 L5.91370834,25.0034764 C4.63595099,28.1925787 4,30.8664294 4,33 C4,40.1797017 9.82029825,46 17,46 C24.1797017,46 30,40.1797017 30,33 C30,30.8664283 29.3640484,28.1925761 28.0862905,25.0034727 L27.7673029,24.2282079 C27.5464254,23.7047865 27.3091057,23.168226 27.0553198,22.6186289 L26.6622882,21.7844684 L26.6622882,21.7844684 L26.2445394,20.9308299 C26.1011682,20.643046 25.9536745,20.3520285 25.8020552,20.0577902 L25.3348178,19.1654262 L25.3348178,19.1654262 L24.8428091,18.2538148 C24.5906089,17.7932101 24.3291128,17.3254164 24.0583106,16.850477 L23.5042951,15.8910834 L23.5042951,15.8910834 L22.9254454,14.9127116 L22.9254454,14.9127116 L22.3217435,13.9154383 C22.1163655,13.5798722 21.9068424,13.2411686 21.6931714,12.8993405 L21.0397111,11.8644951 L21.0397111,11.8644951 L20.3613447,10.8109789 L20.3613447,10.8109789 L19.6580541,9.73886889 C19.538761,9.55863867 19.4184287,9.37763691 19.2970567,9.19586521 L18.5563462,8.09600859 L18.5563462,8.09600859 L17.7906667,6.97775035 C17.5312766,6.6019392 17.2677221,6.22307394 17,5.84116737 Z M27.4712184,32.0912733 C27.4751264,32.1556978 27.4740602,32.2203277 27.4680292,32.2845882 C27.148165,35.6925506 26.0562918,38.3284845 24.1923882,40.1923882 C22.4061472,41.9786291 19.9108714,43.0558352 16.7065608,43.4240065 L16.2845882,43.4680292 C15.5942974,43.5328141 14.9821876,43.0257414 14.9174027,42.3354506 C14.9113718,42.27119 14.9103056,42.2065601 14.9142136,42.1421356 C14.958432,41.4131818 15.5792638,40.8544988 16.3088282,40.8871299 C18.5626711,40.9879262 20.5810485,40.1468735 22.363961,38.363961 C24.065832,36.66209 24.9095209,34.7456734 24.8950275,32.6147113 L24.8871299,32.3088282 C24.8544988,31.5792638 25.4131818,30.958432 26.1421356,30.9142136 C26.8341878,30.8722336 27.4292384,31.3992212 27.4712184,32.0912733 Z" transform="translate(11 3)"/>
</svg>

}

export default Drop
