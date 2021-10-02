import { Request, Response } from 'express';
import axios from 'axios';
import { buildDateString } from './utils';
import { RequestOptions, WeatherRequestParams } from './types';

const weatherRequestsLimit: number = 500;
const weatherRequestsAvailable: number = 490;
let weatherRequestsCount: number = 0;

// function mapToWeatherIntervalValue(interval: WeatherInterval): WeatherIntervalValue {
//   return WeatherIntervalValue[interval];
// }

export async function handleWeatherForecastRequest(req: Request, res: Response) {
  if (weatherRequestsCount >= weatherRequestsAvailable) {
    res.json('requests limit reached');
    return;
  }

  const data = await getWeatherForecast(
    req.params.location,
    req.params.interval,
  );
  res.json(data);
}

export async function handleWeatherHistoryRequest(req: Request, res: Response) {
  if (weatherRequestsCount >= weatherRequestsAvailable) {
    res.json('requests limit reached');
    return;
  }

  const data = await getWeatherHistory(
    req.params.location,
    req.params.interval,
    buildDateString(req.query.startDate || new Date().getTime()),
    buildDateString(req.query.endDate || new Date().setDate(new Date().getDate() + 7))
  );
  res.json(data);
}

async function getWeatherForecast(city: string, interval: string) {
  const options: RequestOptions<WeatherRequestParams> = {
    method: 'GET',
    url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
    params: {
      aggregateHours: interval,
      location: city,
      contentType: 'json',
      unitGroup: 'metric',
      shortColumnNames: '0'
    },
    headers: {
      'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY
    }
  };

  let result;

  await axios.request(options)
    .then(function (response) {
      weatherRequestsCount = weatherRequestsLimit - Number(response.headers['x-ratelimit-requests-remaining']);
      result = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return result;
}

async function getWeatherHistory(city: string, interval: string, startDate: string, endDate: string) {
  const options: RequestOptions<WeatherRequestParams> = {
    method: 'GET',
    url: 'https://visual-crossing-weather.p.rapidapi.com/history',
    params: {
      startDateTime: startDate,
      aggregateHours: interval,
      location: city,
      endDateTime: endDate,
      unitGroup: 'metric',
      contentType: 'json',
      shortColumnNames: '0'
    },
    headers: {
      'x-rapidapi-host': 'visual-crossing-weather.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY
    }
  };

  let result;

  await axios.request(options)
    .then(function (response) {
      weatherRequestsCount = weatherRequestsLimit - Number(response.headers['x-ratelimit-requests-remaining']);
      result = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  return result;
}
