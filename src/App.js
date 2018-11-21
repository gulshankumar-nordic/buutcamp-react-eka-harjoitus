import React, { Component } from 'react';

import './App.css';
import Header from './Components/header';
import Output from './Components/output';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value:0,
      valueText: "",
      showOutput: true,
      inputText: '',
    }
  }
  render() {
    return (
      <div className="App">
       
        <div>
          <Header handleIncreaseEvent={this.handleIncreaseEvent} handleDecreaseEvent={this.handleDecreaseEvent} handleHideShowEvent={this.handleHideShowEvent}/>
          {this.state.showOutput === true ? <Output outputValue={this.state.value} valueText={this.state.valueText}/> : <React.Fragment></React.Fragment>}
        </div>
      </div>
    );
  }

  handleIncreaseEvent = () => { 
    this.setState({
      value: this.state.value + 1,
    })
   

  }
  handleDecreaseEvent = () => { 
    this.setState({
      value: this.state.value-1
    })
 }
  handleHideShowEvent = () => {
    if(this.state.showOutput === true){
      this.setState({
        showOutput:false
      })
    } else {
      this.setState({
        showOutput:true
      })
    }
  }
}

export default App;

