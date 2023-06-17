import { useEffect, useRef, useState } from "react";
import '../index.css';

function App() {
  const [tasks,setTasks]:any = useState([]);
  const input = useRef();
  let tempArray = [];

  const handleSubmit = (event:any) => {
    event.preventDefault();
    // console.log(input.current.value);
    let value = input.current.value

    setTasks((previousValue:any) => {
      return[...previousValue, value];
    })

    localStorage.setItem(value,value);
    
  };

  useEffect(()=>{
    console.log(tasks);
  },[tasks])

  useEffect(()=>{
    for(let i = 0; i < localStorage.length; i++){
      // console.log(localStorage.key(i));
      setTasks((previousValue:any) => {
        return[...previousValue, localStorage.key(i)];
      })
    }
  },[])

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
        {tasks.map((item:any) => {return <li className="list-group-item" key={item}>{item}</li>})}
      </ul>
      
    </>
  );
}

export default App;