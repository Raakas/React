import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actionOne from './actions/basicActions';
import axios from 'axios';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';
import '../node_modules/react-vis/dist/style.css';

const API = '037362528e461435f3315b2e8feadf50';
const URL = 'http://api.openweathermap.org/data/2.5/forecast?q=';
const city = 'Oulu';

class App extends React.Component {

    state = {
      city: city
    }

    getWeather() {
      axios.get(`${URL}${city}&appid=${API}`)
        .then(data => {

          let coord = {data:[]};

          for(let i in data.data.list){
            coord.data[i] = { 'x' : data.data.list[i].dt, 'y' : data.data.list[i].main.temp}
          }

            this.setState({
              data: coord.data
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
          <h2>{this.state.city}</h2>
          <XYPlot
            width={300}
            height={300}>
            <HorizontalGridLines />
            <LineSeries
              data={this.state.data}/>
            <XAxis />
            <YAxis />
        </XYPlot>

          </div>
        )} />

      </div>
    </BrowserRouter>
    );
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