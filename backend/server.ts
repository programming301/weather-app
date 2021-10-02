import express from 'express';
import dotenv from 'dotenv';
import { handleLocationSearch } from './location.api';
import { handleWeatherForecastRequest, handleWeatherHistoryRequest } from './weather.api';

dotenv.config({ path: '.env.local' });
const app = express();

/*
* TODO
* 2. finalize typings
* 4. save request counters in env var
* */

app.get('/location/:searchTerm', handleLocationSearch);

app.get('/weather/forecast/:location/:interval', handleWeatherForecastRequest);

app.get('/weather/historical/:location/:interval', handleWeatherHistoryRequest);

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
