import React from 'react'
import type { IconProps } from '../../types'

const CameraFilters: React.FC<IconProps> = ({ fill }) => {
  return <svg style={{ fill }} xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56">
  <path d="M15.9637413,47.5058136 C18.1708495,47.5058136 20.2381268,47.0900826 22.1655731,46.2586205 C24.0930195,45.4271895 25.7899222,44.2820638 27.2562812,42.8232436 C28.7226711,41.3644327 29.8678045,39.667527 30.6916813,37.7325263 C31.5155581,35.7975164 31.9274965,33.7264574 31.9274965,31.5193492 C31.9274965,29.3273495 31.511781,27.267642 30.6803499,25.3402265 C29.8488879,23.4127801 28.7037545,21.7196546 27.2449498,20.2608499 C25.7861451,18.8020142 24.0930195,17.6568808 22.1655731,16.8254497 C20.2381268,15.9940186 18.1708495,15.5783031 15.9637413,15.5783031 C13.7717726,15.5783031 11.7082879,15.9940186 9.77328728,16.8254497 C7.83828664,17.6568808 6.14136848,18.8020142 4.6825328,20.2608499 C3.22372809,21.7196546 2.07861019,23.4127801 1.24717912,25.3402265 C0.415726372,27.267642 0,29.3273495 0,31.5193492 C0,33.7264574 0.415726372,35.7975164 1.24717912,37.7325263 C2.07861019,39.667527 3.22372809,41.3644327 4.6825328,42.8232436 C6.14136848,44.2820638 7.83828664,45.4271895 9.77328728,46.2586205 C11.7082879,47.0900826 13.7717726,47.5058136 15.9637413,47.5058136 Z M15.9637413,43.8776642 C14.2706312,43.8776642 12.6757727,43.5564247 11.1791659,42.9139456 C9.68255897,42.2714635 8.36736225,41.3871074 7.23357572,40.2608773 C6.09978919,39.1346459 5.21543198,37.8232299 4.58050409,36.3266292 C3.9455762,34.8300254 3.62811226,33.2275987 3.62811226,31.5193492 C3.62811226,29.8262391 3.9455762,28.2351577 4.58050409,26.7461051 C5.21543198,25.2570525 6.09978919,23.94941 7.23357572,22.8231777 C8.36736225,21.6969454 9.68255897,20.8125882 11.1791659,20.1701061 C12.6757727,19.5276549 14.2706312,19.2064293 15.9637413,19.2064293 C17.6719908,19.2064293 19.2706419,19.5276549 20.7596946,20.1701061 C22.2487472,20.8125882 23.5563742,21.6969454 24.6825755,22.8231777 C25.8088078,23.94941 26.693165,25.2570525 27.3356472,26.7461051 C27.9781293,28.2351577 28.2993704,29.8262391 28.2993704,31.5193492 C28.2993704,33.2275987 27.9781293,34.8300254 27.3356472,36.3266292 C26.693165,37.8232299 25.8088078,39.1346459 24.6825755,40.2608773 C23.5563742,41.3871074 22.2487472,42.2714635 20.7596946,42.9139456 C19.2706419,43.5564247 17.6719908,43.8776642 15.9637413,43.8776642 Z M25.0114173,31.9275105 C27.203386,31.9275105 29.2630936,31.5155721 31.1905399,30.6916952 C33.1179863,29.8678184 34.814889,28.722685 36.281248,27.2562951 C37.7476379,25.7899361 38.8927713,24.0930335 39.7166481,22.1655871 C40.5405249,20.2381407 40.9524634,18.1708634 40.9524634,15.9637552 C40.9524634,13.7566471 40.5405249,11.6931624 39.7166481,9.77330121 C38.8927713,7.85340906 37.7476379,6.1602835 36.281248,4.69392454 C34.814889,3.22753462 33.1179863,2.07862412 31.1905399,1.24719305 C29.2630936,0.415731016 27.203386,0 25.0114173,0 C22.8043091,0 20.7370318,0.415731016 18.8095854,1.24719305 C16.882139,2.07862412 15.1852209,3.22753462 13.718831,4.69392454 C12.252472,6.1602835 11.103577,7.85340906 10.2721459,9.77330121 C9.44068389,11.6931624 9.02495287,13.7566471 9.02495287,15.9637552 C9.02495287,18.1708634 9.44068389,20.2381407 10.2721459,22.1655871 C11.103577,24.0930335 12.252472,25.7899361 13.718831,27.2562951 C15.1852209,28.722685 16.882139,29.8678184 18.8095854,30.6916952 C20.7370318,31.5155721 22.8043091,31.9275105 25.0114173,31.9275105 Z M25.0114173,28.2993843 C23.3031678,28.2993843 21.7007396,27.9819203 20.2041327,27.3469925 C18.7075258,26.7120955 17.3961062,25.8277538 16.2698739,24.6939673 C15.1436416,23.5601498 14.2592844,22.2487302 13.6168023,20.7597085 C12.9743201,19.2706558 12.6530791,17.6720048 12.6530791,15.9637552 C12.6530791,14.2555367 12.9743201,12.6606782 13.6168023,11.1791798 C14.2592844,9.69768138 15.1436416,8.39003891 16.2698739,7.25625238 C17.3961062,6.12246585 18.7075258,5.23433152 20.2041327,4.59184939 C21.7007396,3.94936726 23.3031678,3.62812619 25.0114173,3.62812619 C26.7045274,3.62812619 28.2956087,3.94936726 29.7846614,4.59184939 C31.2736831,5.23433152 32.5851026,6.11868873 33.7189201,7.24492102 C34.8527067,8.37115331 35.7370484,9.67879578 36.3719453,11.1678484 C37.0068732,12.6569011 37.3243372,14.2555367 37.3243372,15.9637552 C37.3243372,17.6720048 37.0068732,19.2706558 36.3719453,20.7597085 C35.7370484,22.2487302 34.8527067,23.5601498 33.7189201,24.6939673 C32.5851026,25.8277538 31.2736831,26.7120955 29.7846614,27.3469925 C28.2956087,27.9819203 26.7045274,28.2993843 25.0114173,28.2993843 Z M34.0590468,47.5058136 C36.2510465,47.5058136 38.310754,47.0900826 40.2381695,46.2586205 C42.165523,45.4271895 43.8624876,44.2820638 45.3290633,42.8232436 C46.7953293,41.3644327 47.9403853,39.667527 48.7642312,37.7325263 C49.5880771,35.7975164 50,33.7264574 50,31.5193492 C50,29.3273495 49.5880771,27.267642 48.7642312,25.3402265 C47.9403853,23.4127801 46.7953293,21.7196546 45.3290633,20.2608499 C43.8624876,18.8020142 42.165523,17.6568808 40.2381695,16.8254497 C38.310754,15.9940186 36.2510465,15.5783031 34.0590468,15.5783031 C31.8519386,15.5783031 29.7808842,15.9940186 27.8458836,16.8254497 C25.910883,17.6568808 24.2139803,18.8020142 22.7551756,20.2608499 C21.2963399,21.7196546 20.1512065,23.4127801 19.3197754,25.3402265 C18.4883134,27.267642 18.0725824,29.3273495 18.0725824,31.5193492 C18.0725824,33.7264574 18.4883134,35.7975164 19.3197754,37.7325263 C20.1512065,39.667527 21.2963399,41.3644327 22.7551756,42.8232436 C24.2139803,44.2820638 25.910883,45.4271895 27.8458836,46.2586205 C29.7808842,47.0900826 31.8519386,47.5058136 34.0590468,47.5058136 Z M34.0590468,43.8776642 C32.3507973,43.8776642 30.7483691,43.5564247 29.2517622,42.9139456 C27.7551553,42.2714635 26.4437357,41.3871074 25.3175034,40.2608773 C24.1912711,39.1346459 23.3069139,37.8232299 22.6644318,36.3266292 C22.0219806,34.8300254 21.700755,33.2275987 21.700755,31.5193492 C21.700755,29.8262391 22.0219806,28.2351577 22.6644318,26.7461051 C23.3069139,25.2570525 24.1912711,23.94941 25.3175034,22.8231777 C26.4437357,21.6969454 27.7551553,20.8125882 29.2517622,20.1701061 C30.7483691,19.5276549 32.3507973,19.2064293 34.0590468,19.2064293 C35.7521569,19.2064293 37.3432382,19.5276549 38.8322909,20.1701061 C40.3213435,20.8125882 41.6290325,21.6969454 42.7553576,22.8231777 C43.8813732,23.94941 44.7657459,25.2570525 45.4084757,26.7461051 C46.0508959,28.2351577 46.372106,29.8262391 46.372106,31.5193492 C46.372106,33.2275987 46.0546111,34.8300254 45.4196213,36.3266292 C44.7846315,37.8232299 43.903974,39.1346459 42.7776488,40.2608773 C41.6515713,41.3871074 40.3402291,42.2714635 38.8436223,42.9139456 C37.3470154,43.5564247 35.7521569,43.8776642 34.0590468,43.8776642 Z" transform="translate(3 4)"/>
</svg>

}

export default CameraFilters
