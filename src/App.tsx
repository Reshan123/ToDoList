import AddItem from "./components/AddItem";
import Item from "./components/item";
import React, { useEffect } from "react";

function App() {

  let tasks:any = [];
  

  return (
    <>
      <center>
        <h1>ToDo List</h1>
      </center>
      <AddItem itemText={(textProp) => {tasks.push(textProp)}}/>
      <ul className="list-group">
        {tasks.map((item:any) => {return <li>{item}</li>})}
      </ul>
    </>
  );
}

export default App;