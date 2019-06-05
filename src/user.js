import React from 'react';
import './App.css';



class User extends React.Component{
    constructor(props){
      super(props);
      this.state={
        firstName: "Jane",
        lastName: "Doe",
        requestEdit: false
      }
      
      this.editName = this.editName.bind(this);
      this.saveChanges = this.saveChanges.bind(this);
      this.cancelEdit = this.cancelEdit.bind(this);
      this.Change =this.Change.bind(this);
      
    }
    editName(event){
        this.previousState = this.state;
        this.setState({requestEdit: true});
    }
    cancelEdit(event){
      this.setState(this.previousState);
      this.setState({requestEdit:false});
    }
    saveChanges(event){
    
      this.setState({requestEdit:false});
    }
    Change(event){
      this.setState({ [event.target.name]: event.target.value})
    }
    
    render(){
      if(this.state.requestEdit){
        return(
          <div>
            <form>
            <label>FIRST NAME</label>
            <input  name="firstName" type="text" onChange={this.Change}/>
            <label>LAST NAME</label>
            <input name="lastName" type="text" onChange={this.Change} />
            </form>
            <button onClick={this.saveChanges}>SAVE</button> 
            <button onClick={this.cancelEdit}>CANCEL</button>
            </div>
        )
      }
      return(
          <div>
            {this.state.firstName}  {this.state.lastName}
            <button onClick={this.editName}>EDIT</button>
          </div>
      );
    }
  
  }

  export default User;