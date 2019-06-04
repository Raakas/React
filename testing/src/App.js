import React from 'react';
import ComponentOne from './components/componentOne';

class App extends React.Component {
  state = {
    header: "Hello there",
    name: "Stranger",
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
        <form onSubmit={this.submitFormHandler}>
            <p><b>{this.state.form}</b></p>
            <input type="text" name={this.text}/>
            <button>Submit</button>
        </form>
        <ComponentOne />
      </div>
    )
  }
}

export default App;