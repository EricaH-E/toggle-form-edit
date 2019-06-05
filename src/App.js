import React from 'react';
import './App.css';
import User from './user.js';
import Folder from './toggle.js';




class App extends React.Component{
  render(){
    return(
      <div>
        <User  />
        <Folder />
       </div>

    )
  }
}
export default App;
