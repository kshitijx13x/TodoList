import React from 'react';
import './App.css';

const Todolist = (props) =>

{
  
    return(
        <div className="contain_div">
                  <i className="fas fa-window-close" onClick={()=>
                {
                    props.onSelect(props.id)
                }}></i>
                      <li>{props.text}</li>
                  </div>
    )
}

export default Todolist;