import React from 'react';
import './App.css';
import TodoInput from './Compo/todoInput';
import Todolist from  './Compo/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid'

function App() {
  return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto cl-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput></TodoInput>
            <Todolist></Todolist>
          </div>
        </div>

        </div>
      
     
    
  );
}

export default App;
