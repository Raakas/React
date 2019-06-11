import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actionOne from './actions/basicActions';
import getWeather from './openWeatherMapAPI';
import WeatherComponent from './components/WeatherComponent';

class App extends React.Component {

    state = {
      data: 'cityNameHere'
    }

    componentDidMount(){
      const city = getWeather();
      console.log(city);
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
          <p>{this.state.data}</p>
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