import axios from 'axios';

export default async function getWeather() { 
    await axios.get('http://api.openweathermap.org/data/2.5/forecast?q=oulu&appid=037362528e461435f3315b2e8feadf50')
        .then(response => {
            console.log(response);
            return response;
        })
        .catch(error => console.log(error));
}