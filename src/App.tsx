import { useEffect, useRef } from "react";
import '../index.css';

function App() {
  let tasks = [""];
  const input:any = useRef("");
  
  if (localStorage.length != 0){
    for (let x = 0;x<=localStorage.length;x++){
      if (localStorage.key(x) != "" && localStorage.key(x) != null){
        tasks.push(localStorage.key(x));
      }
      console.log(x);
    }
    console.log(tasks);
  } 

  function handleSubmit(e:any) {
    e.preventDefault();
    tasks.push(input.current.value);
    
    tasks.forEach(element => {
      localStorage.setItem(element,element);
    })
  }

  useEffect(()=>{
    console.log(tasks);
  },[tasks]);

  function onClickDelete(dItem:any) {
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
        {}
      </ul>
      
    </>
  );
}

export default App;