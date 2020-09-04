import React, { Component } from 'react';
import TodoItem from './TodoItem'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <ul className="list-group list-group-flush my-5">
                    <h3 className="text-capitalize text-center">
                        Todo List
                    </h3>
                    <TodoItem></TodoItem>
                    <button type='button' className="btn btn-danger btn-block text-capitalize mt-5"> Clear Item</button>
                </ul>
                
            </div>
         );
    }
}
 
export default TodoList;