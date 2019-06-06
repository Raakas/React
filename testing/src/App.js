import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentOne';

class App extends React.Component {
  state = {
    header: "Hello there",
    form: "Chat"
  }
  render () {
    return (
      <BrowserRouter>
      <div className="App">
        <header>
          <h1>{this.state.header}</h1>
        </header>
        <Link to="/">home page</Link>
        <Link to="/other">Other page</Link>
        <Route path="/other" render={() => (
          <ComponentOne 
          changeState={this.changeState.bind(this)}/>
        )} />
        <Route path="/other" render={() => (
          <ComponentTwo />
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