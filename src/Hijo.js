import React, { Component } from 'react';

class Hijo extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  handleChange = (name, event) => {
    this.props.onValueChange(name, event); 
  };
  
  render() {
    return (
      <div>
        <select
            onChange={e => {this.handleChange("dato",e);}}
          >
          <option value="Opcion 1">Opción 1</option>
          <option value="Opcion 2">Opción 2</option>
          <option value="Opcion 3">Opción 3</option>
          <option value="Opcion 4">Opción 4</option>
        </select>
      </div>
    );
  }
}

export default Hijo;
