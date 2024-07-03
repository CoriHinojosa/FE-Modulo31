import React from 'react';
import { enableFetchMocks } from 'jest-fetch-mock';
const axios = require('axios');
import getPosts from '../index';

jest.mock('axios');
enableFetchMocks();

describe("Testing the API", () => {
    beforeAll(() => {
        fetch.enableFetchMocks();
        });
    

it('should get info from API', async () => {
    const mockPosts = [
        {
      "app_temp": 27.1,
      "aqi": 72,
      "city_name": "Monterrey",
      "clouds": 0,
      "country_code": "MX",
      "datetime": "2024-07-03:03",
      "dewpt": 22.3,
      "dhi": 0,
      "dni": 0,
      "elev_angle": -26.98,
      "ghi": 0,
      "gust": 10.734375,
      "h_angle": -90,
      "lat": 25.6751,
      "lon": -100.3185,
      "ob_time": "2024-07-03 04:07",
      "pod": "n",
      "precip": 0,
      "pres": 952,
      "rh": 79,
      "slp": 1014.8846,
      "snow": 0,
      "solar_rad": 0,
      "sources": [
        "rtma",
        "radar",
        "satellite"
      ],
      "state_code": "19",
      "station": "DNTL2",
      "sunrise": "11:54",
      "sunset": "01:36",
      "temp": 26.3,
      "timezone": "America/Monterrey",
      "ts": 1719979634,
      "uv": 0,
      "vis": 16,
      "weather": {
        "description": "Clear sky",
        "icon": "c01n",
        "code": 800
      },
      "wind_cdir": "ENE",
      "wind_cdir_full": "east-northeast",
      "wind_dir": 72,
      "wind_spd": 3.578125
    }
    ];

    const mockRes = {data: mockPosts};

    axios.get.mockResolvedValue(mockRes);

    await expect(getPosts()).resolves.toEqual(mockPosts);
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith('https://api.weatherbit.io/v2.0/current?lat=25.67507&lon=-100.31847&key=7fe2ab964e6549fbbf235b259655c437');
});

});