import React, {Component} from 'react';
import './App.css';
import TodoInput from './Compo/todoInput';
import Todolist from  './Compo/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {v1 as uuid} from "uuid";  
class App extends Component {
  // This is the state to store the data needed for our app. 
  state = {
    items :[], 
    id : uuid(), 
    item : "", 
    editItem: false
}
//This is a Change handler to keep track of the changes in the input field.  
handleChange = e =>{
  this.setState({
    item: e.target.value
  });
}
// Submit  handler to capture the date from the input feild and store it. 
handleSubmit = e =>{
  // we prevent the default behavior of the submit button. 
  e.preventDefault();

  // create a new item to capture the new value  of the item. 
  const newItem  = {
    id:this.state.id,
    title:this.state.item
};
// get the new state with the new updated item. 
  const updatedItems = [...this.state.items, newItem];
    this.setState({
        items: updatedItems, 
        item:"",
        id : uuid(), 
        editItem:false
  })
}
clearList = () =>{
  this.setState({
    items: []
  })
}

  render() { 
    return ( 
      <div className="container">
      <div className="row">
        <div className="col-10 mx-auto cl-md-8 mt-4">
          <h3 className="text-capitalize text-center">Todo Input</h3>
          <TodoInput 
          item={this.state.item}
          handleChange={this.handleChange} 
          handleSubmit={this.handleSubmit}>
            
          </TodoInput>
          <Todolist items= {this.state.items} clearList={this.clearList}>
          </Todolist>
        </div>
      </div>

      </div>
     );
  }
}
 
export default App;

