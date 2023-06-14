import { useEffect, useRef, useState } from "react";
import Item from "./components/item";


function App() {

  let [tasks,setTasks]:any = useState([]);
  const input:any = useRef("");


  function handleSubmit(e:any) {
    e.preventDefault();
    setTasks((currentTasks:any) => {return [...currentTasks,input.current.value]})
    console.log(tasks);
  }

  return (
    <>
      <center>
        <h1>ToDo List</h1>
      </center>
      <form action="#" onSubmit={handleSubmit}>
        <input type="text" name="text" id="text" ref={input}/>
        <button type="submit">submit</button>
      </form>


      <ul className="list-group">
        {tasks.map((item:any) => {
          return (<Item itemText={item} />);
        })}
      </ul>
    </>
  );
}

export default App;