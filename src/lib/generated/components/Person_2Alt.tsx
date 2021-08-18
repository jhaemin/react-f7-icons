import React from 'react'
import type { IconProps } from '../../types'

const Person_2Alt: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path fillRule="evenodd" d="M53.5094958,45 L2.00003353,45 C1.42440859,45 0.876692613,44.7519854 0.496957045,44.3193829 C-0.231722074,43.4892566 -0.149482947,42.2255952 0.680648155,41.4969217 C4.27391232,38.342779 6.12213708,36.7485101 6.22532243,36.7141149 C6.41920948,36.6578252 6.61101172,36.5994506 6.79655954,36.5431608 C12.2545842,34.8690608 13.5596733,33.4201199 14.0516878,31.821073 C14.956494,31.4166204 15.2942327,31.1393411 15.4735261,30.1782451 C15.5861057,29.5673967 15.6736676,27.5180314 15.5881905,26.8071122 C15.0711584,26.3025889 14.7897095,25.0037542 14.5395326,24.4846373 C13.9599563,23.2837884 13.8578007,22.662516 13.3011573,20.642338 C13.2156802,20.3713131 13.0322172,20.3546347 12.9029592,20.3025145 C12.7090721,20.221207 12.5402027,20.091949 12.3609093,19.8480266 C11.8543012,19.1621251 12.1711919,18.774351 11.6958559,17.4713466 C11.0912619,15.9890489 10.8473395,14.5255144 11.3080818,14.0877049 C11.6187181,13.8104256 11.8271988,13.989719 11.9793897,14.0460088 C12.0794604,14.0835353 12.0023225,13.8312737 11.9126758,13.4664324 C11.5478346,11.9737106 11.5269866,8.99660629 11.5269866,8.99660629 L11.5832763,8.99452148 C11.3956437,7.74989172 11.4394247,6.60324789 12.2650082,4.86451888 C13.0780829,3.08826334 13.8056806,3.48020705 14.2143027,3.02363432 C15.9384381,1.08267903 17.5228914,1.03264367 18.7133162,0.519781152 C21.3881235,-0.635201909 23.6438847,0.388438313 25.4472427,1.14313844 C26.2061124,1.47045313 28.4180926,1.72271477 29.1561143,3.35511863 C29.5876693,4.30579061 29.9650194,5.92985524 30.1109559,6.07579172 C30.2652316,6.77628687 30.3486239,7.90625224 30.2694012,9.14462758 C30.1714153,10.6748759 30.1693305,11.9403537 29.8065741,13.4330755 C29.7148426,13.7958319 29.6356199,14.0501784 29.7377754,14.010567 C29.8899663,13.9542773 30.0796838,13.7478814 30.39032,14.0251607 C30.8489775,14.4629702 30.7551612,15.9890489 30.1505672,17.4713466 C29.677316,18.774351 29.9379169,19.0141038 29.6356199,19.5478144 C29.5063619,19.7813127 29.4167152,20.0961186 29.0247714,20.2378855 C28.8955134,20.285836 28.7370681,20.4005004 28.6766087,20.6798645 C28.2554777,22.6437527 28.1491525,23.0023395 27.7071734,24.476298 C27.5424737,25.0266871 27.1651236,26.2129422 26.6668548,26.679939 C26.5626144,27.5242858 26.8086216,29.6904003 26.9503885,30.1782451 C27.279788,31.3207193 27.5945939,31.5437937 28.2367144,31.821073 C28.9953504,33.4064021 29.5867843,35.4549004 34.9949886,36.4682393 C35.3248076,36.0960307 35.5050966,35.7217139 35.6218384,35.3354535 C36.2735965,35.038855 36.5168795,34.8355168 36.6460298,34.1307131 C36.7271241,33.6827575 36.7901975,32.1798897 36.7286258,31.658549 C36.3561926,31.2885652 36.1534568,30.3360864 35.9732471,29.9554007 C35.5557615,29.0747782 35.4821759,28.6191784 35.0812095,27.1377145 C35.0196378,26.9389629 34.8874841,26.9267321 34.7943758,26.8885106 C34.6547133,26.8288851 34.5330718,26.7340959 34.4039216,26.5552195 C34.0389971,26.0522251 34.2672626,25.7678574 33.9248643,24.8123209 C33.4893577,23.7253025 33.3136533,22.6520439 33.6455394,22.3309836 C33.8692997,22.1276454 34.0194744,22.2591273 34.1291019,22.3004064 C34.2011857,22.3279259 34.1456211,22.142934 34.081046,21.8753838 C33.8182403,20.7807211 33.8032228,18.5975113 33.8032228,18.5975113 L33.84377,18.5959824 C33.7086128,17.6832539 33.7401494,16.8423818 34.3348412,15.5673138 C34.9205225,14.2647264 35.4446322,14.5521518 35.7389746,14.2173318 C36.9809193,12.7939646 38.122247,12.757272 38.9797445,12.3811728 C40.9064858,11.5341853 42.531376,12.2848548 43.8303871,12.8383015 C44.377023,13.0783323 45.9703765,13.2633242 46.5019949,14.4604203 C46.8128565,15.1575798 47.0846727,16.3485605 47.189795,16.4555806 C47.3009243,16.969277 47.3609942,17.7979183 47.3039278,18.7060602 C47.2333457,19.8282423 47.2318439,20.7562594 46.97054,21.850922 C46.9044631,22.1169434 46.8473967,22.3034641 46.9209823,22.2744158 C47.0306099,22.2331367 47.1672688,22.0817797 47.3910291,22.2851178 C47.7214134,22.6061781 47.6538348,23.7253025 47.2183282,24.8123209 C46.8774317,25.7678574 47.06515,25.9436761 46.8473967,26.3350639 C46.7542884,26.506296 46.6897133,26.7371536 46.4073849,26.841116 C46.3142766,26.8762798 46.2001438,26.960367 46.1565931,27.165234 C45.8532402,28.6054187 45.7766512,28.8683823 45.4582808,29.9492852 C45.3396428,30.3529039 45.0678266,31.2228243 44.7089091,31.5652886 C44.6338217,32.1844763 44.8110279,33.7729602 44.9131467,34.1307131 C45.1504227,34.9685275 45.3771865,35.1321154 45.8397245,35.3354535 C46.4088866,36.5463094 46.8473967,38.1256202 51.2114733,38.8319528 C51.4097039,38.8640588 51.6154433,38.894636 51.8301931,38.9236843 L54.8118877,41.4821808 C55.2546944,41.8621389 55.5094958,42.4165226 55.5094958,43 C55.5094958,44.1045695 54.6140653,45 53.5094958,45 Z" transform="translate(0 6)"/>
</svg>

}

export default Person_2Alt