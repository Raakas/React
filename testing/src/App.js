import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import axios from 'axios';

const API = '037362528e461435f3315b2e8feadf50';
const URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';

class App extends React.Component {

    componentDidMount(){
      axios.get(`${URL}oulu&appid=${API}`)
      .then(response => console.log(response))
      .catch(error => console.log(error));
    }

  render () {

    return (
      <BrowserRouter>
      <div className="App">
        <header>
          <h1>Weather forecasts</h1>
        </header>
        <Link to="/forecast">Forecast</Link>
        <Route path="/forecast" render={() => (
          <div>
          <h3>Forecast</h3>
          <p>{this.state}</p>
          </div>
        )} />

      </div>  
    </BrowserRouter>
    );
  }
  
  changeState(){
    this.setState((state, props) => ({
      text: "gives"
    }));
  }
}

export default App;