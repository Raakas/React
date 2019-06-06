import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import getWeather from './openWeatherMapAPI';

class App extends React.Component {
  state = {
    header: "Weather forecasts"
  }

  componentDidMount() {
    getWeather();
  }

  render () {
    return (
      <BrowserRouter>
      <div className="App">
        <header>
          <h1>{this.state.header}</h1>
        </header>
        <Link to="/weather">Weather</Link>
        <Link to="/forecast">Forecast</Link>

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