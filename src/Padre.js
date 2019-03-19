import React, { Component } from 'react';
import './App.css';
import Hijo from './Hijo';

class Padre extends Component {
  constructor(props){
    super(props);
    this.state = {
        valor: 'Valor'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange = (name, event) => {  
    this.setState({
      valor : event.target.value
    });
  }

  render() {
    return (
      <div className="App">
       <br/>
        <Hijo
          onValueChange={this.handleChange}
        />
        <br/>
        <h3>{this.state.valor}</h3>
      </div>
    );
  }
}

export default Padre;
