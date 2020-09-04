import React from 'react';

const TodoItem = () => {
    return ( 
       <div>
           <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
           <h5>Title</h5> 
               <div className="todo-icon">
                    <span className="mx-2 text-success">
                        <i className="fas fa-pen">    
                        </i>
                    </span>
                    <span className="mx-2 text-danger">
                        <i className="fas fa-trash"></i>
                    </span>
               </div>
           </li>
       </div>
     );
}
 
export default TodoItem;