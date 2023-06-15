import { useEffect, useRef, useState } from "react";
import '../index.css';

function App() {

  let [tasks,setTasks]:any = useState([]);
  const input:any = useRef("");


  function handleSubmit(e:any) {
    e.preventDefault();
    setTasks((currentTasks:any) => {return [...currentTasks,input.current.value]});
  }

  useEffect(()=>{
    console.log(tasks);
  },[tasks]);

  function onClickDelete(dItem:any) {
    setTasks(tasks.filter((item:any) => item != dItem));
    alert("Task Deleted!!!");
  }

  return (
    <>
      <center>
        <h1>ToDo List</h1>
      </center>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" className="form-control" name="text" id="text" ref={input}/>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      
      <ul className="list-group list-group-flush">
        {tasks.map((item:any) => {
          return (<><li key={item} className="list-group-item list-group-item-primary" >{item}</li> <button className="btn btn-danger" onClick={()=>{onClickDelete(item)}}>Delete</button></>);
        })}
      </ul>
    </>
  );
}

export default App;