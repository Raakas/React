import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actionOne from './actions/basicActions';
import WeatherComponent from './components/WeatherComponent';
import axios from 'axios';

const API = '037362528e461435f3315b2e8feadf50';
const URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
const city = 'Oulu';

class App extends React.Component {

    state = {
      city: 'cityNameHere'
    }

    getWeather() {
      axios.get(`${URL}${city}&appid=${API}`)
        .then(data => {

          const city = JSON.stringify(data.data.city.name);
          
            this.setState({
              city: city
            })
          })
          .catch(error => console.log(error));
    } 

    componentDidMount(){
      this.getWeather();
    }

  render () {

    return (
      <BrowserRouter>
      <div className="App">
        <header>
          <h1>Weather forecasts</h1>
          <input type="text" id="field" />
          <p onClick={() => this.props.actionOne(document.querySelector('#field').value)}>{this.props.value_a}</p>
          <p>{this.props.value_b}</p>
        </header>
        <Link to="/">Home</Link><br/>
        <Link to="/forecast">Forecast</Link>
        <Route path="/forecast" render={() => (
          <div>
          <h3>Forecast</h3>
          <p>{this.state.city}</p>
          <WeatherComponent 
            changeState={this.changeState.bind(this)}
          />
          </div>
        )} />

      </div>
    </BrowserRouter>
    );
  }
  changeState() {
    this.setState((state, props) => ({
      data: 'Oulu'
    }));
  }
}

const mapStateToProps = (state) => {
  return {
    value_a: state.rootReducer.a,
    value_b: state.rootReducer2.a
  }
}

const connection = connect(mapStateToProps, {actionOne});
export default connection(App);