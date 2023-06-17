// importing hooks
import { useEffect, useRef, useState } from "react";
// adding stylesheet
import '../index.css';

// start of app component
function App() {
  //creating task useState array
  const [tasks,setTasks]:any = useState([]);
  //creating input refernce to get the value of input feild
  const input = useRef(null);
  //temporary array used for help remove duplication of tasks
  let tempArray = [];

  //when form is submitted
  const handleSubmit = (event:any) => {
    event.preventDefault();
    // get input fields value
    let value = input.current.value
    // check if its not empty
    if (value != ""){
      // add to the task useState along with the existing values
      setTasks((previousValue:any) => {
        return[...previousValue, value];
      })
      // adding it to localstorage of that website to keep the data even after refreshing
      localStorage.setItem(value,value);
    }
    
  };

  //run on every update to the tasks array
  useEffect(()=>{
    //removing duplicate entires when getting data from localStroage of website using temporary array
    if (tasks.length > localStorage.length){
      tempArray = [...new Set(tasks)];
      console.log(tempArray);
      setTasks([]);
      setTasks(tempArray);
    }
  },[tasks])

  // run on first load
  useEffect(()=>{
    // getting items from localstorage and adding it to tasks array
    for(let i = 0; i < localStorage.length; i++){
      setTasks((previousValue:any) => {
        return[...previousValue, localStorage.key(i)];
      })
    }
  },[])

  // if delete button is pressed
  const onClickDelete = (dItem:any) => {
    //deleting from the array
    setTasks(tasks.filter((item:any) => item != dItem));
    // deleting from localStorage
    localStorage.removeItem(dItem);
    // alert statement
    alert("Task Deleted!!!");
  }

  // componenet return
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
        {/* printing all the elements of tasks array */}
        {tasks.map((item:any) => {return <><li className="list-group-item" key={item}>{item}</li><button className="btn btn-danger" onClick={()=>{onClickDelete(item)}}>Delete</button></>})}
      </ul>
      
    </>
  );
}

export default App;