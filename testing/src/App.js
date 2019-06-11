import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import actionOne from './actions/basicActions';
import getWeather from './openWeatherMapAPI';

class App extends React.Component {

    state = {
      data: 'city'
    }

    componentDidMount(){
      getWeather(res => {
        console.log(res);
        this.setState({data: res.data.city.name})
      })

    }

  render () {

    return (
      <BrowserRouter>
      <div className="App">
        <header>
          <h1>Weather forecasts</h1>
          <p>{this.props.value_a}</p>
          <p>{this.props.value_b}</p>
        </header>
        <Link to="/">Home</Link><br/>
        <Link to="/forecast">Forecast</Link>
        <Route path="/forecast" render={() => (
          <div>
          <h3>Forecast</h3>
          <p>{this.state.data}</p>
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

const mapStateToProps = (state) => {
  return {
    value_a: state.rootReducer.a,
    value_b: state.rootReducer2.a
  }
}

const connection = connect(mapStateToProps, {actionOne});
export default connection(App);