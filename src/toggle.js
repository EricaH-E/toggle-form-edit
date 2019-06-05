import React from 'react';
import './App.css';


class Folder extends React.Component{
    constructor(props){
      super(props);
      this.state ={
        toggle: false
      }
  
      this.onToggle = this.onToggle.bind(this);
  
    }
  
    onToggle(){
       this.state.toggle?  this.setState({toggle: false}) : this.setState({toggle: true});
    }
    render(){
      const styleList = this.state.toggle ? {visibility: 'collapse'} : {visibility: 'visible'};
      return(
        <div>
          Home <button onClick={this.onToggle}>TOGGLE</button>
          <ul style={styleList}>
            <li>File1</li>
            <li>File2</li>
            <li>File3</li>
          </ul>
  
        </div>
      )
    }
  }

  export default Folder;