import React from 'react'
import type { IconProps } from '../../types'

const CloudSnowFill: React.FC<IconProps> = ({ size, fill, style, className }) => {
  return <svg className={className} style={style} fill={fill} xmlns="http://www.w3.org/2000/svg"  height={size ?? "1em"} viewBox="0 0 56 56"><path d="M 12.2618 35.1133 L 41.3477 35.1133 C 48.7772 35.1133 54.5195 29.5117 54.5195 22.2930 C 54.5195 15.0039 48.5195 9.5430 40.5743 9.6133 C 37.5743 3.5664 32.0665 .7 25.5743 .7 C 16.9259 .7 9.6368 6.8945 8.9571 15.6367 C 4.4102 16.8789 1.4805 20.7226 1.4805 25.3164 C 1.4805 31.1289 5.8399 35.1133 12.2618 35.1133 Z M 13.4102 47.1133 C 13.8321 47.1133 14.1368 46.7148 14.1134 46.2930 L 13.9727 44.0430 L 15.8243 45.3086 C 16.1759 45.5430 16.6915 45.4492 16.9259 45.0977 C 17.1368 44.7461 17.0196 44.2070 16.5508 43.9961 L 14.5586 43.0117 L 16.5743 42.0039 C 17.0196 41.7930 17.1134 41.3008 16.9493 40.9258 C 16.7383 40.5508 16.1759 40.4805 15.8243 40.7148 L 13.9727 42.0039 L 14.1368 39.7539 C 14.1837 39.3086 13.8321 38.9102 13.4102 38.9102 C 12.9181 38.9102 12.6368 39.3086 12.6602 39.7539 L 12.8008 42.0039 L 10.9259 40.7148 C 10.5743 40.4805 10.0821 40.5273 9.8477 40.9258 C 9.6368 41.3008 9.7305 41.7930 10.1759 42.0039 L 12.1915 43.0117 L 10.1759 43.9961 C 9.7305 44.2070 9.6134 44.7227 9.8243 45.0977 C 10.0352 45.4727 10.5743 45.5430 10.9259 45.3320 L 12.8008 44.0664 L 12.6837 46.2930 C 12.6602 46.7148 12.9181 47.1133 13.4102 47.1133 Z M 39.3790 47.1133 C 39.8008 47.1133 40.1055 46.7148 40.0821 46.2930 L 39.9181 44.0430 L 41.7930 45.3086 C 42.1212 45.5430 42.6602 45.4492 42.8946 45.0977 C 43.1055 44.7461 42.9883 44.2070 42.5196 43.9961 L 40.5040 43.0117 L 42.5430 42.0039 C 42.9883 41.7930 43.0821 41.3008 42.9181 40.9258 C 42.7071 40.5508 42.1212 40.4805 41.7930 40.7148 L 39.9181 42.0039 L 40.1055 39.7539 C 40.1524 39.3086 39.8008 38.9102 39.3790 38.9102 C 38.8868 38.9102 38.6055 39.3086 38.6290 39.7539 L 38.7696 42.0039 L 36.8712 40.7148 C 36.5430 40.4805 36.0508 40.5273 35.8165 40.9258 C 35.6055 41.3008 35.6993 41.7930 36.1446 42.0039 L 38.1602 43.0117 L 36.1446 43.9961 C 35.6993 44.2070 35.5821 44.7227 35.7930 45.0977 C 36.0040 45.4727 36.5430 45.5430 36.8712 45.3320 L 38.7696 44.0664 L 38.6524 46.2930 C 38.6290 46.7148 38.8868 47.1133 39.3790 47.1133 Z M 26.3946 47.1133 C 26.8165 47.1133 27.1212 46.7148 27.0977 46.2930 L 26.9571 44.0430 L 28.8086 45.3086 C 29.1368 45.5430 29.6759 45.4492 29.9102 45.0977 C 30.1212 44.7461 30.0040 44.2070 29.5352 43.9961 L 27.5430 43.0117 L 29.5586 42.0039 C 30.0040 41.7930 30.0977 41.3008 29.9337 40.9258 C 29.7227 40.5508 29.1368 40.4805 28.8086 40.7148 L 26.9571 42.0039 L 27.1212 39.7539 C 27.1681 39.3086 26.8165 38.9102 26.3946 38.9102 C 25.9024 38.9102 25.6212 39.3086 25.6446 39.7539 L 25.7852 42.0039 L 23.9102 40.7148 C 23.5586 40.4805 23.0665 40.5273 22.8321 40.9258 C 22.6212 41.3008 22.7149 41.7930 23.1602 42.0039 L 25.1759 43.0117 L 23.1602 43.9961 C 22.7149 44.2070 22.5977 44.7227 22.8086 45.0977 C 23.0196 45.4727 23.5586 45.5430 23.9102 45.3320 L 25.7852 44.0664 L 25.6681 46.2930 C 25.6446 46.7148 25.9024 47.1133 26.3946 47.1133 Z M 21.3086 55.9023 C 21.7305 55.9023 22.0352 55.5039 22.0118 55.0820 L 21.8712 52.8555 L 23.7227 54.1211 C 24.0508 54.3320 24.5899 54.2383 24.8243 53.8867 C 25.0352 53.5352 24.9181 52.9961 24.4493 52.7852 L 22.4571 51.8242 L 24.4727 50.8164 C 24.9181 50.6055 25.0118 50.0899 24.8477 49.7383 C 24.6368 49.3633 24.0508 49.2930 23.7227 49.5039 L 21.8712 50.8164 L 22.0352 48.5430 C 22.0821 48.0977 21.7305 47.7226 21.3086 47.7226 C 20.8165 47.7226 20.5352 48.0977 20.5586 48.5430 L 20.6993 50.8164 L 18.8243 49.5039 C 18.4727 49.2930 17.9805 49.3399 17.7462 49.7383 C 17.5352 50.0899 17.6290 50.5820 18.0743 50.8164 L 20.0899 51.8242 L 18.0743 52.8086 C 17.6290 53.0195 17.5118 53.5117 17.7227 53.8867 C 17.9337 54.2852 18.4727 54.3555 18.8243 54.1211 L 20.6993 52.8555 L 20.5821 55.0820 C 20.5586 55.5039 20.8165 55.9023 21.3086 55.9023 Z M 8.3243 55.9023 C 8.7462 55.9023 9.0508 55.5039 9.0274 55.0820 L 8.8868 52.8555 L 10.7383 54.1211 C 11.0899 54.3320 11.6055 54.2383 11.8399 53.8867 C 12.0508 53.5352 11.9337 52.9961 11.4649 52.7852 L 9.4727 51.8242 L 11.4883 50.8164 C 11.9337 50.6055 12.0274 50.0899 11.8634 49.7383 C 11.6524 49.3633 11.0899 49.2930 10.7383 49.5039 L 8.8868 50.8164 L 9.0508 48.5430 C 9.0977 48.0977 8.7462 47.7226 8.3243 47.7226 C 7.8321 47.7226 7.5508 48.0977 7.5743 48.5430 L 7.7149 50.8164 L 5.8399 49.5039 C 5.4883 49.2930 4.9962 49.3399 4.7618 49.7383 C 4.5508 50.0899 4.6446 50.5820 5.0899 50.8164 L 7.1290 51.8242 L 5.0899 52.8086 C 4.6446 53.0195 4.5274 53.5117 4.7383 53.8867 C 4.9493 54.2852 5.4883 54.3555 5.8399 54.1211 L 7.7149 52.8555 L 7.5977 55.0820 C 7.5743 55.5039 7.8321 55.9023 8.3243 55.9023 Z M 34.2930 55.9023 C 34.7149 55.9023 35.0196 55.5039 34.9962 55.0820 L 34.8555 52.8555 L 36.7071 54.1211 C 37.0352 54.3320 37.5743 54.2383 37.8086 53.8867 C 38.0196 53.5352 37.9024 52.9961 37.4337 52.7852 L 35.4181 51.8242 L 37.4571 50.8164 C 37.9024 50.6055 37.9962 50.0899 37.8321 49.7383 C 37.6212 49.3633 37.0352 49.2930 36.7071 49.5039 L 34.8555 50.8164 L 35.0196 48.5430 C 35.0665 48.0977 34.7149 47.7226 34.2930 47.7226 C 33.8008 47.7226 33.5196 48.0977 33.5430 48.5430 L 33.6837 50.8164 L 31.7852 49.5039 C 31.4571 49.2930 30.9649 49.3399 30.7305 49.7383 C 30.5196 50.0899 30.6134 50.5820 31.0586 50.8164 L 33.0743 51.8242 L 31.0586 52.8086 C 30.6134 53.0195 30.4962 53.5117 30.7071 53.8867 C 30.9181 54.2852 31.4571 54.3555 31.7852 54.1211 L 33.6837 52.8555 L 33.5665 55.0820 C 33.5430 55.5039 33.8008 55.9023 34.2930 55.9023 Z"/></svg>
}

export default CloudSnowFill
