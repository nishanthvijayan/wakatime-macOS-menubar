const axios = require('axios');
const { apiKey } = require('./secrets.json');

const url = 'https://wakatime.com/api/v1/users/current/durations';
const DIVIDER = '---';

const getTodaysDate = () => {
  const d = new Date();
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

const params = {
  date: getTodaysDate(),
  api_key: apiKey,
};

(() => {
  axios.get(url, { params }).then(
    (response) => {
      const todayCodingTimeInMinutes = response.data.data
        .reduce((totalDuration, entry) => totalDuration + entry.duration, 0) / 60;

      const hours = Math.floor(todayCodingTimeInMinutes / (60));
      const minutes = Math.floor(todayCodingTimeInMinutes % (60));
      console.log(`Coding: ${hours}h ${minutes}m`);
      console.log(DIVIDER);
      console.log('Open Dashboard | color=#123def href=https://wakatime.com/dashboard');
    },
    () => {
      console.log('...');
      console.log(DIVIDER);
      console.log('Something went wrong..');
    },
  );
})();
