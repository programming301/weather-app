import { Request, Response } from 'express';
import axios from 'axios';
import { LocationRequestParams, RequestOptions } from './types';

const locationRequestsLimit: number = 300;
const locationRequestsAvailable: number = 250;
let locationRequestsCount: number = 0;

export async function handleLocationSearch(req: Request, res: Response) {
  if (locationRequestsCount >= locationRequestsAvailable) {
    res.json('requests limit reached');
    return;
  }

  const data = await getLocations(req.params.searchTerm);
  res.json(data);
}

async function getLocations(searchTerm: string) {
  const options: RequestOptions<LocationRequestParams> = {
    method: 'GET',
    url: 'https://andruxnet-world-cities-v1.p.rapidapi.com/',
    params: { query: searchTerm },
    headers: {
      'x-rapidapi-host': 'andruxnet-world-cities-v1.p.rapidapi.com',
      'x-rapidapi-key': process.env.API_KEY
    }
  };

  let result;

  await axios.request(options)
    .then(function (response) {
      locationRequestsCount = locationRequestsLimit - Number(response.headers['x-ratelimit-requests-remaining']);
      result = response.data;
    })
    .catch(function (error) {
      console.error(error);
      result = error;
    });

  return result;
}
