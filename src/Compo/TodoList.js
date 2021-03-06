import React, { Component } from 'react';
import TodoItem from './TodoItem'
class TodoList extends Component {
    render() { 
        const {items, clearList} = this.props;
        return ( 
            <div>
                <ul className="list-group list-group-flush my-5">
                    <h3 className="text-capitalize text-center">
                        Todo List
                    </h3>

                    {
                        items.map(item=> {
                            return (
                                <TodoItem key={item.id} title={item.title}/>
                            )
                        })
                    }
                    <button type='button' className="btn btn-danger btn-block text-capitalize mt-5" onClick={clearList}> Clear Item</button>
                </ul>
                
            </div>
         );
    }
}
 
export default TodoList;