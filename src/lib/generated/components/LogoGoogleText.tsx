import React from 'react'
import type { IconProps } from '../../types'

const LogoGoogleText: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56">
  <path d="M39.0002518,5.17253107 C40.0836026,5.17253107 40.9489205,5.65629144 41.3986132,6.18774649 L41.4667484,6.18774649 L41.4667484,5.53364796 L43.3609087,5.53364796 L43.3609087,13.6281172 C43.3609087,16.9871857 41.3781726,18.3703314 39.0343195,18.3703314 C36.8267371,18.3703314 35.4980993,16.8849828 35.000712,15.6789886 L36.7381611,14.9567549 C37.0515834,15.6994293 37.8078848,16.5783741 39.0343195,16.5783741 C40.5401089,16.5783741 41.4667484,15.644921 41.4667484,13.9006582 L41.4667484,13.2465598 L41.3986132,13.2465598 C40.9489205,13.7916418 40.0904161,14.2822157 39.0002518,14.2822157 C36.7245341,14.2822157 34.639595,12.2994796 34.639595,9.74440721 C34.639595,7.1757078 36.7245341,5.17253107 39.0002518,5.17253107 Z M51.7960543,5.1793446 C53.9070307,5.1793446 55.056596,6.67849419 55.5454336,7.72235082 L55.6502226,7.96313411 L55.6502226,7.96313411 L55.8977972,8.59292127 L49.8065046,11.113926 C50.2698244,12.0269385 50.9920581,12.4902584 52.0140871,12.4902584 C53.0361161,12.4902584 53.7447228,11.9860575 54.2557373,11.229756 L55.8092212,12.2654119 L55.6684478,12.4611076 C55.0979175,13.2115931 53.9252813,14.2822157 52.0140871,14.2822157 C49.4249471,14.2822157 47.4967193,12.2790391 47.4967193,9.73078017 C47.4967193,7.0189967 49.4453877,5.1793446 51.7960543,5.1793446 Z M29.2569093,5.1793446 C31.764287,5.1793446 33.8083448,7.08713195 33.8083448,9.73078017 C33.8083448,12.3539878 31.764287,14.2822157 29.2569093,14.2822157 C26.7495316,14.2822157 24.7054737,12.3539878 24.7054737,9.73078017 C24.7054737,7.09394549 26.7495316,5.1793446 29.2569093,5.1793446 Z M19.3159745,5.1520905 C21.8233521,5.1520905 23.86741,7.0735049 23.86741,9.71033958 C23.86741,12.3335473 21.8233521,14.2617752 19.3159745,14.2617752 C16.8085968,14.2617752 14.7645388,12.3267337 14.7645388,9.71033958 C14.7645388,7.0735049 16.8085968,5.1520905 19.3159745,5.1520905 Z M7.28328699,0.0283187184 C9.33518043,0.0283187184 10.8336451,0.79082045 11.9714589,1.8192754 L12.1481448,1.98380077 L10.778626,3.35331955 C9.94737578,2.57657755 8.82314394,1.97017371 7.28328699,1.97017371 C4.42841947,1.97017371 2.19358285,4.2731456 2.19358285,7.12801311 C2.19358285,9.98288063 4.42841947,12.2858525 7.28328699,12.2858525 C9.13656614,12.2858525 10.1926627,11.5431782 10.8603883,10.8686391 C11.3698305,10.3591969 11.7283267,9.6291417 11.887646,8.58736997 L11.9232984,8.32038022 L7.28328699,8.32038022 L7.28328699,6.42621991 L13.7970182,6.42621991 C13.8583399,6.77370975 13.9128481,7.24384306 13.9128481,7.70034933 C13.9128481,9.15844395 13.5176636,10.957215 12.2367206,12.2381579 C10.9898452,13.5327278 9.39548015,14.2277075 7.28328699,14.2277075 C3.37232291,14.2277075 0.0813897009,11.0389773 0.0813897009,7.12801311 C0.0813897009,3.21704902 3.37232291,0.0283187184 7.28328699,0.0283187184 Z M46.5223849,0.539333191 L46.5223849,13.8665906 L44.5600893,13.8665906 L44.5600893,0.539333191 L46.5223849,0.539333191 Z M29.2500958,6.97130201 C27.8737634,6.97130201 26.6882098,8.09553385 26.6882098,9.73078017 C26.6882098,11.3523994 27.8737634,12.4902584 29.2500958,12.4902584 C30.6332416,12.4902584 31.8119817,11.3455859 31.8119817,9.73078017 C31.8119817,8.09553385 30.6264281,6.97130201 29.2500958,6.97130201 Z M39.17059,6.96448849 C37.7942577,6.96448849 36.6359583,8.13641501 36.6359583,9.74440721 C36.6359583,11.3319589 37.7942577,12.4835043 39.17059,12.4835043 C40.5332953,12.4902584 41.603019,11.3319589 41.603019,9.74440721 C41.603019,8.13641501 40.5332953,6.96448849 39.17059,6.96448849 Z M19.3159745,6.95086143 C17.9396421,6.95086143 16.7540885,8.07509327 16.7540885,9.71033958 C16.7540885,11.3319589 17.9396421,12.4698178 19.3159745,12.4698178 C20.6923067,12.4698178 21.8778603,11.3319589 21.8778603,9.71033958 C21.8778603,8.07509327 20.6923067,6.95086143 19.3159745,6.95086143 Z M51.857376,6.93042085 C50.8421607,6.93042085 49.4317607,7.82980633 49.4794554,9.58769611 L53.5471305,7.89794159 C53.3222841,7.33241891 52.6545586,6.93042085 51.857376,6.93042085 Z" transform="translate(0 19)"/>
</svg>

}

export default LogoGoogleText
