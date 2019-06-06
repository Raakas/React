import axios from 'axios';

const API = '037362528e461435f3315b2e8feadf50';
const URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';

export default function getWeather() {
    axios.get(`${URL}oulu&appid=${API}`)
        .then(response => response.json())
        .then(data => this.setState({ hits: data.hits }))
        .catch(error => console.log(error));
}