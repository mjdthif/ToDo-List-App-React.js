import React, {Component} from 'react';
import './todoInput.scss';
class TodoInput extends Component {
    render() { 
        const {item, handleChange, handleSubmit} = this.props;
        return ( 
            <div className="card card-body my-3">
               <form action="" onSubmit={handleSubmit}>
               <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text  bg-primary text-white">
                        <i className="fas fa-book"/> 
                        </div>
                    </div>
                    <input type="text" 
                    className="form-control text-capitalize"
                    placeholder="Add todo item"
                    value={item}
                    onChange={handleChange}>
                      </input>
                </div>
                <button type="submit"  className='btn btn-block btn-primary mt-3' > Submit </button>
               </form>
            </div>
         );
    }
}
 
export default TodoInput;