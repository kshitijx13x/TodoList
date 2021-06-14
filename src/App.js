import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todolist from './Todolist';


function App() {
  
  let [inputList,setInputList] = useState();
  const [items,setItems] = useState([]);
  
  const itemEvent = (event)=>{
    setInputList(event.target.value);
  }

  const addItems=()=>{
        setItems((storedItems)=>{
          return [...storedItems,inputList];
        })
        setInputList("");
  }

  const deleteItems = (id) =>
  {
      console.log("deleted");

      setItems((storedItems)=>{
        return storedItems.filter((arrElem, index) =>
        {
          return index !== id ;
        
      })
    })
  }

  // const deleteItems=(index2)=>{
  //   console.log("delete items");
  //   setItems((oldItems)=>{
  //     return oldItems.filter((arrElem,index)=>{
        
  //     })
  //   })
  // }
  
  return (
    
    <>
      <div className = "main_div">
          <div className = "inner_div">
              <h1 className = "heading1">ToDo List</h1>
              <br></br>
              <div className="task_div">
                <input className = "task" placeholder="Enter your task"  value = {inputList} onChange={itemEvent}>
                 </input>
                 < button className="add" onClick={addItems}>Add</button>
              </div>
              <ol>
                {items.map((itemval,index)=>
                {
                 
                  return (
                  <Todolist text = {itemval} key = {index} id = {index} onSelect = {deleteItems} />
                  )
                })
                
                
                 }
              </ol>
          </div>
      </div>
    </>
  );
}

export default App;
