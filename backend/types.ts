import { AxiosRequestConfig } from 'axios';

export interface RequestOptions<T = LocationRequestParams | WeatherRequestParams>
  extends AxiosRequestConfig {
  method: 'GET';
  params: T;
}

export interface LocationRequestParams {
  query: string;
}

export interface WeatherRequestParams {
  aggregateHours: string; // todo: fix
  location: string;
  contentType: 'json';
  unitGroup: 'metric';
  shortColumnNames: '0';
  startDateTime?: string;
  endDateTime?: string;
}

export enum WeatherInterval {
  HOURLY = 'hourly',
  HALF_DAY = 'half_day',
  FULL_DAY = 'full_day',
}

export enum WeatherIntervalValue {
  HOURLY = 1,
  HALF_DAY = 12,
  FULL_DAY = 24,
}
