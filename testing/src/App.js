import React from 'react';
import ComponentOne from './components/componentOne';

class App extends React.Component {
  state = {
    header: "Hello there",
    form: "Chat"
  }

  submitFormHandler(){
    console.log(this);
  }
  render () {
    return (
      <div className="App">
        <header>
          <h1>{this.state.header}</h1>
        </header>
        <ComponentOne 
        changeState={this.changeState.bind(this)}/>
        <div id="chat">{this.state.text}</div>
      </div>
    );
  }
  changeState(){
    this.setState((state, props) => ({
      text: "gives"
    }));
  }
}

export default App;